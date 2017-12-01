function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function photoSubmit(e) {
        var scanItemController = Alloy.createController("digitalPhotoForm").getView();
        scanItemController.open();
        scanItemController = null;
    }
    function scanSubmit(e) {
        var digitalPhotoFormController = Alloy.createController("scanItemForm").getView();
        digitalPhotoFormController.open();
        digitalPhotoFormController = null;
    }
    function oralHistSubmit(e) {
        var oralHistoryController = Alloy.createController("oralHistoryForm").getView();
        oralHistoryController.open();
        oralHistoryController = null;
    }
    function soundSubmit(e) {
        var wildSoundController = Alloy.createController("wildSoundForm").getView();
        wildSoundController.open();
        wildSoundController = null;
    }
    function systemSubmit(e) {
        var args = {
            alertStatus: currentAlertStatus,
            messages: statusAlerts
        };
        var alertController = Alloy.createController("systemAlert", args).getView();
        alertController.open();
        alertController = null;
    }
    function backButton(e) {
        $.uploadWin.close();
    }
    function checkSystemAlerts(_callback) {
        if (!Ti.Network.getOnline()) {
            Alloy.Globals.displayWifiSettingsAlert();
            return;
        }
        var xhr1 = Ti.Network.createHTTPClient({
            timeout: 6e4
        });
        xhr1.open("GET", "https://uploadapi.queenslibrary.org:8081/api/v1/valets/mobile_status");
        xhr1.onerror = function(e) {
            _callback && _callback({
                success: false,
                error: e
            });
            console.log("onError!!");
            return;
        };
        xhr1.onload = function(e) {
            console.info(this.status);
            console.info(this.readyState);
            console.info(this.responseText);
            _callback && _callback({
                success: true,
                response: xhr1.responseText
            });
            console.log("onLoad Success!!");
            return;
        };
        Ti.API.info("onLoad and onError functions set.....");
        Ti.API.info("Sending....." + xhr1.location);
        xhr1.send();
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "uploadScreen";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.uploadWin = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.PORTRAIT ],
        title: "Upload Screen",
        exitOnClose: true,
        id: "uploadWin",
        theme: "mytheme"
    });
    $.__views.uploadWin && $.addTopLevelView($.__views.uploadWin);
    $.__views.menu = Alloy.createWidget("com.madrocket.ti.slidemenu", "widget", {
        id: "menu",
        __parentSymbol: $.__views.uploadWin
    });
    $.__views.menu.setParent($.__views.uploadWin);
    $.__views.uploadView = Ti.UI.createView({
        backgroundColor: "#B00000",
        height: Titanium.UI.FILL,
        id: "uploadView"
    });
    $.__views.uploadWin.add($.__views.uploadView);
    $.__views.banner2 = Ti.UI.createView({
        top: "3%",
        width: "100%",
        zIndex: 1,
        font: {
            fontSize: 14
        },
        height: "6%",
        id: "banner2"
    });
    $.__views.uploadView.add($.__views.banner2);
    $.__views.back = Ti.UI.createButton({
        width: "12%",
        backgroundColor: "transparent",
        borderRadius: 5,
        color: "white",
        font: {
            fontFamily: "queensfoundationfont",
            fontSize: 32,
            bottom: "0%"
        },
        left: "5%",
        borderColor: "transparent",
        title: "T",
        id: "back"
    });
    $.__views.banner2.add($.__views.back);
    backButton ? $.addListener($.__views.back, "click", backButton) : __defers["$.__views.back!click!backButton"] = true;
    $.__views.qpl = Ti.UI.createImageView({
        width: "33%",
        top: "10%",
        id: "qpl",
        image: "/images/QL300.png"
    });
    $.__views.banner2.add($.__views.qpl);
    $.__views.Title = Ti.UI.createLabel({
        vsible: false,
        id: "Title"
    });
    $.__views.uploadView.add($.__views.Title);
    $.__views.QMW = Ti.UI.createImageView({
        width: "35%",
        top: "10%",
        id: "QMW",
        image: "QMW-ink.png"
    });
    $.__views.uploadView.add($.__views.QMW);
    $.__views.help = Ti.UI.createLabel({
        top: "20%",
        right: "7%",
        left: "10%",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 12
        },
        color: "black",
        text: "Help us document! We welcome your contributions to the Archives and look forward to adding your donations to our online collections.",
        id: "help"
    });
    $.__views.uploadView.add($.__views.help);
    $.__views.choose = Ti.UI.createLabel({
        right: "3%",
        left: "7%",
        top: "35%",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold",
            fontSize: 16
        },
        color: "black",
        text: "Choose the type of item you are sharing with App",
        id: "choose"
    });
    $.__views.uploadView.add($.__views.choose);
    $.__views.photo = Ti.UI.createButton({
        width: "70%",
        backgroundColor: "#f2f2f2",
        borderRadius: 5,
        color: "black",
        font: {
            fontFamily: "Montserrat-Regular"
        },
        top: "45%",
        borderColor: "gray",
        title: "DIGITAL PHOTOGRAPH",
        id: "photo"
    });
    $.__views.uploadView.add($.__views.photo);
    photoSubmit ? $.addListener($.__views.photo, "click", photoSubmit) : __defers["$.__views.photo!click!photoSubmit"] = true;
    $.__views.scan = Ti.UI.createButton({
        width: "70%",
        backgroundColor: "#f2f2f2",
        borderRadius: 5,
        color: "black",
        font: {
            fontFamily: "Montserrat-Regular"
        },
        top: "55%",
        borderColor: "gray",
        title: "SCANNED ITEM",
        id: "scan"
    });
    $.__views.uploadView.add($.__views.scan);
    scanSubmit ? $.addListener($.__views.scan, "click", scanSubmit) : __defers["$.__views.scan!click!scanSubmit"] = true;
    $.__views.oral = Ti.UI.createButton({
        width: "70%",
        backgroundColor: "#f2f2f2",
        borderRadius: 5,
        color: "black",
        font: {
            fontFamily: "Montserrat-Regular"
        },
        top: "65%",
        title: "ORAL HISTORY INTERVIEW",
        id: "oral"
    });
    $.__views.uploadView.add($.__views.oral);
    oralHistSubmit ? $.addListener($.__views.oral, "click", oralHistSubmit) : __defers["$.__views.oral!click!oralHistSubmit"] = true;
    $.__views.sound = Ti.UI.createButton({
        width: "70%",
        backgroundColor: "#f2f2f2",
        borderRadius: 5,
        color: "black",
        font: {
            fontFamily: "Montserrat-Regular"
        },
        top: "75%",
        borderColor: "gray",
        title: "WILD SOUND RECORDING",
        id: "sound"
    });
    $.__views.uploadView.add($.__views.sound);
    soundSubmit ? $.addListener($.__views.sound, "click", soundSubmit) : __defers["$.__views.sound!click!soundSubmit"] = true;
    $.__views.alerts = Ti.UI.createButton({
        width: "400px",
        backgroundColor: "black",
        borderRadius: 5,
        color: "white",
        font: {
            fontFamily: "Montserrat-Regular"
        },
        top: "85%",
        title: "System Alerts",
        id: "alerts"
    });
    $.__views.uploadView.add($.__views.alerts);
    systemSubmit ? $.addListener($.__views.alerts, "click", systemSubmit) : __defers["$.__views.alerts!click!systemSubmit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var currentAlertStatus;
    var statusAlerts = [];
    $.alerts.visible = false;
    $.qpl.image = "/images/QL300.png";
    $.QMW.image = "/images/QMW-ink.png";
    var statuscallback = function(_response) {
        if (_response.success && _response.response.length > 0) {
            Ti.API.debug("Sent: " + JSON.stringify(_response.response, null, 2));
            var parseMessages = JSON.parse(_response.response);
            var fullMessages = parseMessages.messages;
            var title = "";
            var body = "";
            statusAlerts.push({
                title: title,
                body: body
            });
            for (var i = 0; i < fullMessages.length; i++) {
                var title = JSON.stringify(fullMessages[i].title);
                var body = JSON.stringify(fullMessages[i].body);
                title = title.replace(/"/g, "");
                body = body.replace(/"/g, "");
                statusAlerts.push({
                    title: title,
                    body: body
                });
            }
            statusAlerts.length > 0 && ($.alerts.visible = true);
        } else Ti.API.debug("Something went wrong. Please try to submit again. \n");
    };
    checkSystemAlerts(statuscallback);
    __defers["$.__views.back!click!backButton"] && $.addListener($.__views.back, "click", backButton);
    __defers["$.__views.photo!click!photoSubmit"] && $.addListener($.__views.photo, "click", photoSubmit);
    __defers["$.__views.scan!click!scanSubmit"] && $.addListener($.__views.scan, "click", scanSubmit);
    __defers["$.__views.oral!click!oralHistSubmit"] && $.addListener($.__views.oral, "click", oralHistSubmit);
    __defers["$.__views.sound!click!soundSubmit"] && $.addListener($.__views.sound, "click", soundSubmit);
    __defers["$.__views.alerts!click!systemSubmit"] && $.addListener($.__views.alerts, "click", systemSubmit);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;