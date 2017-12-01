function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "thisWidget/" + s : s.substring(0, index) + "/thisWidget/" + s.substring(index + 1);
    return 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        orientationModes: [ Ti.UI.PORTRAIT ]
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Button",
    style: {}
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
} ];