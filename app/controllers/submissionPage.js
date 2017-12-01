var args = arguments[0] || {};
var menuController;
var data = require('data');
var uploadScreenController;

var ACS_DIGITAL_PHOTO_UPLOAD_URL = "this will be your api endpoint";

$.Title.text = args.thisTitle || "Error, most like";

//console.log("FullName: " + args.photoFullName);

if (OS_IOS) {
	$.QL.image = 'QL300.png';
	$.qp.image = 'QM_FINAL_outlines.png';

} else if (OS_ANDROID) {
	$.QL.image = '/images/QL300.png';
	$.qp.image = '/images/QM_FINAL_outlines.png';
}

function heighttoNum(height, number) {
	height = (parseInt(height, 10)) + number;
	return height;
}

var checkOS = Ti.Platform.name;
if (OS_IOS) {
	if (checkOS == "iPhone OS") {
		checkOS = "iOS";
	}
}

if (args.thisTitle == "Scanned Item") {

	if (OS_IOS) {

		if (args.photoTitle.length <= 35 && args.photoDate.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoModel.length <= 35 && args.photoLocation.length <= 35 && args.artifactType.length <= 35 && args.photoMeasurements.length <= 35) {
			$.submissionsView.height = '75%';
			// $.submissionsView.backgroundColor = 'blue';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);

		} else if (args.photoTitle.length >= 90 && args.photoDate.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90 && args.photoLocation.length >= 90 && args.artifactType.length >= 90 && args.photoMeasurements.length >= 90) {
			$.submissionsView.height = '175%';
			// $.submissionsView.backgroundColor = 'pink';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);

		} else if ((args.photoTitle.length >= 50) && (args.photoDate.length >= 50) && (args.photoEventName.length >= 50) && (args.photoOrg.length >= 50) && (args.photoFirstName.length >= 50) && (args.photoLastName.length >= 50) && (args.photoPeopleNames.length >= 50) && (args.photoModel.length >= 50) && (args.photoLocation.length >= 50) && (args.artifactType.length >= 50) && (args.photoMeasurements.length >= 50)) {
			$.submissionsView.height = '150%';
			// $.submissionsView.backgroundColor = 'white';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);

		} else {
			$.submissionsView.height = '100%';
			// $.submissionsView.backgroundColor = 'red';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);
		}
	}

	if (OS_ANDROID) {

		if (args.photoTitle.length <= 35 && args.photoDate.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoModel.length <= 35 && args.photoLocation.length <= 35 && args.artifactType.length <= 35 && args.photoMeasurements.length <= 35) {
			$.submissionsView.height = '470dp';
			// $.submissionsView.backgroundColor = 'blue';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);

		} else if (args.photoTitle.length >= 90 && args.photoDate.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90 && args.photoLocation.length >= 90 && args.artifactType.length >= 90 && args.photoMeasurements.length >= 90) {
			$.submissionsView.height = '800dp';
			// $.submissionsView.backgroundColor = 'pink';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);

		} else if (args.artifactType.length >= 5 && args.photoTitle.length >= 90 && args.photoDate.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90 && args.photoLocation.length >= 90 && args.photoMeasurements.length >= 90) {
			$.submissionsView.height = '700dp';
			// $.submissionsView.backgroundColor = 'yellow';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);

		} else if ((args.photoTitle.length >= 50) && (args.photoDate.length >= 50) && (args.photoEventName.length >= 50) && (args.photoOrg.length >= 50) && (args.photoFirstName.length >= 50) && (args.photoLastName.length >= 50) && (args.photoPeopleNames.length >= 50) && (args.photoModel.length >= 50) && (args.photoLocation.length >= 50) && (args.artifactType.length >= 50) && (args.photoMeasurements.length >= 50)) {
			$.submissionsView.height = '650dp';
			// $.submissionsView.backgroundColor = 'white';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);

		} else {
			$.submissionsView.height = '560dp';
			// $.submissionsView.backgroundColor = 'red';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);
			// console.log("top of artifactType text: " + args.artifactType.length);
			// console.log("top of photoLocation text: " + args.photoLocation.length);
			// console.log("top of photoMeasurements text: " + args.photoMeasurements.length);
		}
	}

	$.photoPlace.text = "Artifact Type: ";
	$.photoNameF.text = "Artifact Creator [First]: ";
	$.photoName.text = "Artifact Creator [Last]: ";

	$.photoDate.text += ' ' + data.getData().photoDate;
	$.photoPlace.text += ' ' + data.getData().artifactType;

	$.photoNameF.text += ' ' + data.getData().photoFirstName;
	$.photoName.text += ' ' + data.getData().photoLastName;

	$.photoPeopleName.text += ' ' + data.getData().photoPeopleNames;
	$.photoEventName.text += ' ' + data.getData().photoEventName;
	$.photoOrg.text += ' ' + data.getData().photoOrg;
	$.photoMake.text += ' ' + data.getData().photoModel;
	$.photoNotesLabel.text += ' ' + data.getData().photoNotes;
	$.photoTitle.text += ' ' + data.getData().photoTitle;
	$.photoLoc.text += ' ' + data.getData().photoLocation;
	$.photoMeasure.text += ' ' + data.getData().photoMeasurements;
}

