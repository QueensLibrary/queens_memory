var args = arguments[0] || {};

var termsController;

if (OS_IOS) {
	$.QLL.image = 'QL-logo.png';
	$.QMW.image = 'QMW-ink.png';

} else if (OS_ANDROID) {
	$.QLL.image = '/images/QL-logo.png';
	$.QMW.image = '/images/QMW-ink.png';
}

function startSession(e) {

	if (Ti.App.Properties.getString('First Name') != "" && Ti.App.Properties.getString('Last Name') != "" && Ti.App.Properties.getString('Email Address') != "") {

		var props = Ti.App.Properties.listProperties();
		for (var i = 0,
		    ilen = props.length; i < ilen; i++) {
			var value = Ti.App.Properties.getString(props[i]);
			Ti.API.info(props[i] + ' = ' + value);
			console.log(props[i] + ' = ' + value);
		}
		termsController = Alloy.createController('terms').getView();
		termsController.open();

	} else {

		termsController = Alloy.createController('terms').getView();
		termsController.open();

	}

}

