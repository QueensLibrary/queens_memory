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
    this.__controllerPath = "leftmenu";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId79 = [];
    $.__views.appInfo = Ti.UI.createTableViewRow({
        color: "white",
        borderColor: "black",
        id: "appInfo",
        title: "About this App"
    });
    __alloyId79.push($.__views.appInfo);
    $.__views.__alloyId80 = Ti.UI.createTableViewRow({
        color: "white",
        borderColor: "black",
        title: "Bananas",
        id: "__alloyId80"
    });
    __alloyId79.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createTableViewRow({
        color: "white",
        borderColor: "black",
        title: "Carrots",
        id: "__alloyId81"
    });
    __alloyId79.push($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createTableViewRow({
        color: "white",
        borderColor: "black",
        title: "Potatoes",
        id: "__alloyId82"
    });
    __alloyId79.push($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createTableViewRow({
        color: "white",
        borderColor: "black",
        title: "Cod",
        id: "__alloyId83"
    });
    __alloyId79.push($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createTableViewRow({
        color: "white",
        borderColor: "black",
        title: "Haddock",
        id: "__alloyId84"
    });
    __alloyId79.push($.__views.__alloyId84);
    $.__views.lContainer = Ti.UI.createTableView({
        backgroundColor: "gray",
        width: "175",
        left: "0%",
        data: __alloyId79,
        id: "lContainer"
    });
    $.__views.lContainer && $.addTopLevelView($.__views.lContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;