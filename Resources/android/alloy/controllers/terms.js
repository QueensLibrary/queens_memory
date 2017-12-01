function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function submit(e) {
        var email = $.emailA.value;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if ("" === $.fText.value || "" === $.lText.value || "" === $.emailA.value) alert("You must fill out all the required fields to agree!"); else if (1 > atpos || atpos + 2 > dotpos || dotpos + 2 >= email.length) alert("This email address is not valid"); else {
            Ti.App.Properties.setString("First Name", $.fText.value);
            Ti.App.Properties.setString("Last Name", $.lText.value);
            Ti.App.Properties.setString("Email Address", $.emailA.value);
            Ti.App.Properties.setBool("Remember Me", $.checkBox.value);
            uploadScreenController = Alloy.createController("uploadScreen").getView();
            uploadScreenController.open();
            uploadScreenController = null;
        }
    }
    function helpSubmit(e) {
        var args = {
            thisTitle: $.Title.text,
            thisField: $.email.text,
            thisButtonID: e.source.id
        };
        alertController = Alloy.createController("helpNote", args).getView();
        alertController.open();
    }
    function stopMe(e) {
        $.termsWin.close();
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "terms";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.termsWin = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.PORTRAIT ],
        backgroundColor: "black",
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_HIDDEN,
        id: "termsWin",
        theme: "mytheme"
    });
    $.__views.termsWin && $.addTopLevelView($.__views.termsWin);
    $.__views.banner = Ti.UI.createView({
        top: "0%",
        width: "100%",
        height: "20%",
        font: {
            fontSize: 12
        },
        id: "banner"
    });
    $.__views.termsWin.add($.__views.banner);
    $.__views.libLogo = Ti.UI.createView({
        backgroundColor: "black",
        top: "0%",
        height: "20%",
        id: "libLogo"
    });
    $.__views.banner.add($.__views.libLogo);
    $.__views.qpl = Ti.UI.createImageView({
        width: "30%",
        left: "5%",
        id: "qpl",
        image: "/images/QL-logo.png"
    });
    $.__views.libLogo.add($.__views.qpl);
    $.__views.titleBan = Ti.UI.createView({
        backgroundColor: "white",
        top: "20%",
        height: "500dp",
        font: {
            fontSize: 12
        },
        id: "titleBan"
    });
    $.__views.banner.add($.__views.titleBan);
    $.__views.qp = Ti.UI.createImageView({
        top: "2%",
        width: "28%",
        left: "5%",
        id: "qp",
        image: "/images/QM_FINAL_outlines.png"
    });
    $.__views.titleBan.add($.__views.qp);
    $.__views.Title = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular",
            fontWeight: "bold",
            fontSize: 18
        },
        textAlign: "Titanium.UI.TEXT_ALIGNMENT_RIGHT",
        top: "2%",
        left: "70%",
        color: "black",
        text: "Terms & Conditions",
        id: "Title"
    });
    $.__views.titleBan.add($.__views.Title);
    $.__views.__alloyId138 = Ti.UI.createScrollView({
        top: "14%",
        backgroundColor: "gray",
        showVerticalScrollIndicator: "true",
        width: Titanium.UI.FILL,
        bottom: "0%",
        contentHeight: Titanium.UI.SIZE,
        contentWidth: "auto",
        layout: "vertical",
        scrollType: "vertical",
        id: "__alloyId138"
    });
    $.__views.termsWin.add($.__views.__alloyId138);
    $.__views.termsView = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "500dp",
            width: "100%",
            backgroundColor: "black"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "45%",
            width: "100%",
            backgroundColor: "black"
        });
        Alloy.deepExtend(true, o, {
            id: "termsView"
        });
        return o;
    }());
    $.__views.__alloyId138.add($.__views.termsView);
    $.__views.doYou = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular",
            fontWeight: "bold",
            fontSize: 18
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: "5%",
        left: "5%",
        right: "5%",
        color: "white",
        text: "Do you agree to the following terms and conditions?",
        id: "doYou"
    });
    $.__views.termsView.add($.__views.doYou);
    $.__views.termsnC = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 12
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: "18%",
        left: "7%",
        right: "5%",
        color: "white",
        text: "The Terms and Conditions agreement can act as a legal contract between you, the mobile app owner or developer, and the users of your app. Like a Terms and Conditions for a website, this agreement for a mobile app would set the rules and terms that users must follow in order to use your app.",
        id: "termsnC",
        autoLink: Titanium.UI.AUTOLINK_URLS
    });
    $.__views.termsView.add($.__views.termsnC);
    $.__views.asterisk = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontFamily: "Montserrat-Regular"
            },
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        Alloy.isHandheld && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "20",
                fontFamily: "Montserrat-Regular",
                fontStyle: "",
                fontWeight: ""
            }
        });
        Alloy.deepExtend(true, o, {
            color: "red",
            left: "32%",
            top: "96%",
            text: "*",
            id: "asterisk"
        });
        return o;
    }());
    $.__views.termsView.add($.__views.asterisk);
    $.__views.field = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular",
            fontSize: 12
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        top: "97%",
        right: "25%",
        text: "denotes required fields.",
        id: "field"
    });
    $.__views.termsView.add($.__views.field);
    $.__views.view2 = Ti.UI.createView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            height: "500dp",
            backgroundColor: "black"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            height: "100%",
            backgroundColor: "black"
        });
        Alloy.deepExtend(true, o, {
            id: "view2"
        });
        return o;
    }());
    $.__views.__alloyId138.add($.__views.view2);
    $.__views.firstName = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        top: "5%",
        left: "5%",
        text: "First Name",
        id: "firstName"
    });
    $.__views.view2.add($.__views.firstName);
    $.__views.fAsterisk = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontFamily: "Montserrat-Regular"
            },
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        Alloy.isHandheld && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "20",
                fontFamily: "Montserrat-Regular",
                fontStyle: "",
                fontWeight: ""
            }
        });
        Alloy.deepExtend(true, o, {
            color: "red",
            top: "4%",
            left: "29%",
            text: "*",
            id: "fAsterisk"
        });
        return o;
    }());
    $.__views.view2.add($.__views.fAsterisk);
    $.__views.fText = Ti.UI.createTextField({
        top: "13%",
        width: "85%",
        left: "5%",
        id: "fText"
    });
    $.__views.view2.add($.__views.fText);
    $.__views.lastName = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        top: "25%",
        left: "5%",
        text: "Last Name",
        id: "lastName"
    });
    $.__views.view2.add($.__views.lastName);
    $.__views.lAsterisk = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontFamily: "Montserrat-Regular"
            },
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        Alloy.isHandheld && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "20",
                fontFamily: "Montserrat-Regular",
                fontStyle: "",
                fontWeight: ""
            }
        });
        Alloy.deepExtend(true, o, {
            color: "red",
            top: "24%",
            left: "29%",
            text: "*",
            id: "lAsterisk"
        });
        return o;
    }());
    $.__views.view2.add($.__views.lAsterisk);
    $.__views.lText = Ti.UI.createTextField({
        top: "33%",
        width: "85%",
        left: "5%",
        id: "lText"
    });
    $.__views.view2.add($.__views.lText);
    $.__views.email = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        top: "46%",
        left: "5%",
        text: "Email Address",
        id: "email"
    });
    $.__views.view2.add($.__views.email);
    $.__views.eAsterisk = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            font: {
                fontFamily: "Montserrat-Regular"
            },
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        Alloy.isHandheld && Alloy.deepExtend(true, o, {
            font: {
                fontSize: "20",
                fontFamily: "Montserrat-Regular",
                fontStyle: "",
                fontWeight: ""
            }
        });
        Alloy.deepExtend(true, o, {
            color: "red",
            top: "45%",
            left: "36%",
            text: "*",
            id: "eAsterisk"
        });
        return o;
    }());
    $.__views.view2.add($.__views.eAsterisk);
    $.__views.EmailhelpButton = Ti.UI.createButton({
        font: {
            fontFamily: "Entypo",
            fontSize: 40
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        zIndex: 1,
        top: "55%",
        width: "9%",
        right: "10%",
        height: "4%",
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "white",
        title: "b",
        id: "EmailhelpButton"
    });
    $.__views.view2.add($.__views.EmailhelpButton);
    helpSubmit ? $.addListener($.__views.EmailhelpButton, "click", helpSubmit) : __defers["$.__views.EmailhelpButton!click!helpSubmit"] = true;
    $.__views.emailA = Ti.UI.createTextField({
        top: "54%",
        width: "85%",
        left: "5%",
        id: "emailA"
    });
    $.__views.view2.add($.__views.emailA);
    $.__views.rememberMe = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular",
            fontSize: 12
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        top: "66%",
        left: "23%",
        text: "Remember Me",
        id: "rememberMe"
    });
    $.__views.view2.add($.__views.rememberMe);
    $.__views.checkBox = Ti.UI.createSwitch({
        top: "65%",
        width: "25%",
        color: "white",
        right: "31%",
        id: "checkBox"
    });
    $.__views.view2.add($.__views.checkBox);
    $.__views.submit = Ti.UI.createButton({
        font: {
            fontFamily: "Montserrat-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: "75%",
        width: "70%",
        borderRadius: 5,
        borderColor: "gray",
        backgroundColor: "#f2f2f2",
        color: "black",
        title: "Agree",
        id: "submit"
    });
    $.__views.view2.add($.__views.submit);
    submit ? $.addListener($.__views.submit, "click", submit) : __defers["$.__views.submit!click!submit"] = true;
    $.__views.stop = Ti.UI.createButton({
        font: {
            fontFamily: "Montserrat-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: "88%",
        width: "70%",
        borderRadius: 5,
        borderColor: "gray",
        backgroundColor: "#f2f2f2",
        color: "black",
        title: "Cancel",
        id: "stop"
    });
    $.__views.view2.add($.__views.stop);
    stopMe ? $.addListener($.__views.stop, "click", stopMe) : __defers["$.__views.stop!click!stopMe"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var uploadScreenController;
    Ti.Platform.displayCaps.platformWidth;
    Ti.Platform.displayCaps.platformHeight;
    $.qpl.image = "/images/QL-logo.png";
    $.qp.image = "/images/QM_FINAL_outlines.png";
    $.checkBox.value = !!Ti.App.Properties.getBool("Remember Me");
    if (true == $.checkBox.value) {
        $.fText.value = Ti.App.Properties.getString("First Name") || "";
        $.lText.value = Ti.App.Properties.getString("Last Name") || "";
        $.emailA.value = Ti.App.Properties.getString("Email Address") || "";
    }
    __defers["$.__views.EmailhelpButton!click!helpSubmit"] && $.addListener($.__views.EmailhelpButton, "click", helpSubmit);
    __defers["$.__views.submit!click!submit"] && $.addListener($.__views.submit, "click", submit);
    __defers["$.__views.stop!click!stopMe"] && $.addListener($.__views.stop, "click", stopMe);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;