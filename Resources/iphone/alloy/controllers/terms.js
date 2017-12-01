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
		this.__controllerPath = 'terms';
		this.args = arguments[0] || {};

		if (arguments[0]) {
				var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
				var $model = __processArg(arguments[0], '$model');
				var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
		}
		var $ = this;
		var exports = {};
		var __defers = {};

		$.__views.termsWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], backgroundColor: "black", height: Titanium.UI.FILL, width: Titanium.UI.FILL, id: "termsWin", theme: "mytheme" });
		$.__views.termsWin && $.addTopLevelView($.__views.termsWin);
		$.__views.banner = Ti.UI.createView({ backgroundColor: "white", top: "3%", width: "100%", height: "20%", font: { fontSize: 12 }, id: "banner" });
		$.__views.termsWin.add($.__views.banner);
		$.__views.libLogo = Ti.UI.createView({ backgroundColor: "black", top: "0%", height: "20%", id: "libLogo" });
		$.__views.banner.add($.__views.libLogo);
		$.__views.qpl = Ti.UI.createImageView({ width: "33%", left: "5%", id: "qpl", image: "/images/QL-logo.png" });
		$.__views.libLogo.add($.__views.qpl);
		$.__views.titleBan = Ti.UI.createView({ backgroundColor: "white", top: "20%", height: Titanium.UI.FILL, font: { fontSize: 12 }, id: "titleBan" });
		$.__views.banner.add($.__views.titleBan);
		$.__views.qp = Ti.UI.createImageView({ top: "8%", width: "25%", left: "7%", id: "qp", image: "/images/QM_FINAL_outlines.png" });
		$.__views.titleBan.add($.__views.qp);
		$.__views.Title = Ti.UI.createLabel({ font: { fontFamily: "Montserrat-Regular", fontWeight: "bold", fontSize: 18 }, textAlign: "Titanium.UI.TEXT_ALIGNMENT_RIGHT", top: "5%", left: "70%", color: "black", text: 'Terms & Conditions', id: "Title" });
		$.__views.titleBan.add($.__views.Title);
		$.__views.__alloyId142 = Ti.UI.createScrollView({ top: "15.5%", backgroundColor: "gray", showHorizontalScrollIndicator: "false", showVerticalScrollIndicator: "true", width: Titanium.UI.FILL, bottom: "0%", contentHeight: Titanium.UI.SIZE, contentWidth: Titanium.UI.FILL, layout: "vertical", disableBounce: "true", id: "__alloyId142" });
		$.__views.termsWin.add($.__views.__alloyId142);
		$.__views.termsView = Ti.UI.createView({ height: "85%", width: "100%", backgroundColor: "black", id: "termsView" });
		$.__views.__alloyId142.add($.__views.termsView);
		$.__views.doYou = Ti.UI.createLabel({ font: { fontFamily: "Montserrat-Regular", fontWeight: "bold", fontSize: 18 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, top: "5%", left: "5%", right: "5%", color: "white", text: 'Do you agree to the following terms and conditions?', id: "doYou" });
		$.__views.termsView.add($.__views.doYou);
		$.__views.termsnC = Ti.UI.createLabel(function () {
				var o = {};
				Alloy.deepExtend(true, o, { font: { fontFamily: "Arial", fontSize: 12 }, textAlign: "center", top: "18.5%", left: "5%", right: "5%", color: "white" });
				if (Alloy.isTablet) Alloy.deepExtend(true, o, { top: "20%", left: "5%", right: "5%", color: "white", textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, font: { fontSize: 18, fontFamily: "Arial" } });
				Alloy.deepExtend(true, o, { text: 'The Terms and Conditions agreement can act as a legal contract between you, the mobile app owner or developer, and the users of your app. Like a Terms and Conditions for a website, this agreement for a mobile app would set the rules and terms that users must follow in order to use your app.', id: "termsnC", autoLink: Titanium.UI.AUTOLINK_URLS });
				return o;
		}());
		$.__views.termsView.add($.__views.termsnC);
		$.__views.asterisk = Ti.UI.createLabel(function () {
				var o = {};
				Alloy.deepExtend(true, o, { font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER });
				if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
				Alloy.deepExtend(true, o, { color: "red", left: "25%", top: "94%", text: '*', id: "asterisk" });
				return o;
		}());
		$.__views.termsView.add($.__views.asterisk);
		$.__views.field = Ti.UI.createLabel(function () {
				var o = {};
				Alloy.deepExtend(true, o, { font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, color: "white", top: "95%", right: "25%" });
				if (Alloy.isTablet) Alloy.deepExtend(true, o, { color: "white", top: "99%", right: "25%", font: { fontSize: 18 } });
				Alloy.deepExtend(true, o, { text: 'denotes required fields.', id: "field" });
				return o;
		}());
		$.__views.termsView.add($.__views.field);
		$.__views.view2 = Ti.UI.createView({ height: "80%", backgroundColor: "black", id: "view2" });
		$.__views.__alloyId142.add($.__views.view2);
		$.__views.firstName = Ti.UI.createLabel({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, color: "white", top: "5%", left: "5%", text: 'First Name', id: "firstName" });
		$.__views.view2.add($.__views.firstName);
		$.__views.fAsterisk = Ti.UI.createLabel(function () {
				var o = {};
				Alloy.deepExtend(true, o, { font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER });
				if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
				Alloy.deepExtend(true, o, { color: "red", top: "4%", left: "28%", text: '*', id: "fAsterisk" });
				return o;
		}());
		$.__views.view2.add($.__views.fAsterisk);
		$.__views.fText = Ti.UI.createTextField({ top: "13%", width: "85%", left: "5%", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, id: "fText" });
		$.__views.view2.add($.__views.fText);
		$.__views.lastName = Ti.UI.createLabel({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, color: "white", top: "25%", left: "5%", text: 'Last Name', id: "lastName" });
		$.__views.view2.add($.__views.lastName);
		$.__views.lAsterisk = Ti.UI.createLabel(function () {
				var o = {};
				Alloy.deepExtend(true, o, { font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER });
				if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
				Alloy.deepExtend(true, o, { color: "red", top: "24%", left: "28%", text: '*', id: "lAsterisk" });
				return o;
		}());
		$.__views.view2.add($.__views.lAsterisk);
		$.__views.lText = Ti.UI.createTextField({ top: "33%", width: "85%", left: "5%", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, id: "lText" });
		$.__views.view2.add($.__views.lText);
		$.__views.email = Ti.UI.createLabel({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, color: "white", top: "46%", left: "5%", text: 'Email Address', id: "email" });
		$.__views.view2.add($.__views.email);
		$.__views.eAsterisk = Ti.UI.createLabel(function () {
				var o = {};
				Alloy.deepExtend(true, o, { font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER });
				if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
				Alloy.deepExtend(true, o, { color: "red", top: "44%", left: "34%", text: '*', id: "eAsterisk" });
				return o;
		}());
		$.__views.view2.add($.__views.eAsterisk);
		$.__views.EmailhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 40 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, top: "57%", right: "3%", width: "25%", height: "1%", color: "black", title: 'b', id: "EmailhelpButton" });
		$.__views.view2.add($.__views.EmailhelpButton);
		helpSubmit ? $.addListener($.__views.EmailhelpButton, 'click', helpSubmit) : __defers['$.__views.EmailhelpButton!click!helpSubmit'] = true;$.__views.emailA = Ti.UI.createTextField({ top: "54%", width: "85%", left: "5%", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, id: "emailA" });
		$.__views.view2.add($.__views.emailA);
		$.__views.rememberMe = Ti.UI.createLabel(function () {
				var o = {};
				Alloy.deepExtend(true, o, { font: { fontFamily: "Montserrat-Regular", fontSize: 18 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, color: "white", top: "68%", left: "15%" });
				if (Alloy.isTablet) Alloy.deepExtend(true, o, { color: "white", top: "68%", left: "20%", font: { fontSize: 18 } });
				Alloy.deepExtend(true, o, { text: 'Remember Me', id: "rememberMe" });
				return o;
		}());
		$.__views.view2.add($.__views.rememberMe);
		$.__views.checkBox = Ti.UI.createSwitch({ top: "67%", width: "5%", color: "white", right: "25%", value: false, id: "checkBox" });
		$.__views.view2.add($.__views.checkBox);
		$.__views.submit = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, top: "80%", width: "70%", height: "8%", borderRadius: 5, borderColor: "gray", backgroundColor: "#f2f2f2", color: "black", title: 'Agree', id: "submit" });
		$.__views.view2.add($.__views.submit);
		submit ? $.addListener($.__views.submit, 'click', submit) : __defers['$.__views.submit!click!submit'] = true;$.__views.stop = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, top: "90%", width: "70%", height: "8%", borderRadius: 5, borderColor: "gray", backgroundColor: "#f2f2f2", color: "black", title: 'Cancel', id: "stop" });
		$.__views.view2.add($.__views.stop);
		stopMe ? $.addListener($.__views.stop, 'click', stopMe) : __defers['$.__views.stop!click!stopMe'] = true;exports.destroy = function () {};

		_.extend($, $.__views);

		var args = arguments[0] || {};
		var uploadScreenController;

		var pWidth = Ti.Platform.displayCaps.platformWidth;

		var pHeight = Ti.Platform.displayCaps.platformHeight;

		if (true) {
				$.qpl.image = 'QL-logo.png';
				$.qp.image = 'QM_FINAL_outlines.png';

				if (pWidth == '320') {
						$.termsView.height = '110%';

						$.asterisk.left = '19%';
						$.asterisk.top = '93%';
						$.field.top = '94%';
						$.fAsterisk.left = '30%';
						$.lAsterisk.left = '30%';
						$.eAsterisk.left = '37%';
				} else if (pHeight == '736') {

						$.asterisk.left = '30%';
						$.asterisk.top = '93%';
						$.field.top = '94%';
						$.fAsterisk.left = '25%';
						$.lAsterisk.left = '25%';
						$.eAsterisk.top = '45%';
						$.eAsterisk.left = '31%';
				} else {}
		} else if (false) {
				$.qpl.image = '/images/QL-logo.png';
				$.qp.image = '/images/QM_FINAL_outlines.png';
		}

		$.checkBox.value = Ti.App.Properties.getBool('Remember Me') ? true : false;
		if ($.checkBox.value == true) {
				$.fText.value = Ti.App.Properties.getString('First Name') || "";
				$.lText.value = Ti.App.Properties.getString('Last Name') || "";
				$.emailA.value = Ti.App.Properties.getString('Email Address') || "";
		}

		function submit(e) {
				var email = $.emailA.value;


				var atpos = email.indexOf("@");
				var dotpos = email.lastIndexOf(".");

				if ($.fText.value === "" || $.lText.value === "" || $.emailA.value === "") {
						alert('You must fill out all the required fields to agree!');
				} else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
						alert('This email address is not valid');
				} else {

						Ti.App.Properties.setString('First Name', $.fText.value);
						Ti.App.Properties.setString('Last Name', $.lText.value);
						Ti.App.Properties.setString('Email Address', $.emailA.value);
						Ti.App.Properties.setBool('Remember Me', $.checkBox.value);

						uploadScreenController = Alloy.createController('uploadScreen').getView();
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

				alertController = Alloy.createController('helpNote', args).getView();
				alertController.open();
		}

		function closeTerms() {
				$.termsWin.close();
		}

		function stopMe(e) {
				$.termsWin.close();
		}

		__defers['$.__views.EmailhelpButton!click!helpSubmit'] && $.addListener($.__views.EmailhelpButton, 'click', helpSubmit);__defers['$.__views.submit!click!submit'] && $.addListener($.__views.submit, 'click', submit);__defers['$.__views.stop!click!stopMe'] && $.addListener($.__views.stop, 'click', stopMe);

		_.extend($, exports);
}

module.exports = Controller;