if (args.thisTitle == "Digital Photo") {

	if (OS_IOS) {
		if (args.photoTitle.length <= 49 && args.photoDate.length <= 49 && args.photoPlace.length <= 49 && args.photoEventName.length <= 49 && args.photoOrg.length <= 49 && args.photoFirstName.length <= 49 && args.photoLastName.length <= 49 && args.photoPeopleNames.length <= 49 && args.photoModel.length <= 49) {
			$.submissionsView.height = '75%';
			// $.submissionsView.backgroundColor = 'blue';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoTitle.length >= 100 && args.photoDate.length >= 100 && args.photoPlace.length >= 100 && args.photoEventName.length >= 100 && args.photoOrg.length >= 100 && args.photoFirstName.length >= 100 && args.photoLastName.length >= 100 && args.photoPeopleNames.length >= 100 && args.photoModel.length >= 100) {
			$.submissionsView.height = '175%';
			// $.submissionsView.backgroundColor = 'pink';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoTitle.length >= 50 && args.photoDate.length >= 50 && args.photoPlace.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50) {
			$.submissionsView.height = '150%';
			// $.submissionsView.backgroundColor = 'white';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else {
			$.submissionsView.height = '100%';
			// $.submissionsView.backgroundColor = 'red';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		}
	}

	if (OS_ANDROID) {
		if (args.photoTitle.length <= 49 && args.photoDate.length <= 49 && args.photoPlace.length <= 49 && args.photoEventName.length <= 49 && args.photoOrg.length <= 49 && args.photoFirstName.length <= 49 && args.photoLastName.length <= 49 && args.photoPeopleNames.length <= 49 && args.photoModel.length <= 49) {
			$.submissionsView.height = '450dp';
			// $.submissionsView.backgroundColor = 'blue';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoTitle.length >= 100 && args.photoDate.length >= 100 && args.photoPlace.length >= 100 && args.photoEventName.length >= 100 && args.photoOrg.length >= 100 && args.photoFirstName.length >= 100 && args.photoLastName.length >= 100 && args.photoPeopleNames.length >= 100 && args.photoModel.length >= 100) {
			$.submissionsView.height = '700dp';
			// $.submissionsView.backgroundColor = 'pink';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else if (args.photoTitle.length >= 50 && args.photoDate.length >= 50 && args.photoPlace.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50) {
			$.submissionsView.height = '650dp';
			// $.submissionsView.backgroundColor = 'white';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		} else {
			$.submissionsView.height = '600dp';
			// $.submissionsView.backgroundColor = 'red';

			// console.log("top of photoDate text: " + args.photoDate.length);
			// console.log("top of phototitle text: " + args.photoTitle.length);
			// console.log("top of photoplace text: " + args.photoPlace.length);
			// console.log("top of photoFirstName text: " + args.photoFirstName.length);
			// console.log("top of photoLastName text: " + args.photoLastName.length);
			// console.log("top of photoPeopleNames text: " + args.photoPeopleNames.length);
			// console.log("top of photoEventName text: " + args.photoEventName.length);
			// console.log("top of photoOrg text: " + args.photoOrg.length);
			// console.log("top of photoModel text: " + args.photoModel.length);

		}
	}

	$.photoLoc.visible = false;
	$.photoMeasure.visible = false;
	$.photoLoc.top = '0%';
	$.photoMeasure.top = '0%';
	// $.photoNotesLabel.top = '0%';

	$.photoDate.text += ' ' + data.getData().photoDate;
	$.photoPlace.text += ' ' + data.getData().photoPlace;
	$.photoNameF.text += ' ' + data.getData().photoFirstName;
	$.photoName.text += ' ' + data.getData().photoLastName;

	$.photoPeopleName.text += ' ' + data.getData().photoPeopleNames;
	$.photoEventName.text += ' ' + data.getData().photoEventName;
	$.photoOrg.text += ' ' + data.getData().photoOrg;
	$.photoMake.text += ' ' + data.getData().photoModel;
	// $.photoNotes.value += ' ' + data.getData().photoNotes;
	$.photoNotesLabel.text += ' ' + data.getData().photoNotes;
	$.photoTitle.text += ' ' + data.getData().photoTitle;
	$.photoLoc.text += ' ' + data.getData().photoLocation;
	$.photoMeasure.text += ' ' + data.getData().photoMeasurements;

}

if (OS_IOS) {
	// $.uploadedImage.image = data.getData().userPhoto || 'QL300.png';
	$.uploadedImage.image = args.customImage || 'QL300.png';
} else {
	// $.uploadedImage.image = data.getData().userPhoto || '/images/QL300.png';
	$.uploadedImage.image = args.customImage || '/images/QL300.png';

}

var activityIndicator = Ti.UI.createActivityIndicator({
	color : 'black',
	font : {
		fontFamily : 'Helvetica Neue',
		fontSize : 26,
		fontWeight : 'bold'
	},
	message : 'Sending...',
	style : Ti.UI.ActivityIndicatorStyle.DARK,
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE
});
$.submitWin.add(activityIndicator);

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

if (data.getData().resourceType == 'Scanned Material') {
	var scannedMaterial = data.getData().userPhoto;
	var stringToSaveInDatabase = Ti.Utils.base64encode(scannedMaterial).toString();
	// if(stringToSaveInDatabase.length > 64){
	// var md5 = Ti.Utils.md5HexDigest(stringToSaveInDatabase);
	// var expected = 'b51747a51f685cfb684cf3e20918edeb';
	// Ti.UI.createAlertDialog({
	// title : 'md5',
	// message : ' '\nmd5: ' + md5 + '\nexpected: ' + expected
	// }).show();
	// }
	//
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
		scannedLocation : myreplacer(data.getData().photoLocation),
		measurements : myreplacer(data.getData().photoMeasurements),

		descriptionAbstract : myreplacer(data.getData().artifactType),
		artifactEvent : myreplacer(data.getData().photoEventName),
		artifactOrganization : myreplacer(data.getData().photoOrg),
		artifactPerson : myreplacer(data.getData().photoPeopleNames),
		scanner : myreplacer(data.getData().photoModel),
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
	var stringToSaveInDatabase = Ti.Utils.base64encode(data.getData().userPhoto).toString();

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
		camera : myreplacer(data.getData().photoModel),
		events : myreplacer(data.getData().photoEventName),
		organization : myreplacer(data.getData().photoOrg),
		persons : myreplacer(data.getData().photoPeopleNames),
		photoLocation : myreplacer(data.getData().photoPlace),
		year : myreplacer(data.getData().photoDate),
		email : Ti.App.Properties.getString('Email Address'),
		uploaderfname : Ti.App.Properties.getString('First Name'),
		uploaderlname : Ti.App.Properties.getString('Last Name'),
		mimeType : data.getData().mimeType,
		fileExtension : data.getData().fileExtension,
		operatingSystem : checkOS,
		osVersion : Ti.Platform.version
	};
}

