var args = arguments[0] || {};
var uploadScreenController;

// $.fText.value = "Aniqa";
// $.lText.value = "Wahiddo";
// $.emailA.value = "awahid@gmail.com";

//console.log("Title of this page is: " + $.Title.text);
//Terms edit
/*if (OS_IOS) {
	// Create an extended webview
	$.termsnC.visible = false;
	var webView = Ti.UI.createWebView({
		left : $.termsnC.left,
		right : $.termsnC.right,
		top : '14%',
		bottom : $.termsnC.bottom,
		html : Alloy.Globals.terms,
		width : $.termsnC.width,
		height : Ti.UI.SIZE,
		scalesPageToFit : true,
		enableZoomControls : false,
		scrollsToTop : true,
		backgroundColor : 'transparent',
		bubbleParent : false,
		ignoreSslError : false
	});

	webView.addEventListener('beforeload', function(e) {
		if (e.url.indexOf("https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode") === 0) {
			// Ti.Platform.openURL(e.url);
			Ti.Platform.openURL("https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode");
			webView.stopLoading(true);
			// Prevent the web view from going away from the terms html
		}
		// else {
		// alert("No longer an appropriate link!");
		// }
	});

	webView.addEventListener("sslerror", function(e) {
		Ti.API.error("Event: sslerror");
		Ti.API.error(JSON.stringify(e));
	});

	$.termsnC = null;
	$.termsView.add(webView);
}*/

//edn Terms edit
var pWidth = Ti.Platform.displayCaps.platformWidth;
//375 iPhone 7
var pHeight = Ti.Platform.displayCaps.platformHeight;
//667 iPhone 7

//Getting the image for TitleBanner
if (OS_IOS) {
	$.qpl.image = 'QL-logo.png';
	$.qp.image = 'QM_FINAL_outlines.png';

	if (pWidth == '320') {
		//console.log("iPhone 5 ya'll! ");
		$.termsView.height = '110%';

		$.asterisk.left = '19%';
		$.asterisk.top = '93%';
		$.field.top = '94%';
		$.fAsterisk.left = '30%';
		$.lAsterisk.left = '30%';
		$.eAsterisk.left = '37%';

	} else if (pHeight == '736') {
		//console.log("iPhone 6S/7S ya'll! ");
		// $.termsView.height = '110%';

		$.asterisk.left = '30%';
		$.asterisk.top = '93%';
		$.field.top = '94%';
		$.fAsterisk.left = '25%';
		$.lAsterisk.left = '25%';
		$.eAsterisk.top = '45%';
		$.eAsterisk.left = '31%';

	} else {
		//console.log("checking screenWidth: " + pWidth);
	}

} else if (OS_ANDROID) {
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
	//console.log("this is the email: " + email);

	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");

	if ($.fText.value === "" || $.lText.value === "" || $.emailA.value === "") {
		alert('You must fill out all the required fields to agree!');

	} else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
		alert('This email address is not valid');

	} else {
		// if ($.checkBox.value == true) {
		//
		// } else {
		// Ti.App.Properties.setString('First Name', "");
		// Ti.App.Properties.setString('Last Name', "");
		// Ti.App.Properties.setString('Email Address', "");
		// Ti.App.Properties.setBool('Remember Me', $.checkBox.value);
		// }

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
		thisTitle : $.Title.text,
		thisField : $.email.text,
		thisButtonID : e.source.id
	};

	alertController = Alloy.createController('helpNote', args).getView();
	alertController.open();
}

function closeTerms() {
	$.termsWin.close();
}

function stopMe(e) {
	// ext:{uploadScreen:win};
	$.termsWin.close();
}
