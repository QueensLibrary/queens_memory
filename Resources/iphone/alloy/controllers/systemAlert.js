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
		this.__controllerPath = 'systemAlert';
		this.args = arguments[0] || {};

		if (arguments[0]) {
				var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
				var $model = __processArg(arguments[0], '$model');
				var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
		}
		var $ = this;
		var exports = {};
		var __defers = {};

		$.__views.systemAlertWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], id: "systemAlertWin", theme: "mytheme" });
		$.__views.systemAlertWin && $.addTopLevelView($.__views.systemAlertWin);
		$.__views.systemAlertView = Ti.UI.createView({ backgroundColor: "black", opacity: 0.99, top: "0", modal: true, id: "systemAlertView" });
		$.__views.systemAlertWin.add($.__views.systemAlertView);
		$.__views.banner = Ti.UI.createView({ top: "0.5%", width: "100%", height: "20%", font: { fontSize: 12 }, id: "banner" });
		$.__views.systemAlertView.add($.__views.banner);
		$.__views.banner2 = Ti.UI.createView({ backgroundColor: "black", top: "0%", width: "100%", height: "25%", font: { fontSize: 14 }, id: "banner2" });
		$.__views.banner.add($.__views.banner2);
		$.__views.QL = Ti.UI.createImageView({ width: "34%", top: "26%", id: "QL", image: "/images/QL300.png" });
		$.__views.banner2.add($.__views.QL);
		$.__views.titleBan = Ti.UI.createView({ backgroundColor: "white", top: "25%", height: Titanium.UI.SIZE, font: { fontSize: 12 }, id: "titleBan" });
		$.__views.banner.add($.__views.titleBan);
		$.__views.qp = Ti.UI.createImageView({ top: "8%", width: "28%", left: "5%", id: "qp", image: "/images/QM_FINAL_outlines.png" });
		$.__views.titleBan.add($.__views.qp);
		$.__views.Title = Ti.UI.createLabel({ font: { fontSize: 18, color: "black", fontFamily: "Montserrat-Regular", fontWeight: "bold" }, top: "15%", right: "5%", text: 'System Alerts', id: "Title" });
		$.__views.titleBan.add($.__views.Title);
		var __alloyId131 = {};var __alloyId133 = [];var __alloyId134 = { type: 'Ti.UI.View', childTemplates: function () {
						var __alloyId135 = [];var __alloyId136 = { type: 'Ti.UI.Label', bindId: 'textLabel', properties: { font: { fontSize: 14, color: "black", fontFamily: "Montserrat-Regular" }, color: "#f3f3f3", left: "60dp", top: 0, textAlign: "left", backgroundColor: "black", bindId: "textLabel" } };__alloyId135.push(__alloyId136);var __alloyId137 = { type: 'Ti.UI.Label', bindId: 'detailLabel', properties: { font: { fontSize: 10, color: "black", fontFamily: "Montserrat-Regular" }, color: "f3f3f3", left: "60dp", top: 20, textAlign: "left", backgroundColor: "black", bindId: "detailLabel" } };__alloyId135.push(__alloyId137);return __alloyId135;
				}(), properties: {} };__alloyId133.push(__alloyId134);var __alloyId132 = { properties: { height: "50dp", backgroundColor: "black", name: "template1" }, childTemplates: __alloyId133 };__alloyId131["template1"] = __alloyId132;var __alloyId139 = [];$.__views.__alloyId140 = { template: "template1", properties: { id: "__alloyId140" } };__alloyId139.push($.__views.__alloyId140);$.__views.section = Ti.UI.createListSection({ id: "section" });
		$.__views.section.items = __alloyId139;var __alloyId141 = [];__alloyId141.push($.__views.section);$.__views.list = Ti.UI.createListView(function () {
				var o = {};
				Alloy.deepExtend(true, o, { top: "14%", editing: true, backgroundColor: "black", separatorStyle: Titanium.UI.iPhone.ListViewSeparatorStyle.NONE });
				if (Alloy.isTablet) Alloy.deepExtend(true, o, { top: "20%" });
				Alloy.deepExtend(true, o, { sections: __alloyId141, templates: __alloyId131, id: "list", defaultItemTemplate: "template1" });
				return o;
		}());
		$.__views.systemAlertView.add($.__views.list);
		$.__views.stop = Ti.UI.createButton({ top: "90%", width: "400px", borderRadius: 5, borderColor: "gray", backgroundColor: "#f2f2f2", color: "black", title: 'Close', id: "stop" });
		$.__views.systemAlertView.add($.__views.stop);
		stopMe ? $.addListener($.__views.stop, 'click', stopMe) : __defers['$.__views.stop!click!stopMe'] = true;exports.destroy = function () {};

		_.extend($, $.__views);

		var args = arguments[0] || {};
		var digitalPhotoForm = Alloy.createController('digitalPhotoForm').getView();

		if (true) {
				$.QL.image = 'QL300.png';
				$.qp.image = 'QM_FINAL_outlines.png';
		} else if (false) {
				$.QL.image = '/images/QL300.png';
				$.qp.image = '/images/QM_FINAL_outlines.png';
		}

		var items = [];

		function createListView(_data) {
				Ti.API.info(_data);

				for (var i in _data) {
						items.push({
								template: "template1",
								textLabel: {
										text: _data[i].title },
								detailLabel: {
										text: _data[i].body }
						});
				}

				$.section.setItems(items);
		}

		function backButton(e) {
				$.systemAlertWin.close();
		}

		function slideMenu(e) {
				menuController = Alloy.createController('sliderMenu').getView();
				menuController.open();
		}

		function submit(e) {
				var clearItems = [];
				$.section.setItems(clearItems);
				Ti.App.Properties.setBool('Alert Status', false);

				Ti.API.info(Ti.App.Properties.getString('Alert Status') ? true : false);
		}

		function stopMe(e) {
				var clearItems = [];
				if (true) {
						$.section.setItems(clearItems);
				}
				$.systemAlertWin.close(args);
		}

		createListView(args.messages);

		__defers['$.__views.stop!click!stopMe'] && $.addListener($.__views.stop, 'click', stopMe);

		_.extend($, exports);
}

module.exports = Controller;