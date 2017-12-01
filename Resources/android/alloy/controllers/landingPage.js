function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function startSession(e) {
        if ("" != Ti.App.Properties.getString("First Name") && "" != Ti.App.Properties.getString("Last Name") && "" != Ti.App.Properties.getString("Email Address")) {
            var props = Ti.App.Properties.listProperties();
            for (var i = 0, ilen = props.length; ilen > i; i++) {
                var value = Ti.App.Properties.getString(props[i]);
                Ti.API.info(props[i] + " = " + value);
                console.log(props[i] + " = " + value);
            }
            termsController = Alloy.createController("terms").getView();
            termsController.open();
        } else {
            termsController = Alloy.createController("terms").getView();
            termsController.open();
        }
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "landingPage";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.backDrop = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#B00000",
        id: "backDrop"
    });
    $.__views.backDrop && $.addTopLevelView($.__views.backDrop);
    $.__views.QMW = Ti.UI.createImageView({
        width: "70%",
        top: "25%",
        id: "QMW",
        image: "/images/QMW-ink.png"
    });
    $.__views.backDrop.add($.__views.QMW);
    $.__views.thanks = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            top: "10%",
            right: "10%",
            left: "10%",
            textAlign: "center",
            color: "white",
            font: {
                fontFamily: "Montserrat-Bold",
                fontSize: 16
            }
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            font: {
                fontSize: 25
            }
        });
        Alloy.deepExtend(true, o, {
            text: "Thank you for being a contributor to",
            id: "thanks"
        });
        return o;
    }());
    $.__views.backDrop.add($.__views.thanks);
    $.__views.startSession = Ti.UI.createButton({
        title: "Start Upload Session",
        color: "black",
        top: "75%",
        height: "50dp",
        width: "70%",
        backgroundColor: "#F0FFFF",
        borderRadius: 5,
        borderColor: "gray",
        font: {
            fontFamily: "Montserrat-Regular"
        },
        id: "startSession"
    });
    $.__views.backDrop.add($.__views.startSession);
    startSession ? $.addListener($.__views.startSession, "click", startSession) : __defers["$.__views.startSession!click!startSession"] = true;
    $.__views.QLL = Ti.UI.createImageView({
        top: "90%",
        width: "50%",
        id: "QLL",
        image: "QL-logo.png"
    });
    $.__views.backDrop.add($.__views.QLL);
    $.__views.buildNumber = Ti.UI.createLabel({
        top: "95%",
        left: "0%",
        width: "100%",
        color: "black",
        font: {
            fontFamily: "Montserrat-Bold",
            fontSize: 10
        },
        text: Ti.App.version,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "buildNumber"
    });
    $.__views.backDrop.add($.__views.buildNumber);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var termsController;
    $.QLL.image = "/images/QL-logo.png";
    $.QMW.image = "/images/QMW-ink.png";
    __defers["$.__views.startSession!click!startSession"] && $.addListener($.__views.startSession, "click", startSession);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;