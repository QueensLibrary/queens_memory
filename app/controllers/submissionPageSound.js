var args = arguments[0] || {};
var data = require('data');
var menuController;
var parent = _parent;
var ACS_DIGITAL_SOUND_UPLOAD_URL = "this will you api endpoint";

if (OS_IOS) {
	$.QL.image = 'QL300.png';
	$.qp.image = 'QM_FINAL_outlines.png';

} else if (OS_ANDROID) {
	$.QL.image = '/images/QL300.png';
	$.qp.image = '/images/QM_FINAL_outlines.png';
}

$.Title.text = args.thisTitle || "Error, most like";

var checkOS = Ti.Platform.name;
if (OS_IOS) {
	if (checkOS == "iPhone OS") {
		checkOS = "iOS";
	}
}

if (args.thisTitle == "Oral History") {

	if (OS_IOS) {

		if (args.timePeriod.length <= 35 && args.photoDate.length <= 35 && args.photoInterviewLocation.length <= 35 && args.photoTitle.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoLanguage.length <= 35 && args.photoPlace.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoModel.length <= 35) {
			$.submissionsView.height = '85%';
			// $.submissionsView.backgroundColor = 'blue';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.timePeriod.length >= 90 && args.photoDate.length >= 90 && args.photoInterviewLocation.length >= 90 && args.photoTitle.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoLanguage.length >= 90 && args.photoPlace.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoModel.length >= 90) {
			$.submissionsView.height = '190%';
			// $.submissionsView.backgroundColor = 'pink';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.timePeriod.length >= 50 && args.photoDate.length >= 50 && args.photoInterviewLocation.length >= 50 && args.photoTitle.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoLanguage.length >= 50 && args.photoPlace.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoModel.length >= 50) {
			$.submissionsView.height = '160%';
			// $.submissionsView.backgroundColor = 'white';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.timePeriod.length >= 40 && args.photoDate.length >= 40 && args.photoInterviewLocation.length >= 40 && args.photoTitle.length >= 40 && args.photoFirstName.length >= 40 && args.photoLastName.length >= 40 && args.photoPeopleNames.length >= 40 && args.photoLanguage.length >= 40 && args.photoPlace.length >= 40 && args.photoEventName.length >= 40 && args.photoOrg.length >= 40 && args.photoModel.length >= 40) {
			$.submissionsView.height = '115%';
			//$.submissionsView.backgroundColor = 'green';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else {
			$.submissionsView.height = '150%';
			// $.submissionsView.backgroundColor = 'red';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
		}
	}

	if (OS_ANDROID) {

		if (args.timePeriod.length <= 35 && args.photoDate.length <= 35 && args.photoInterviewLocation.length <= 35 && args.photoTitle.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoLanguage.length <= 35 && args.photoPlace.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoModel.length <= 35) {
			$.submissionsView.height = '450dp';
			// $.submissionsView.backgroundColor = 'blue';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.timePeriod.length >= 90 && args.photoDate.length >= 90 && args.photoInterviewLocation.length >= 90 && args.photoTitle.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoLanguage.length >= 90 && args.photoPlace.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoModel.length >= 90) {
			$.submissionsView.height = '900dp';
			// $.submissionsView.backgroundColor = 'pink';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.timePeriod.length >= 50 && args.photoDate.length >= 50 && args.photoInterviewLocation.length >= 50 && args.photoTitle.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoLanguage.length >= 50 && args.photoPlace.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoModel.length >= 50) {
			$.submissionsView.height = '750dp';
			// $.submissionsView.backgroundColor = 'white';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.timePeriod.length >= 40 && args.photoDate.length >= 40 && args.photoInterviewLocation.length >= 40 && args.photoTitle.length >= 40 && args.photoFirstName.length >= 40 && args.photoLastName.length >= 40 && args.photoPeopleNames.length >= 40 && args.photoLanguage.length >= 40 && args.photoPlace.length >= 40 && args.photoEventName.length >= 40 && args.photoOrg.length >= 40 && args.photoModel.length >= 40) {
			$.submissionsView.height = '650dp';
			// $.submissionsView.backgroundColor = 'green';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else {
			$.submissionsView.height = '550dp';
			// $.submissionsView.backgroundColor = 'red';

			// console.log("top of timePeriod text: " + args.timePeriod.length);
			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoInterviewLocation text: " + args.photoInterviewLocation.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoLanguage text: " + args.photoLanguage.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
		}
	}

	$.submissionsView2.visible = false;
	$.submissionsView2.height = '0%';

	$.soundPlaceOral.text = "Interview Location: ";
	$.soundNameOral.text = "Interviewee Name [First]: ";
	$.soundNameLOral.text = "Interviewee Name [Last]: ";

	$.photoDate.text += ' ' + data.getData().timePeriod;
	$.soundDateOral.text += ' ' + data.getData().photoDate;
	$.soundPlaceOral.text += ' ' + data.getData().photoInterviewLocation;
	$.photoTitleOral.text += ' ' + data.getData().photoTitle;
	$.soundNameOral.text += ' ' + data.getData().photoFirstName;
	$.soundNameLOral.text += ' ' + data.getData().photoLastName;
	$.soundInterName.text += ' ' + data.getData().photoPeopleNames;
	$.soundLangOral.text += ' ' + data.getData().photoLanguage;
	$.soundInterviewPlace.text += ' ' + data.getData().photoPlace;
	$.soundEventNameOral.text += ' ' + data.getData().photoEventName;
	$.soundPeopleNameOral.text += ' ' + data.getData().photoPeople;
	$.soundOrgOral.text += ' ' + data.getData().photoOrg;
	$.soundMakeOral.text += ' ' + data.getData().photoModel;
	$.soundNotesLabelOral.text += ' ' + data.getData().photoNotes;
}

