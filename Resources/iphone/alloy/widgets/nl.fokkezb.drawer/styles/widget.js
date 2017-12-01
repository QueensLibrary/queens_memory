module.exports = [{ "isApi": true, "priority": 1000.0001, "key": "Window", "style": { orientationModes: [Ti.UI.PORTRAIT] } }, { "isApi": true, "priority": 1000.0002, "key": "Button", "style": {} }];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ? 'nl.fokkezb.drawer/' + s : s.substring(0, index) + '/nl.fokkezb.drawer/' + s.substring(index + 1);

	return path.indexOf('/') !== 0 ? '/' + path : path;
}