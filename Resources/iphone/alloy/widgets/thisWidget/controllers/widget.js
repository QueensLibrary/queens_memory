var Alloy = require('/alloy'),
    Backbone = Alloy.Backbone,
    _ = Alloy._;

function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ? 'thisWidget/' + s : s.substring(0, index) + '/thisWidget/' + s.substring(index + 1);

	return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {
	var Widget = new (require('/alloy/widget'))('thisWidget');this.__widgetId = 'thisWidget';
	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'widget';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	$.__views.widget = Ti.UI.createLabel({ color: "#000", font: { fontSize: 18, fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'I\'m the default widget', id: "widget" });
	$.__views.widget && $.addTopLevelView($.__views.widget);
	exports.destroy = function () {};

	_.extend($, $.__views);

	_.extend($, exports);
}

module.exports = Controller;