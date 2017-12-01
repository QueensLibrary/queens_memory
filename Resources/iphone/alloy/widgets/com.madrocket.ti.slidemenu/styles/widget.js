module.exports = [{ "isApi": true, "priority": 1000.0001, "key": "Window", "style": { orientationModes: [Ti.UI.PORTRAIT] } }, { "isApi": true, "priority": 1000.0002, "key": "Button", "style": {} }];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ? 'com.madrocket.ti.slidemenu/' + s : s.substring(0, index) + '/com.madrocket.ti.slidemenu/' + s.substring(index + 1);

	return path.indexOf('/') !== 0 ? '/' + path : path;
}