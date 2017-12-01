var Alloy = require('/alloy'),
    Backbone = Alloy.Backbone,
    _ = Alloy._;

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
    delete obj[key];
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'menu';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.index = Ti.UI.createView({ top: 0, width: "100%", height: Ti.UI.FILL, zIndex: 10, backgroundColor: "transparent", modal: true, left: "100%", right: "-100%", id: "index" });
  $.__views.index && $.addTopLevelView($.__views.index);
  $.__views.flyoutContainer = Ti.UI.createView({ top: 0, width: "80%", right: 0, backgroundColor: "#723582", height: Ti.UI.SIZE, opacity: 0.8, layout: "vertical", id: "flyoutContainer" });
  $.__views.index.add($.__views.flyoutContainer);
  onSwipe ? $.addListener($.__views.flyoutContainer, 'swipe', onSwipe) : __defers['$.__views.flyoutContainer!swipe!onSwipe'] = true;$.__views.menuContainer = Ti.UI.createScrollView({ top: "0dp", width: "100%", right: "0dp", height: Ti.UI.FILL, backgroundColor: "transparent", layout: "vertical", scrollingEnabled: true, scrollType: "vertical", id: "menuContainer" });
  $.__views.flyoutContainer.add($.__views.menuContainer);
  exports.destroy = function () {};

  _.extend($, $.__views);

  var helperLib = require('menuLib');


  var selectedItem, previousSelectedItem;
  var itemControllers = [];
  var parent;
  const MENU_STATES = {
    COLLAPSED: 0,
    EXPANDED: 1
  };

  $.menuState = MENU_STATES.COLLAPSED;


  var menuItemsArray = helperLib.menuItemsArray;

  var menuItems;

  function openMenu() {
    var menuView = $.getView();

    menuView.right = '-100%';
    menuView.left = '100%';

    menuView.animate({
      duration: '300',
      left: 0,
      right: 0
    });
    Ti.API.info('OPEN MENU');
    $.menuState = MENU_STATES.EXPANDED;
  }

  function closeMenu() {
    var menuView = $.getView();
    menuView.animate({
      duration: '300',
      left: "100%",
      right: "-100%"
    });
    Ti.API.info('CLOSE MENU');
    $.menuState = MENU_STATES.COLLAPSED;
  }
  $.closeMenu = closeMenu;

  $.toggleMenu = function () {
    Ti.API.info('MENU IS ' + $.menuState);
    if ($.menuState == MENU_STATES.COLLAPSED) {
      Ti.API.info('OPEN MENU');
      openMenu();
    } else {
      Ti.API.info('CLOSE MENU');
      closeMenu();
    }
  };

  $.resetMenu = function () {
    $.menuContainer.removeAllChildren();

    _.each(menuItems, function (item, index) {
      var enabled;
      if (Ti.Network.getOnline()) {
        enabled = true;
      } else {
        enabled = Alloy.Globals.offlineControllers.indexOf(item.id) >= 0;
      }
      var itemController = Alloy.createController("handheld/menuItem", {
        parent: $,
        index: index,
        item: item,
        enabled: enabled
      });
      if (item.separator === true) {
        itemController.setIsSeparator(true);
      }

      $.menuContainer.add(itemController.getView());
      itemControllers.push(itemController);

      _.each(itemControllers, function (itemController) {
        itemController.showTitle();
      });
    });

    var buildItemCtrl = Alloy.createController("handheld/buildMenuItem", { parent: $ });
    buildItemCtrl.setVersion(Ti.App.version + " - " + Alloy.Globals.ENV);
    $.menuContainer.add(buildItemCtrl.getView());
  };
  $.resetMenu();

  menuItemsArray = _.sortBy(menuItemsArray, function (item) {
    return item.index;
  });

  $.setParentController = function (p) {
    parent = p;
  };

  $.onMenuItemChange = function (idx) {
    Ti.App.fireEvent("app.navigation.event", {
      fromStr: "HomeMenu",
      toStr: menuItems[idx].title
    });

    if ($.menuState === MENU_STATES.COLLAPSED) {
      Ti.API.info("Menu is COLLAPSED");
    } else if ($.menuState === MENU_STATES.EXPANDED) {
      Ti.API.info("Menu is EXPANDED");
    }

    if (Alloy.Globals.offlineControllers.indexOf(menuItems[idx].id) < 0) {
      if (!Alloy.Globals.checkOnline()) {
        return;
      }
    }

    Ti.API.info("Load landing window for current selection > " + menuItems[idx].landing);

    if (menuItems[idx].landing) {
      if (menuItems[idx].landing === "login") {
        var ctrl = Alloy.createController('handheld/login', { success: loginLib.userAuthenticated, parent: parent });
        ctrl.isModal = true;
        ctrl.headerBackgroundColor = "#EBEBEB";
        ctrl.headerTitle = "LOGIN TO YOUR ACCOUNT";
        parent.openWindow(ctrl, "__LOG");
      } else if (menuItems[idx].landing === 'terms') {
        var controller = Alloy.createController("handheld/browser", {
          "parentController": $,
          "url": "http://m.queenslibrary.org/about-us/copyright-disclaimer",
          "partnerUrl": true,
          'hideNavArrows': true
        });
        controller.open(false);
      } else if (menuItems[idx].landing === 'contactUs') {
        var controller = Alloy.createController("handheld/browser", {
          "parentController": $,
          "url": (Alloy.Globals.ENV === 'QA' ? "http://mqa" : "http://m") + ".queenslibrary.org/contact-us",
          "partnerUrl": false,
          'hideNavArrows': true
        });
        controller.open();
      } else if (menuItems[idx].landing === 'donate') {
        Alloy.Globals.sendAdobeTrackState("Donate");
        if (true) {
          Ti.Platform.openURL("http://foundation.queenslibrary.org/give-now/?mydevice=apple");
        } else {
          var controller = Alloy.createController("handheld/browser", {
            "parentController": $,
            "url": "http://foundation.queenslibrary.org/give-now",
            "partnerUrl": true,
            "hideNavArrows": true
          });
          controller.open();
        }
      } else if (menuItems[idx].landing === "landing") {
        parent.getWindowManager().clear();
      } else if (menuItems[idx].landing === "logout") {
        parent.header.loginLogout();
      } else if (menuItems[idx].id === '__EBO') {
        if (!Alloy.Globals.holdsChecked) {
          var ebookLib = require('commonLibraries/ebooksCommonLib');

          activityWindow.show('Checking User\nHolds');
          ebookLib.setUserHolds().then(function () {
            activityWindow.hide();
            parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);
          });
        } else {
          parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);
        }
      } else if (parent) {
        parent.getWindowManager().clear();

        parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);
      } else {
        var controller = Alloy.createController('handheld/main', {
          action: "handheld/" + menuItems[idx].landing,
          landing: $
        });
        controller.getView().open();
      };
      closeMenu();
    }
  };

  $.currentSelectedItem = function () {
    return selectedItem;
  };

  function onSwipe(e) {
    if (e.direction == "right") {
      closeMenu();
    }
  }

  $.onSwipe = onSwipe;

  Titanium.Network.addEventListener("change", onNetworkChange);

  function onNetworkChange(e) {
    _.each(itemControllers, function (_item) {
      Ti.API.info("Registering " + _item.getId());
      if (Alloy.Globals.offlineControllers.indexOf(_item.getId()) < 0) {
        e.online ? _item.enable() : _item.disable();
      }
    });
  };

  $.index.addEventListener('click', function () {
    closeMenu();
  });

  Ti.App.addEventListener('app.change.env.done', $.resetMenu);

  __defers['$.__views.flyoutContainer!swipe!onSwipe'] && $.addListener($.__views.flyoutContainer, 'swipe', onSwipe);

  _.extend($, exports);
}

module.exports = Controller;