function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "submenuItem";
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
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId123 = Ti.UI.createView({
        id: "__alloyId123"
    });
    $.__views.index.add($.__views.__alloyId123);
    onItemClick ? $.addListener($.__views.__alloyId123, "click", onItemClick) : __defers["$.__views.__alloyId123!click!onItemClick"] = true;
    onSwipe ? $.addListener($.__views.__alloyId123, "swipe", onSwipe) : __defers["$.__views.__alloyId123!swipe!onSwipe"] = true;
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.__alloyId123.add($.__views.title);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon"
    });
    $.__views.__alloyId123.add($.__views.icon);
    $.__views.__alloyId124 = Ti.UI.createView({
        id: "__alloyId124"
    });
    $.__views.index.add($.__views.__alloyId124);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId123!click!onItemClick"] && $.addListener($.__views.__alloyId123, "click", onItemClick);
    __defers["$.__views.__alloyId123!swipe!onSwipe"] && $.addListener($.__views.__alloyId123, "swipe", onSwipe);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;