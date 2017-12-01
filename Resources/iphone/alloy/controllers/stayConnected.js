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
	this.__controllerPath = 'stayConnected';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	$.__views.connectWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], backgroundColor: "#B00000", id: "connectWin" });
	$.__views.connectWin && $.addTopLevelView($.__views.connectWin);
	$.__views.banner2 = Ti.UI.createView({ backgroundColor: "black", top: "1%", width: "100%", height: "4%", zIndex: 1, font: { fontSize: 14 }, id: "banner2" });
	$.__views.connectWin.add($.__views.banner2);
	$.__views.back = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, left: "5%", color: "white", top: "3%", title: 'e', id: "back" });
	$.__views.banner2.add($.__views.back);
	backButton ? $.addListener($.__views.back, 'click', backButton) : __defers['$.__views.back!click!backButton'] = true;$.__views.qpl = Ti.UI.createImageView({ width: "33%", top: "11%", id: "qpl", image: "/images/QL300.png" });
	$.__views.banner2.add($.__views.qpl);
	$.__views.TnC = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, right: "5%", color: "white", top: "3%", title: 'i', id: "TnC" });
	$.__views.banner2.add($.__views.TnC);
	doAnimation ? $.addListener($.__views.TnC, 'click', doAnimation) : __defers['$.__views.TnC!click!doAnimation'] = true;$.__views.__alloyId126 = Ti.UI.createScrollView({ id: "__alloyId126" });
	$.__views.connectWin.add($.__views.__alloyId126);
	$.__views.body = Ti.UI.createView({ id: "body" });
	$.__views.__alloyId126.add($.__views.body);
	$.__views.facebookButton = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, top: "25%", width: "400px", borderColor: "gray", backgroundColor: "#f2f2f2", borderRadius: 5, color: "black", title: 'FACEBOOK', id: "facebookButton" });
	$.__views.body.add($.__views.facebookButton);
	openFacebook ? $.addListener($.__views.facebookButton, 'click', openFacebook) : __defers['$.__views.facebookButton!click!openFacebook'] = true;$.__views.twitterButton = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, width: "400px", borderColor: "gray", backgroundColor: "#f2f2f2", borderRadius: 5, color: "black", top: "35%", title: 'TWITTER', id: "twitterButton" });
	$.__views.body.add($.__views.twitterButton);
	openTwitter ? $.addListener($.__views.twitterButton, 'click', openTwitter) : __defers['$.__views.twitterButton!click!openTwitter'] = true;$.__views.instagramButton = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, width: "400px", borderColor: "gray", backgroundColor: "#f2f2f2", borderRadius: 5, color: "black", top: "45%", title: 'INSTAGRAM', id: "instagramButton" });
	$.__views.body.add($.__views.instagramButton);
	openInstagram ? $.addListener($.__views.instagramButton, 'click', openInstagram) : __defers['$.__views.instagramButton!click!openInstagram'] = true;$.__views.tumblrButton = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, width: "400px", borderColor: "gray", backgroundColor: "#f2f2f2", borderRadius: 5, color: "black", top: "55%", title: 'TUMBLR', id: "tumblrButton" });
	$.__views.body.add($.__views.tumblrButton);
	openTumblr ? $.addListener($.__views.tumblrButton, 'click', openTumblr) : __defers['$.__views.tumblrButton!click!openTumblr'] = true;exports.destroy = function () {};

	_.extend($, $.__views);

	var args = $.args;

	function openFacebook(e) {

		Titanium.Platform.openURL("https://www.facebook.com/queensmemory/");
	}

	function openTwitter(e) {

		Titanium.Platform.openURL("https://twitter.com/QueensMemory");
	}

	function openInstagram(e) {}

	function openLinkedIn(e) {}

	function openTumblr(e) {}

	function openPinterest(e) {}

	function backButton(e) {
		$.connectWin.close();
	}

	function doAnimation() {}

	__defers['$.__views.back!click!backButton'] && $.addListener($.__views.back, 'click', backButton);__defers['$.__views.TnC!click!doAnimation'] && $.addListener($.__views.TnC, 'click', doAnimation);__defers['$.__views.facebookButton!click!openFacebook'] && $.addListener($.__views.facebookButton, 'click', openFacebook);__defers['$.__views.twitterButton!click!openTwitter'] && $.addListener($.__views.twitterButton, 'click', openTwitter);__defers['$.__views.instagramButton!click!openInstagram'] && $.addListener($.__views.instagramButton, 'click', openInstagram);__defers['$.__views.tumblrButton!click!openTumblr'] && $.addListener($.__views.tumblrButton, 'click', openTumblr);

	_.extend($, exports);
}

module.exports = Controller;