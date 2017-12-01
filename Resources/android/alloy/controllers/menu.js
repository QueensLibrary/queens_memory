function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openMenu() {
        var menuView = $.getView();
        menuView.right = "-100%";
        menuView.left = "100%";
        menuView.animate({
            duration: "300",
            left: 0,
            right: 0
        });
        Ti.API.info("OPEN MENU");
        $.menuState = MENU_STATES.EXPANDED;
    }
    function closeMenu() {
        var menuView = $.getView();
        menuView.animate({
            duration: "300",
            left: "100%",
            right: "-100%"
        });
        Ti.API.info("CLOSE MENU");
        $.menuState = MENU_STATES.COLLAPSED;
    }
    function onSwipe(e) {
        "right" == e.direction && closeMenu();
    }
    function onNetworkChange(e) {
        _.each(itemControllers, function(_item) {
            Ti.API.info("Registering " + _item.getId());
            Alloy.Globals.offlineControllers.indexOf(_item.getId()) < 0 && (e.online ? _item.enable() : _item.disable());
        });
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createView({
        top: 0,
        width: "100%",
        height: Ti.UI.FILL,
        zIndex: 10,
        backgroundColor: "transparent",
        modal: true,
        left: "100%",
        right: "-100%",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.flyoutContainer = Ti.UI.createView({
        top: 0,
        width: "80%",
        right: 0,
        backgroundColor: "#723582",
        height: Ti.UI.SIZE,
        opacity: .8,
        layout: "vertical",
        id: "flyoutContainer"
    });
    $.__views.index.add($.__views.flyoutContainer);
    onSwipe ? $.addListener($.__views.flyoutContainer, "swipe", onSwipe) : __defers["$.__views.flyoutContainer!swipe!onSwipe"] = true;
    $.__views.menuContainer = Ti.UI.createScrollView({
        top: "0dp",
        width: "100%",
        right: "0dp",
        height: Ti.UI.FILL,
        backgroundColor: "transparent",
        layout: "vertical",
        scrollingEnabled: true,
        scrollType: "vertical",
        id: "menuContainer"
    });
    $.__views.flyoutContainer.add($.__views.menuContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var helperLib = require("menuLib");
    var selectedItem;
    var itemControllers = [];
    var parent;
    const MENU_STATES = {
        COLLAPSED: 0,
        EXPANDED: 1
    };
    $.menuState = MENU_STATES.COLLAPSED;
    var menuItemsArray = helperLib.menuItemsArray;
    var menuItems;
    $.closeMenu = closeMenu;
    $.toggleMenu = function() {
        Ti.API.info("MENU IS " + $.menuState);
        if ($.menuState == MENU_STATES.COLLAPSED) {
            Ti.API.info("OPEN MENU");
            openMenu();
        } else {
            Ti.API.info("CLOSE MENU");
            closeMenu();
        }
    };
    $.resetMenu = function() {
        $.menuContainer.removeAllChildren();
        _.each(menuItems, function(item, index) {
            var enabled;
            enabled = Ti.Network.getOnline() ? true : Alloy.Globals.offlineControllers.indexOf(item.id) >= 0;
            var itemController = Alloy.createController("handheld/menuItem", {
                parent: $,
                index: index,
                item: item,
                enabled: enabled
            });
            true === item.separator && itemController.setIsSeparator(true);
            $.menuContainer.add(itemController.getView());
            itemControllers.push(itemController);
            _.each(itemControllers, function(itemController) {
                itemController.showTitle();
            });
        });
        var buildItemCtrl = Alloy.createController("handheld/buildMenuItem", {
            parent: $
        });
        buildItemCtrl.setVersion(Ti.App.version + " - " + Alloy.Globals.ENV);
        $.menuContainer.add(buildItemCtrl.getView());
    };
    $.resetMenu();
    menuItemsArray = _.sortBy(menuItemsArray, function(item) {
        return item.index;
    });
    $.setParentController = function(p) {
        parent = p;
    };
    $.onMenuItemChange = function(idx) {
        Ti.App.fireEvent("app.navigation.event", {
            fromStr: "HomeMenu",
            toStr: menuItems[idx].title
        });
        $.menuState === MENU_STATES.COLLAPSED ? Ti.API.info("Menu is COLLAPSED") : $.menuState === MENU_STATES.EXPANDED && Ti.API.info("Menu is EXPANDED");
        if (Alloy.Globals.offlineControllers.indexOf(menuItems[idx].id) < 0 && !Alloy.Globals.checkOnline()) return;
        Ti.API.info("Load landing window for current selection > " + menuItems[idx].landing);
        if (menuItems[idx].landing) {
            if ("login" === menuItems[idx].landing) {
                var ctrl = Alloy.createController("handheld/login", {
                    success: loginLib.userAuthenticated,
                    parent: parent
                });
                ctrl.isModal = true;
                ctrl.headerBackgroundColor = "#EBEBEB";
                ctrl.headerTitle = "LOGIN TO YOUR ACCOUNT";
                parent.openWindow(ctrl, "__LOG");
            } else if ("terms" === menuItems[idx].landing) {
                var controller = Alloy.createController("handheld/browser", {
                    parentController: $,
                    url: "http://m.queenslibrary.org/about-us/copyright-disclaimer",
                    partnerUrl: true,
                    hideNavArrows: true
                });
                controller.open(false);
            } else if ("contactUs" === menuItems[idx].landing) {
                var controller = Alloy.createController("handheld/browser", {
                    parentController: $,
                    url: ("QA" === Alloy.Globals.ENV ? "http://mqa" : "http://m") + ".queenslibrary.org/contact-us",
                    partnerUrl: false,
                    hideNavArrows: true
                });
                controller.open();
            } else if ("donate" === menuItems[idx].landing) {
                Alloy.Globals.sendAdobeTrackState("Donate");
                var controller = Alloy.createController("handheld/browser", {
                    parentController: $,
                    url: "http://foundation.queenslibrary.org/give-now",
                    partnerUrl: true,
                    hideNavArrows: true
                });
                controller.open();
            } else if ("landing" === menuItems[idx].landing) parent.getWindowManager().clear(); else if ("logout" === menuItems[idx].landing) parent.header.loginLogout(); else if ("__EBO" === menuItems[idx].id) if (Alloy.Globals.holdsChecked) parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id); else {
                var ebookLib = require("commonLibraries/ebooksCommonLib");
                activityWindow.show("Checking User\nHolds");
                ebookLib.setUserHolds().then(function() {
                    activityWindow.hide();
                    parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);
                });
            } else if (parent) {
                parent.getWindowManager().clear();
                parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);
            } else {
                var controller = Alloy.createController("handheld/main", {
                    action: "handheld/" + menuItems[idx].landing,
                    landing: $
                });
                controller.getView().open();
            }
            closeMenu();
        }
    };
    $.currentSelectedItem = function() {
        return selectedItem;
    };
    $.onSwipe = onSwipe;
    Titanium.Network.addEventListener("change", onNetworkChange);
    $.index.addEventListener("click", function() {
        closeMenu();
    });
    Ti.App.addEventListener("app.change.env.done", $.resetMenu);
    __defers["$.__views.flyoutContainer!swipe!onSwipe"] && $.addListener($.__views.flyoutContainer, "swipe", onSwipe);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;