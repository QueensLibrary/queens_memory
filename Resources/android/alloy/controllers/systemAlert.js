function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function createListView(_data) {
        Ti.API.info(_data);
        for (var i in _data) items.push({
            template: "template1",
            textLabel: {
                text: _data[i].title
            },
            detailLabel: {
                text: _data[i].body
            }
        });
        $.section.setItems(items);
    }
    function stopMe(e) {
        $.systemAlertWin.close(args);
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "systemAlert";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.systemAlertWin = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "systemAlertWin",
        theme: "mytheme"
    });
    $.__views.systemAlertWin && $.addTopLevelView($.__views.systemAlertWin);
    $.__views.systemAlertView = Ti.UI.createView({
        backgroundColor: "black",
        opacity: .99,
        top: "0",
        modal: true,
        id: "systemAlertView"
    });
    $.__views.systemAlertWin.add($.__views.systemAlertView);
    $.__views.banner = Ti.UI.createView({
        top: "0.5%",
        width: "100%",
        height: "20%",
        font: {
            fontSize: 12
        },
        id: "banner"
    });
    $.__views.systemAlertView.add($.__views.banner);
    $.__views.banner2 = Ti.UI.createView({
        backgroundColor: "black",
        top: "0%",
        width: "100%",
        height: "25%",
        font: {
            fontSize: 14
        },
        id: "banner2"
    });
    $.__views.banner.add($.__views.banner2);
    $.__views.QL = Ti.UI.createImageView({
        width: "33%",
        top: "13%",
        id: "QL",
        image: "/images/QL300.png"
    });
    $.__views.banner2.add($.__views.QL);
    $.__views.titleBan = Ti.UI.createView({
        backgroundColor: "white",
        top: "25%",
        height: Titanium.UI.SIZE,
        font: {
            fontSize: 12
        },
        id: "titleBan"
    });
    $.__views.banner.add($.__views.titleBan);
    $.__views.qp = Ti.UI.createImageView({
        top: "8%",
        width: "28%",
        left: "5%",
        id: "qp",
        image: "/images/QM_FINAL_outlines.png"
    });
    $.__views.titleBan.add($.__views.qp);
    $.__views.Title = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            color: "black",
            fontFamily: "Montserrat-Regular",
            fontWeight: "bold"
        },
        top: "15%",
        right: "5%",
        text: "System Alerts",
        id: "Title"
    });
    $.__views.titleBan.add($.__views.Title);
    var __alloyId127 = {};
    var __alloyId129 = [];
    var __alloyId130 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId131 = [];
            var __alloyId132 = {
                type: "Ti.UI.Label",
                bindId: "textLabel",
                properties: {
                    font: {
                        fontSize: 14,
                        color: "black",
                        fontFamily: "Montserrat-Regular"
                    },
                    color: "#FFF",
                    left: "60dp",
                    top: 0,
                    textAlign: "left",
                    bindId: "textLabel"
                }
            };
            __alloyId131.push(__alloyId132);
            var __alloyId133 = {
                type: "Ti.UI.Label",
                bindId: "detailLabel",
                properties: {
                    font: {
                        fontSize: 10,
                        color: "black",
                        fontFamily: "Montserrat-Regular"
                    },
                    color: "#FFF",
                    left: "60dp",
                    top: 20,
                    textAlign: "left",
                    bindId: "detailLabel"
                }
            };
            __alloyId131.push(__alloyId133);
            return __alloyId131;
        }(),
        properties: {}
    };
    __alloyId129.push(__alloyId130);
    var __alloyId128 = {
        properties: {
            height: Ti.UI.SIZE,
            name: "template1"
        },
        childTemplates: __alloyId129
    };
    __alloyId127["template1"] = __alloyId128;
    var __alloyId135 = [];
    $.__views.__alloyId136 = {
        template: "template1",
        properties: {
            id: "__alloyId136"
        }
    };
    __alloyId135.push($.__views.__alloyId136);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    $.__views.section.items = __alloyId135;
    var __alloyId137 = [];
    __alloyId137.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        top: "13%",
        editing: true,
        sections: __alloyId137,
        templates: __alloyId127,
        id: "list",
        defaultItemTemplate: "template1"
    });
    $.__views.systemAlertView.add($.__views.list);
    $.__views.stop = Ti.UI.createButton({
        top: "90%",
        width: "400px",
        borderRadius: 5,
        borderColor: "gray",
        backgroundColor: "#f2f2f2",
        color: "black",
        title: "Close",
        id: "stop"
    });
    $.__views.systemAlertView.add($.__views.stop);
    stopMe ? $.addListener($.__views.stop, "click", stopMe) : __defers["$.__views.stop!click!stopMe"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Alloy.createController("digitalPhotoForm").getView();
    $.QL.image = "/images/QL300.png";
    $.qp.image = "/images/QM_FINAL_outlines.png";
    var items = [];
    createListView(args.messages);
    __defers["$.__views.stop!click!stopMe"] && $.addListener($.__views.stop, "click", stopMe);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;