function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.madrocket.ti.slidemenu/" + s : s.substring(0, index) + "/com.madrocket.ti.slidemenu/" + s.substring(index + 1);
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
} ];