if (args.thisTitle == "Wild Sound") {

	if (OS_IOS) {

		if (args.photoDate.length <= 35 && args.photoPlace.length <= 35 && args.photoTitle.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoModel.length <= 35) {
			$.submissionsView.height = '75%';
			// $.submissionsView.backgroundColor = 'blue';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoDate.length >= 90 && args.photoPlace.length >= 90 && args.photoTitle.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90) {

			$.submissionsView.height = '200%';
			//$.submissionsView.backgroundColor = 'pink';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoDate.length >= 50 && args.photoPlace.length >= 50 && args.photoTitle.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50) {
			$.submissionsView.height = '150%';
			// $.submissionsView.backgroundColor = 'white';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else {
			$.submissionsView.height = '100%';
			//$.submissionsView.backgroundColor = 'red';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		}
	}

	if (OS_ANDROID) {

		if (args.photoDate.length <= 35 && args.photoPlace.length <= 35 && args.photoTitle.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoModel.length <= 35) {
			$.submissionsView2.height = '400dp';
			// $.submissionsView2.backgroundColor = 'blue';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoDate.length >= 90 && args.photoPlace.length >= 90 && args.photoTitle.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90) {

			$.submissionsView2.height = '700dp';
			// $.submissionsView2.backgroundColor = 'pink';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoDate.length >= 50 && args.photoPlace.length >= 50 && args.photoTitle.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50) {
			$.submissionsView2.height = '600dp';
			// $.submissionsView2.backgroundColor = 'white';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else {
			$.submissionsView2.height = '520dp';
			// $.submissionsView2.backgroundColor = 'red';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of photoPlace text: " + args.photoPlace.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		}
	}

	$.submissionsView.visible = false;
	$.submissionsView.height = '0%';

	$.soundName.text = "Recordist Name [First]: ";
	$.soundNameL.text = "Recordist Name [Last]: ";

	$.soundDate.text += ' ' + data.getData().photoDate;
	$.soundPlace.text += ' ' + data.getData().photoPlace;
	$.photoTitle.text += ' ' + data.getData().photoTitle;
	$.soundPeopleName.text += ' ' + data.getData().photoPeopleNames;
	$.soundName.text += ' ' + data.getData().photoFirstName;
	$.soundNameL.text += ' ' + data.getData().photoLastName;
	$.soundEventName.text += ' ' + data.getData().photoEventName;
	$.soundOrg.text += ' ' + data.getData().photoOrg;
	$.soundMake.text += ' ' + data.getData().photoModel;
	$.soundNotesLabel.text += ' ' + data.getData().photoNotes;

}

var absoluteParams;
var stringToSaveInDatabase;
var soundBlob = data.getData().userPhoto;

if (OS_IOS) {

} else {
	try {
		stringToSaveInDatabase = Ti.Utils.base64encode(soundBlob).toString();
	} catch(e) {
		alert("Sorry! This audio file is too big to upload. Please select a different sound.");
	}
	// if (stringToSaveInDatabase.length > 64) {
	// var expected = 'b51747a51f685cfb684cf3e20918edeb';
	// Ti.UI.createAlertDialog({
	// title : 'md5',
	// message : '\nmd5: ' + md5 + '\nexpected: ' + expected
	// }).show();
	// }
}

function myreplacer(str) {
	var mapObj = {
		'>' : '&gt;',
		'<' : '&lt;',
		'&' : '&amp;'
	};

	str = str.replace(/<|>|&/gi, function(matched) {
		return mapObj[matched];
	});
	return str;
}

if (data.getData().resourceType == 'Oral History') {
	if (OS_IOS) {
		var absoluteParams = {
			userPhoto : soundBlob,
			submit : data.getData().submitType,
			resourceType : data.getData().resourceType,
			step : data.getData().photoStepNumber,
			firstname : myreplacer(data.getData().photoFirstName),
			lastname : myreplacer(data.getData().photoLastName),
			lang : myreplacer(data.getData().photoLanguage),
			right : data.getData().photoRights,
			title : myreplacer(data.getData().photoTitle),
			memberType : data.getData().photoMemberType,
			additional : myreplacer(data.getData().photoNotes),
			faculty : myreplacer(data.getData().photoEventName),
			interviewDate : myreplacer(data.getData().photoDate),
			interviewLocation : myreplacer(data.getData().photoInterviewLocation), //
			interviewee : myreplacer(data.getData().photoPeopleNames),
			organizationsInterview : myreplacer(data.getData().photoOrg),
			peopleInterview : myreplacer(data.getData().photoPeople),
			placesInterview : myreplacer(data.getData().photoPlace),
			recorderMake : myreplacer(data.getData().photoModel),
			year : myreplacer(data.getData().timePeriod),
			email : Ti.App.Properties.getString('Email Address'),
			uploaderfname : Ti.App.Properties.getString('First Name'),
			uploaderlname : Ti.App.Properties.getString('Last Name'),
			mimeType : data.getData().mimeType,
			fileExtension : data.getData().fileExtension,
			operatingSystem : checkOS,
			osVersion : Ti.Platform.version
		};
	} else {
		var absoluteParams = {
			userPhoto : stringToSaveInDatabase,
			submit : data.getData().submitType,
			resourceType : data.getData().resourceType,
			step : data.getData().photoStepNumber,
			firstname : myreplacer(data.getData().photoFirstName),
			lastname : myreplacer(data.getData().photoLastName),
			lang : myreplacer(data.getData().photoLanguage),
			right : data.getData().photoRights,
			title : myreplacer(data.getData().photoTitle),
			memberType : data.getData().photoMemberType,
			additional : myreplacer(data.getData().photoNotes),
			faculty : myreplacer(data.getData().photoEventName),
			interviewDate : myreplacer(data.getData().photoDate),
			interviewLocation : myreplacer(data.getData().photoInterviewLocation),
			interviewee : myreplacer(data.getData().photoPeopleNames),
			organizationsInterview : myreplacer(data.getData().photoOrg),
			peopleInterview : myreplacer(data.getData().photoPeople),
			placesInterview : myreplacer(data.getData().photoPlace),
			recorderMake : myreplacer(data.getData().photoModel),
			year : myreplacer(data.getData().timePeriod),
			email : Ti.App.Properties.getString('Email Address'),
			uploaderfname : Ti.App.Properties.getString('First Name'),
			uploaderlname : Ti.App.Properties.getString('Last Name'),
			mimeType : data.getData().mimeType,
			fileExtension : data.getData().fileExtension,
			operatingSystem : Ti.Platform.name,
			osVersion : Ti.Platform.version
		};
	}

} else {
	if (OS_IOS) {
		var absoluteParams = {
			userPhoto : soundBlob,
			submit : data.getData().submitType,
			resourceType : data.getData().resourceType,
			step : data.getData().photoStepNumber,
			firstname : myreplacer(data.getData().photoFirstName),
			lastname : myreplacer(data.getData().photoLastName),
			lang : myreplacer(data.getData().photoLanguage),
			right : data.getData().photoRights,
			title : myreplacer(data.getData().photoTitle),
			memberType : data.getData().photoMemberType,
			additional : myreplacer(data.getData().photoNotes),
			recorderMake : myreplacer(data.getData().photoModel),
			recordingEvent : myreplacer(data.getData().photoEventName),
			recordingLocation : myreplacer(data.getData().photoPlace),
			recordingOrganization : myreplacer(data.getData().photoOrg),
			recordingPeople : myreplacer(data.getData().photoPeopleNames),
			year : myreplacer(data.getData().photoDate),
			email : Ti.App.Properties.getString('Email Address'),
			uploaderfname : Ti.App.Properties.getString('First Name'),
			uploaderlname : Ti.App.Properties.getString('Last Name'),
			mimeType : data.getData().mimeType,
			fileExtension : data.getData().fileExtension,
			operatingSystem : checkOS,
			osVersion : Ti.Platform.version
		};
	} else {
		var absoluteParams = {
			userPhoto : stringToSaveInDatabase,
			submit : data.getData().submitType,
			resourceType : data.getData().resourceType,
			step : data.getData().photoStepNumber,
			firstname : myreplacer(data.getData().photoFirstName),
			lastname : myreplacer(data.getData().photoLastName),
			lang : myreplacer(data.getData().photoLanguage),
			right : data.getData().photoRights,
			title : myreplacer(data.getData().photoTitle),
			memberType : data.getData().photoMemberType,
			additional : myreplacer(data.getData().photoNotes),
			recorderMake : myreplacer(data.getData().photoModel),
			recordingEvent : myreplacer(data.getData().photoEventName),
			recordingLocation : myreplacer(data.getData().photoPlace),
			recordingOrganization : myreplacer(data.getData().photoOrg),
			recordingPeople : myreplacer(data.getData().photoPeopleNames),
			year : myreplacer(data.getData().photoDate),
			email : Ti.App.Properties.getString('Email Address'),
			uploaderfname : Ti.App.Properties.getString('First Name'),
			uploaderlname : Ti.App.Properties.getString('Last Name'),
			mimeType : data.getData().mimeType,
			fileExtension : data.getData().fileExtension,
			operatingSystem : Ti.Platform.name,
			osVersion : Ti.Platform.version
		};
	}
}

var activityIndicator = Ti.UI.createActivityIndicator({
	color : 'black',
	font : {
		fontSize : 20,
		fontFamily : 'Montserrat-Regular',
		fontStyle : '',
		fontWeight : 'bold'
	},
	message : 'Sending...',
	style : Ti.UI.ActivityIndicatorStyle.DARK,
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE
});

$.soundSubmitContainer.add(activityIndicator);

var submitPhoto = function(_options, _callback) {
	if (!Ti.Network.getOnline()) {
		Alloy.Globals.displayWifiSettingsAlert();
		return;
	}

	var xhr1 = Ti.Network.createHTTPClient({
		timeout : 0
	});

	xhr1.open("POST", ACS_DIGITAL_SOUND_UPLOAD_URL);
	xhr1.onerror = function(e) {
		_callback && _callback({
			success : false,
			error : e
		});
		activityIndicator.hide();
		console.log('onError!!');
		return;
	};
	xhr1.enableKeepAlive = true;

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

	xhr1.setRequestHeader('Content-Type', 'application/json');
	xhr1.setRequestHeader('enctype', 'multipart/form-data');
	// Ti.API.info("onLoad and onError functions set.....");
	// Ti.API.info("Sending....." + xhr1.location);

	xhr1.send(_options);
};

var photocallback = function(_response) {
	activityIndicator.hide();
	Ti.API.debug('Sent: ' + JSON.stringify(_response, null, 2));
	if (_response.success) {
		var dialog = Ti.UI.createAlertDialog({
			message : 'Sent: Thank you for using the App Upload Tool',
			ok : 'Okay',
			title : 'Submission Complete!'
		});

		dialog.addEventListener('click', function(e) {
			if (data.getData().resourceType == 'Oral History') {
				Alloy.Globals.OralForm.close();
				Alloy.Globals.OralForm = null;

			} else {
				Alloy.Globals.WildSoundForm.close();
				Alloy.Globals.WildSoundForm = null;
			}
			$.soundSubmitContainer.close();
			// var uploadScreenController = Alloy.createController('uploadScreen').getView();
			// uploadScreenController.open();
			// uploadScreenController = null;
		});
		dialog.show();
	} else {
		//alert('Something went wrong. Please try to submit again. \n' + JSON.stringify(_response.error.code) + '\n' + JSON.stringify(_response.error.source) + '\n');
		alert('Something went wrong. Please try to submit again. \n');
		$.next.enabled = true;
	}
};

function submit(e) {
	alert("Submitted");
	/*
	$.next.enabled = false;
	activityIndicator.show();
	Ti.API.info('These are the current Params:' + JSON.stringify(absoluteParams));

	submitPhoto(JSON.stringify(absoluteParams), photocallback);
	*/
}

function backButton(e) {
	$.soundSubmitContainer.close();
}

function slideMenu(e) {
	menuController = Alloy.createController('sliderMenu').getView();
	menuController.open();
}

