// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var moment = require('alloy/moment');

Alloy.Globals.DigitalForm;
Alloy.Globals.ScanForm;
Alloy.Globals.OralForm;
Alloy.Globals.WildSoundForm;

Alloy.Globals.isIOS7Plus = (OS_IOS && parseInt(Ti.Platform.version.split(".")[0]) >= 7);
Alloy.Globals.isAndroid4 = (OS_ANDROID && parseInt(Ti.Platform.version.split(".")[0]) === 4);
Alloy.Globals.iPhone6P = Ti.Platform.displayCaps.logicalDensityFactor === '@3x';

//Alloy.Globals.terms = '<!DOCTYPE html> <html> <style> body {background-color: transparent;} p {color:white;} div {font-family: Arial; font-size:20pt; text-align:center;} a {color:teal;}</style> <div> <body> <p> I hereby certify that I am at least eighteen years of age  and I voluntarily agree to transfer  my attached files to this App. I agree to freely share my interview (and other items listed above) under the terms of a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License, available at the following site: </p> <a href="queenslib.org/creativecommons4">queenslib.org/creativecommons4</a> <p>, the terms of which I have read, reviewed, understood, and accept. I also waive any right to inspect or claim any form of remuneration for the Library’s use of the transferred file(s) in any Library publication, any other form of media published by the Library or any newspaper or other commercial media outlet.Further, I agree to hold the Queens Borough Public Library, its affiliates, and their respective trustees, directors, employees, agents or assigns harmless from any claim, action, loss, damage or alleged infringement of any copyright, trademark, or other third-party property rights, caused by or arising from the publication, exhibition or telecast of the file(s) submitted to the Queens Borough Public Library under these terms and conditions.	</p> </body> </div> <html>';

/**
 * display ui he let user know there are issues with the connectivity
 * and provide a path to the wifi settings console
 */

Alloy.Globals.displayWifiSettingsAlert = function(_callback, buttonNames, title, message) {
	// Alloy.Globals.apm && Alloy.Globals.apm.leaveBreadcrumb("displayWifiSettingsAlert");

	Ti.API.debug('in displayWifiSettingsAlert: ' + Titanium.Network.online);

	if (Alloy.Globals.wifiAlertDisplayed || Titanium.Network.online) {
		_callback && _callback();
		return;
	}

	Alloy.Globals.wifiAlertDisplayed = true;
	var buttons = ["WiFi Settings", "Cancel"];
	var d = Ti.UI.createAlertDialog({
		title : title || "No Network Detected",
		message : message || "You are currently offline. We strongly recommend Wi-Fi or broadband- quality connections for uploading. Do you want to check your Wifi settings?",
		buttonNames : buttonNames ? buttonNames : buttons
	});

	d.addEventListener("click", function(_event) {
		if (OS_ANDROID) {
			if (_event.index === 0) {
				// display wifi settings
				var intent = Ti.Android.createIntent({
					action : "android.settings.WIFI_SETTINGS"
				});
				Ti.Android.currentActivity.startActivity(intent);

			} else {
				Alloy.Globals.wifiAlertDisplayed = false;
				_callback && _callback();
			}
		} else {
			var iosSettings = require('com.kaztopia.settingslauncher');
			iosSettings.launchSettingsWithPath("root=WIFI");
		}

		Alloy.Globals.wifiAlertDisplayed = false;
	});

	d.show();
};

// EX
// var my_timer = new countDown(5,30,
// function() {
// display_lbl.text = my_timer.time.m+" : "+my_timer.time.s;
// },
// function() {
// alert("The time is up!");
// }
// );
Alloy.Globals.countDown = function(m, s, fn_tick, fn_end) {
	return {
		total_sec : m * 60 + s,
		timer : this.timer,
		set : function(m, s) {
			this.total_sec = parseInt(m) * 60 + parseInt(s);
			this.time = {
				m : m,
				s : s
			};
			return this;
		},
		start : function() {
			var self = this;
			this.timer = setInterval(function() {
				if (self.total_sec) {
					self.total_sec--;
					self.time = {
						m : parseInt(self.total_sec / 60),
						s : (self.total_sec % 60)
					};
					fn_tick();
				} else {
					self.stop();
					fn_end();
				}
			}, 1000);
			return this;
		},
		stop : function() {
			clearInterval(this.timer);
			this.time = {
				m : 0,
				s : 0
			};
			this.total_sec = 0;
			return this;
		}
	};
};

// IMAGE CORRECTION: This function will use a module to correct some images that tend to rotate 90 to the right

// quality	int: Hint to the compressor, 0-100. 0 meaning compress for small size, 100 meaning compress for max quality.
// Some formats, like PNG which is lossless, will ignore the quality setting

Alloy.Globals.rotateAndResize = function(media, width, quality) {
	var utilsModule = require('com.jreyes.imagerotatecorrection');

	// Create file to store photo.
	var dataDirectory = Ti.Filesystem.getApplicationDataDirectory();
	var fileName = String.format('QPL_Photo_%s.jpg', moment().format('YYYY-MM-DD-HH-mm-ss-SSS-ZZ'));
	var file = Ti.Filesystem.getFile(dataDirectory, fileName);
	var fileNativePath = file.nativePath;

	// Write media to file.
	file.write(media);
	file = null;

	// Rotate photo in file, resize, and adjust quality.
	utilsModule.rotateResizeImage(fileNativePath, width || 640, quality || 80);

	// Get new and improved media out of file.
	media = Ti.Filesystem.getFile(fileNativePath);

	return media;
};
// END

Alloy.Globals.base64Check = function(media) {
	if (Ti.Utils.base64encode(media).toString()) {
		Ti.API.info('Image check passed.');
		return true;
	} else {
		return false;
	}
};

// Execute once app close
Ti.App.addEventListener('close', function(e) {
	Ti.App.Properties.setBool('AlertPOST', false);

	var checkRM = Ti.App.Properties.getBool('Remember Me') ? true : false;
	if (!checkRN) {
		Ti.App.Properties.setString('First Name', $.fText.value);
		Ti.App.Properties.setString('Last Name', $.lText.value);
		Ti.App.Properties.setString('Email Address', $.emailA.value);
		Ti.App.Properties.setBool('Remember Me', false);
	}
});
