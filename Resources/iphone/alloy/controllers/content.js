var Alloy = require('/alloy'),
    Backbone = Alloy.Backbone,
    _ = Alloy._;

function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'content';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	$.__views.content = Ti.UI.createView({ backgroundColor: "transparent", layout: "vertical", zIndex: 2, id: "content" });
	$.__views.content && $.addTopLevelView($.__views.content);
	$.__views.banner2 = Ti.UI.createView({ backgroundColor: "black", top: "1%", width: "100%", height: "4%", font: { fontSize: 14 }, id: "banner2" });
	$.__views.content.add($.__views.banner2);
	$.__views.back = Ti.UI.createButton({ left: "5%", color: "white", top: "3%", font: { fontFamily: "Entypo", fontSize: 30 }, title: 'e', id: "back" });
	$.__views.banner2.add($.__views.back);
	backButton ? $.addListener($.__views.back, 'click', backButton) : __defers['$.__views.back!click!backButton'] = true;$.__views.qpl = Ti.UI.createImageView({ width: "33%", top: "11%", id: "qpl", image: "QL300.png" });
	$.__views.banner2.add($.__views.qpl);
	$.__views.TnC = Ti.UI.createButton({ right: "5%", color: "white", top: "3%", font: { fontFamily: "Entypo", fontSize: 30 }, title: 'i', id: "TnC" });
	$.__views.banner2.add($.__views.TnC);
	exports.destroy = function () {};

	_.extend($, $.__views);

	var args = $.args;

	__defers['$.__views.back!click!backButton'] && $.addListener($.__views.back, 'click', backButton);

	_.extend($, exports);
}

module.exports = Controller;