var submitPhoto = function(_options, _callback) {
	if (!Ti.Network.getOnline()) {
		Alloy.Globals.displayWifiSettingsAlert();
		return;
	}

	var xhr1 = Ti.Network.createHTTPClient({
		timeout : 60000
	});
	xhr1.open("POST", ACS_DIGITAL_PHOTO_UPLOAD_URL);

	xhr1.onerror = function(e) {
		_callback && _callback({
			success : false,
			error : e
		});
		activityIndicator.hide();
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

	xhr1.setRequestHeader('Content-Type', 'application/json');
	xhr1.setRequestHeader('enctype', 'multipart/form-data');

	Ti.API.info("onLoad and onError functions set.....");
	Ti.API.info("Sending....." + xhr1.location);

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
			if (data.getData().resourceType == 'Scanned Material') {
				Alloy.Globals.ScanForm.close();
				Alloy.Globals.ScanForm = null;
			} else {
				Alloy.Globals.DigitalForm.close();
				Alloy.Globals.DigitalForm = null;
			}
			$.submitWin.close();
			// uploadScreenController = Alloy.createController('uploadScreen').getView();
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
	/*$.next.enabled = false;
	activityIndicator.show();
	var params = JSON.stringify(absoluteParams);
	// var fullname = JSON.stringify(absoluteParams.firstname);
	//Ti.API.info('These are the current Params:' + params);
	submitPhoto(params, photocallback);*/
}

function backButton(e) {
	$.submitWin.close();
}

function slideMenu(e) {
	menuController = Alloy.createController('sliderMenu').getView();
	menuController.open();
}

//// PLAYGROUND
// var socket = Ti.Network.Socket.createTCP({
// host : '172.16.100.34',
// port : 8083,
// connected : function(e) {
// Ti.API.info('Socket opened!');
// Ti.Stream.pump(e.socket, readCallback, 1024, true);
// Ti.Stream.write(socket, Ti.createBuffer({
// value : 'params'
// }), writeCallback);
// },
// error : function(e) {
// Ti.API.info('Error (' + e.errorCode + '): ' + e.error);
// },
// });
// socket.connect();
//
// function writeCallback(e) {
// Ti.API.info('Successfully wrote to socket.');
// }
//
// function readCallback(e) {
// if (e.bytesProcessed == -1) {
// // Error / EOF on socket. Do any cleanup here.
//
// }
// try {
// if (e.buffer) {
// var received = e.buffer.toString();
// Ti.API.info('Received: ' + received);
// } else {
// Ti.API.error('Error: read callback called with no buffer!');
// }
// } catch (ex) {
// Ti.API.error(ex);
// }
// }

