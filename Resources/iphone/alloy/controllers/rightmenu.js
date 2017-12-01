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
	this.__controllerPath = 'rightmenu';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	var __alloyId85 = [];$.__views.__alloyId86 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId86" });
	__alloyId85.push($.__views.__alloyId86);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId86.add($.__views.tbServiceAlerts);
	$.__views.__alloyId87 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'About This App', id: "__alloyId87" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId87);
	$.__views.__alloyId88 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId88" });
	__alloyId85.push($.__views.__alloyId88);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId88.add($.__views.tbServiceAlerts);
	$.__views.__alloyId89 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Service Alerts', id: "__alloyId89" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId89);
	$.__views.__alloyId90 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId90" });
	__alloyId85.push($.__views.__alloyId90);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId90.add($.__views.tbServiceAlerts);
	$.__views.__alloyId91 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Formats', id: "__alloyId91" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId91);
	$.__views.__alloyId92 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId92" });
	__alloyId85.push($.__views.__alloyId92);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId92.add($.__views.tbServiceAlerts);
	$.__views.__alloyId93 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'FAQs', id: "__alloyId93" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId93);
	$.__views.__alloyId94 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId94" });
	__alloyId85.push($.__views.__alloyId94);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId94.add($.__views.tbServiceAlerts);
	$.__views.__alloyId95 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'App\'s Website 1', id: "__alloyId95" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId95);
	$.__views.__alloyId96 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId96" });
	__alloyId85.push($.__views.__alloyId96);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId96.add($.__views.tbServiceAlerts);
	$.__views.__alloyId97 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'App\'s Website 2', id: "__alloyId97" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId97);
	$.__views.__alloyId98 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId98" });
	__alloyId85.push($.__views.__alloyId98);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId98.add($.__views.tbServiceAlerts);
	$.__views.__alloyId99 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Privacy & Terms', id: "__alloyId99" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId99);
	$.__views.__alloyId100 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId100" });
	__alloyId85.push($.__views.__alloyId100);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
	$.__views.__alloyId100.add($.__views.tbServiceAlerts);
	$.__views.__alloyId101 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Version XX.XXX.XX', id: "__alloyId101" });
	$.__views.tbServiceAlerts.add($.__views.__alloyId101);
	$.__views.rContainer = Ti.UI.createTableView({ backgroundColor: "gray", width: "175", right: "0%", borderColor: "gray", borderWidth: 0.5, data: __alloyId85, id: "rContainer" });
	$.__views.rContainer && $.addTopLevelView($.__views.rContainer);
	exports.destroy = function () {};

	_.extend($, $.__views);

	var args = $.args;

	_.extend($, exports);
}

module.exports = Controller;