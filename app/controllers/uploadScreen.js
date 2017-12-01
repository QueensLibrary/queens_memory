var args = arguments[0] || {};
var sliderController;

var currentAlertStatus;
var statusAlerts = [];
var currentListCount = 0;

$.alerts.visible = false;

if (OS_IOS) {
	$.qpl.image = 'QL300.png';
	$.QMW.image = 'QMW-ink.png';

	$.oral.visible = false;
	$.sound.visible = false;

} else if (OS_ANDROID) {
	$.qpl.image = '/images/QL300.png';
	$.QMW.image = '/images/QMW-ink.png';
}

// var props = Ti.App.Properties.listProperties();
// for (var i = 0,
// ilen = props.length; i < ilen; i++) {
// var value = Ti.App.Properties.getString(props[i]);
// Ti.API.debug('UserProps: ' + props[i] + ' = ' + value);
// console.log(props[i] + ' = ' + value);
// }

function photoSubmit(e) {
	var scanItemController = Alloy.createController('digitalPhotoForm').getView();
	scanItemController.open();
	scanItemController = null;
}

function scanSubmit(e) {
	var digitalPhotoFormController = Alloy.createController('scanItemForm').getView();
	digitalPhotoFormController.open();
	digitalPhotoFormController = null;
}

function oralHistSubmit(e) {
	var oralHistoryController = Alloy.createController('oralHistoryForm').getView();
	oralHistoryController.open();
	oralHistoryController = null;
}

function soundSubmit(e) {
	var wildSoundController = Alloy.createController('wildSoundForm').getView();
	wildSoundController.open();
	wildSoundController = null;
}

function systemSubmit(e) {
	var args = {
		alertStatus : currentAlertStatus,
		messages : statusAlerts
	};
	var alertController = Alloy.createController('systemAlert', args).getView();
	alertController.open();
	alertController = null;
}

function helpSubmit(e) {
	var args = {
		thisTitle : $.Title.text,
	};

	var alertController = Alloy.createController('helpNote', args).getView();
	alertController.open();
	alertController = null;
}

function backButton(e) {
	$.uploadWin.close();
}

function doAnimation() {
	console.log("in uploadscreen.js, doAnimation, open menu");

	sliderController = Alloy.createController("menu").getView();
	sliderController.open();
}

function checkSystemAlerts(_callback) {
	if (!Ti.Network.getOnline()) {
		Alloy.Globals.displayWifiSettingsAlert();
		return;
	}

	var xhr1 = Ti.Network.createHTTPClient({
		timeout : 60000
	});
	xhr1.open("GET", 'https://uploadapi.queenslibrary.org:8081/api/v1/valets/mobile_status');

	xhr1.onerror = function(e) {
		_callback && _callback({
			success : false,
			error : e
		});
		console.log('onError!!');
		return;
	};

	xhr1.onload = function(e) {
		console.info(this.status);
		console.info(this.readyState);
		console.info(this.responseText);
		_callback && _callback({
			success : true,
			response : xhr1.responseText,
		});
		console.log('onLoad Success!!');
		return;
	};

	Ti.API.info("onLoad and onError functions set.....");
	Ti.API.info("Sending....." + xhr1.location);

	xhr1.send();
}

var statuscallback = function(_response) {
	if (_response.success && _response.response.length > 0) {
		Ti.API.debug('Sent: ' + JSON.stringify(_response.response, null, 2));

		var parseMessages = JSON.parse(_response.response);
		var fullMessages = parseMessages.messages;

		var title = "";
		var body = "";

		statusAlerts.push({
			title : title,
			body : body
		});

		for (var i = 0; i < fullMessages.length ; i++) {
			var title = JSON.stringify(fullMessages[i].title);
			var body = JSON.stringify(fullMessages[i].body);

			title = title.replace(/"/g, "");
			body = body.replace(/"/g, "");

			statusAlerts.push({
				title : title,
				body : body
			});
		}

		if (statusAlerts.length > 0) {
			$.alerts.visible = true;
		}

	} else {
		//alert('Something went wrong. Please try to submit again. \n' + JSON.stringify(_response.error.code) + '\n' + JSON.stringify(_response.error.source) + '\n');
		Ti.API.debug('Something went wrong. Please try to submit again. \n');
	}
};

checkSystemAlerts(statuscallback); 