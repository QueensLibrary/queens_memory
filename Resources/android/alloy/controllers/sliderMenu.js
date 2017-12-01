function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId121() {
        $.__views.__alloyId113.removeEventListener("open", __alloyId121);
        if ($.__views.__alloyId113.activity) $.__views.__alloyId113.activity.onCreateOptionsMenu = function(e) {
            var __alloyId114 = {
                id: "menuItem",
                title: "Item 1"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId114, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId114, Alloy.Android.menuItemCreateArgs));
            $.menuItem = $.__views.menuItem;
            doClick ? $.addListener($.__views.menuItem, "click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
            var __alloyId115 = {
                id: "menuItem",
                title: "Item 1"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId115, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId115, Alloy.Android.menuItemCreateArgs));
            $.menuItem = $.__views.menuItem;
            doClick ? $.addListener($.__views.menuItem, "click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
            var __alloyId116 = {
                id: "menuItem",
                title: "Item 1"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId116, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId116, Alloy.Android.menuItemCreateArgs));
            $.menuItem = $.__views.menuItem;
            doClick ? $.addListener($.__views.menuItem, "click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
            var __alloyId117 = {
                id: "menuItem",
                title: "Item 1"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId117, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId117, Alloy.Android.menuItemCreateArgs));
            $.menuItem = $.__views.menuItem;
            doClick ? $.addListener($.__views.menuItem, "click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
            var __alloyId118 = {
                id: "menuItem",
                title: "Item 1"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId118, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId118, Alloy.Android.menuItemCreateArgs));
            $.menuItem = $.__views.menuItem;
            doClick ? $.addListener($.__views.menuItem, "click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
            var __alloyId119 = {
                id: "menuItem",
                title: "Item 1"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId119, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId119, Alloy.Android.menuItemCreateArgs));
            $.menuItem = $.__views.menuItem;
            doClick ? $.addListener($.__views.menuItem, "click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
            var __alloyId120 = {
                id: "menuItem",
                title: "Item 1"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId120, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId120, Alloy.Android.menuItemCreateArgs));
            $.menuItem = $.__views.menuItem;
            doClick ? $.addListener($.__views.menuItem, "click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sliderMenu";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sliderWin = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.PORTRAIT ],
        width: "50%",
        right: "0%",
        top: "5%",
        zIndex: 0,
        id: "sliderWin"
    });
    $.__views.sliderWin && $.addTopLevelView($.__views.sliderWin);
    $.__views.__alloyId113 = Ti.UI.createScrollView({
        id: "__alloyId113"
    });
    $.__views.sliderWin.add($.__views.__alloyId113);
    $.__views.__alloyId113.addEventListener("open", __alloyId121);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var TnC = Titanium.UI.createButton({});
    TnC.addEventListener("click", function(e) {
        Titanium.API.info("You clicked the button");
        console.log("In sliderMenu.js");
    });
    __defers["$.__views.menuItem!click!doClick"] && $.addListener($.__views.menuItem, "click", doClick);
    __defers["$.__views.menuItem!click!doClick"] && $.addListener($.__views.menuItem, "click", doClick);
    __defers["$.__views.menuItem!click!doClick"] && $.addListener($.__views.menuItem, "click", doClick);
    __defers["$.__views.menuItem!click!doClick"] && $.addListener($.__views.menuItem, "click", doClick);
    __defers["$.__views.menuItem!click!doClick"] && $.addListener($.__views.menuItem, "click", doClick);
    __defers["$.__views.menuItem!click!doClick"] && $.addListener($.__views.menuItem, "click", doClick);
    __defers["$.__views.menuItem!click!doClick"] && $.addListener($.__views.menuItem, "click", doClick);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;