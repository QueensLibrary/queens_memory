/**
 * @author ITD
 */

// $.arti.value = "Time Period";
// $.TitleLabelTA.value = "Title";
// $.photoRecordTA.value = "Date recorded";
// $.soundNameTA.value = "Sound Name";
// $.soundPeopleNameTA.value = "People First Name";
// $.soundPeopleNameLTA.value = "People Last Name";
// $.soundOrgTA.value = "Org";
// $.soundPeopleTA.value = "People";
// $.soundPlaceTA.value = "PLace";
// $.soundInterviewLocationTA.value = "Interveiw Location";
// $.soundNoTA.value = "Interveiw Location";
Alloy.Globals.OralForm = $.oralWin;

var soundNativePath;
var userSound;
var oralHistoryMimeType;
var pWidth = Ti.Platform.displayCaps.platformWidth;
//375 iPhone 7
var pHeight = Ti.Platform.displayCaps.platformHeight;
//667 iPhone 7
var activityIndicator = Ti.UI.createActivityIndicator({
	color : 'black',
	font : {
		fontSize : 20,
		fontFamily : 'Montserrat-Regular',
		fontStyle : '',
		fontWeight : 'bold'
	},
	message : 'Please Wait..',
	style : Ti.UI.ActivityIndicatorStyle.DARK,
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE
});

//                                 iPhone 4S (and earlier)	     iPhone 5	     iPhone 6 & 7	    iPhone 6 Plus & 7 Plus
//Window (including status bar area)	 320 x 480 pts	       320 x 568 pts	 375 x 667 pts	       414 x 736 pts

if (OS_IOS) {
	$.QL.image = 'QL300.png';
	$.qp.image = 'QM_FINAL_outlines.png';

	if (pWidth == '320') {
		console.log("iPhone 5 ya'll! ");

		$.timeAsterisk.left = '77%';
		$.dateAsterisk.left = '33.5%';
		$.dateAsterisk.top = '51%';
		$.locAsterisk.left = '75.5%';
		$.PTasterisk.left = '30%';
		$.NameAsterisk.left = '57.5%';
		$.NameLAsterisk.left = '57.5%';
		$.placesAsterisk.left = '68.5%';
		$.notesAsterisk.left = '38%';

	} else if (pHeight == '736') {
		console.log("iPhone 6S/7S ya'll! ");

		$.timeAsterisk.left = '61.5%';
		$.dateAsterisk.left = '28.5%';
		$.dateAsterisk.top = '51.5%';
		$.locAsterisk.top = '76.5%';
		$.locAsterisk.left = '61%';
		$.PTasterisk.left = '26%';
		$.NameAsterisk.top = '24%';
		$.NameAsterisk.left = '48%';
		$.NameLAsterisk.top = '36%';
		$.NameLAsterisk.left = '48%';
		$.placesAsterisk.left = '56%';
		$.notesAsterisk.left = '31.5%';

	} else {
		console.log("checking screenWidth: " + pWidth);
	}

} else if (OS_ANDROID) {
	$.QL.image = '/images/QL300.png';
	$.qp.image = '/images/QM_FINAL_outlines.png';
}
var isAndroid = Ti.Platform.osname == 'android';
var isIOS = Ti.Platform.osname == 'ios';
if (isAndroid) {
	var cameraPermission = "android.permission.CAMERA";
	var storagePermission = "android.permission.READ_EXTERNAL_STORAGE";
	var hasCameraPermission = Ti.Android.hasPermission(cameraPermission);
	var hasStoragePermission = Ti.Android.hasPermission(storagePermission);
	var permissionsToRequest = [];
	if (!hasCameraPermission) {
		permissionsToRequest.push(cameraPermission);
	}
	if (!hasStoragePermission) {
		permissionsToRequest.push(storagePermission);
	}
	if (permissionsToRequest.length > 0) {
		Ti.Android.requestPermissions(permissionsToRequest, function(e) {
			if (e.success) {
				Ti.API.info("SUCCESS");
			} else {
				Ti.API.info("ERROR: " + e.error);
			}
		});
	}
} else {
	if (!Ti.Media.hasMusicLibraryPermissions()) {
		Ti.Media.requestMusicLibraryPermissions(function(e) {
			if (!e.success) {
				alert("No permissions!");
				return;
			}
		});
	}
}

var data = require('data');
//var userAudio;

function showOptions() {
	if (OS_IOS) {
		//if (Titanium.Media.hasMusicLibraryPermissions()) {
		// alert('audio selected');
		Titanium.Media.openMusicLibrary({
			allowMultipleSelections : false,
			mediaTypes : Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC | Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO,
			success : function(event) {
				// called when media returned from the MusicLibrary
				console.log("This is in digital audio format, success soundgallery" + JSON.stringify(event));

				Ti.API.debug('Our artist is: ' + event.artist);
				Titanium.API.info('audio title: ' + event.title);
				Titanium.API.info('audio url: ' + event.nativePath);

				// Ti.API.debug('Our type was: ' + userAudio.mimeType);
				// Ti.API.debug('Our api name was: ' + userAudio.apiName);
				// Titanium.API.info('Audio size: ' + userAudio.size);
				// Ti.API.debug('Our User artist is: ' + userAudio.artist);
				// Titanium.API.info('Useraudio title: ' + userAudio.title);
				// Titanium.API.info('Useraudio url: ' + userAudio.nativePath);
				//
				// console.log('View event:' + JSON.stringify(event.media));
				// Titanium.API.info('TiApi View event:' + JSON.stringify(userAudio));

				//var nativePath = event.nativePath;
				//var fileType = String(nativePath).substring(nativePath.length - 3);

				// var currentSound = Titanium.Media.createSound({
				// url : event,
				// preload : true,
				// volume : 1.0
				// });
				// Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;

				oralHistoryMimeType = "audio/mp3";

				//Ti.API.info("Current user sound: " + currentSound.apiName + ' ' + currentSound.url);
				userSound = event.items[0];

				// var stringToSaveInDatabase = Ti.Utils.base64encode(userSound).toString();
				// Ti.API.info('Confirm Blob file: ' + stringToSaveInDatabase);

				alert("File added. Load times vary based on connection speed.");
				$.audioSelectBtn.setTitle("Change Sound");
			},
			cancel : function() {
				// called when user cancels taking a picture
				alert("Aborting adding an Oral History recording from gallery");
			},
			error : function(error) {
				// called when there's an error
				var a = Titanium.UI.createAlertDialog({
					title : 'Music Library'
				});
				if (error.code == Titanium.Media.NO_MUSIC_PLAYER) {
					a.setMessage('Please run this test on device.');
				} else {
					a.setMessage('Unexpected error: ' + error.code);
				}
				a.show();
			}
		});
	} else {
		var intent = Ti.Android.createIntent({
			action : Ti.Android.ACTION_GET_CONTENT,
			type : "audio/*"
		});

		var activity = $.oralWin.getActivity();
		activity.startActivityForResult(intent, function(e) {
			if (e.resultCode == Ti.Android.RESULT_OK) {
				//var Content = require("com.jreyes.ticontentres");
				var Content = require("yy.ticontent");
				soundNativePath = e.intent.data;

				if (soundNativePath.includes("content://media/external")) {
					if (soundNativePath.indexOf("content://media/external/audio") === 0) {
						if (soundNativePath.indexOf("content://") === 0) {
							soundNativePath = "file:/" + Content.resolveAudioPath(e.intent.data);
						} else {
							soundNativePath = Titanium.Network.decodeURIComponent(soundNativePath);
						}
						userSound = null;
					} else {
						alert("Sorry! Please select an audio file.");
					}
				} else if (soundNativePath.includes("file://")) {
					soundNativePath = Titanium.Network.decodeURIComponent(soundNativePath);
					userSound = null;
				} else {
					alert("Sorry! Please try to select a sound via a file explorer or your device's sound picker.");
					return;
				}

				try {
					activityIndicator.show();
					userSound = Ti.Filesystem.getFile(soundNativePath).read();
					if (Ti.Utils.base64encode(userSound).toString()) {
						Ti.API.info('Datum: ' + userSound.length + ' CONTEXT INDEX: ' + Ti.Utils.base64encode(userSound).toString());
						oralHistoryMimeType = userSound.mimeType;
						console.log("Oral History Mimetype " + userSound.mimeType + "User Sound " + userSound.size);
						var maxUploadSize = 104857600;
						if (userSound.length <= maxUploadSize) {
							var minutes = userSound.length / 1000000;
							minutes = minutes.toPrecision(2);
							$.audioSelectBtn.setTitle("Change Sound");
							alert("File added. Load times vary based on connection speed.");
						} else if (userSound.getSize() > maxUploadSize) {
							alert("Sorry! This audio file is too big to upload.(max: 20MB)  To upload large files, please visit QueensMemory.org");
							userSound = null;
							return;
						}
					}
				} catch(e) {
					Ti.API.info('Error: ' + e);
					if (e.includes("Failed to allocate")) {
						alert("Sorry! This audio file is too big to upload. (max: 20MB)  To upload large files, please visit QueensMemory.org");
						userSound = null;
					} else {
						alert('Unexpected error: ' + e);
					}
				}
				activityIndicator.hide();
			}
		});
	}

}

function submit(e) {

	if ($.soundPlaceTA.value === "" || $.photoRecordTA.value === "" || $.arti.value === "" || $.soundInterviewLocationTA.value === "" || $.soundNoTA.value === "" || $.TitleLabelTA.value === "" || $.soundPeopleNameTA.value === "" || $.soundPeopleNameLTA.value === "") {
		alert('You must fill out all the required fields to submit!');
	} else {
		if (!userSound) {
			alert('You need to select an audio file to submit!');
		} else {

			var fullName;
			var Name = $.soundPeopleNameTA.value.split(" ");
			if (Name[0] != " " || Name[1] != " " || Name[2] != " ") {
				var fullName = $.soundPeopleNameTA.value.split(" ");
			} else {
				fullName = $.photoN.value;
			}

			console.log("Time period arti " + $.arti.value);
			console.log("Time period arti without toString( )" + $.arti.value);

			if (OS_ANDROID) {
				var fileExt = userSound.file.name;
				fileExt = "." + fileExt.substr(fileExt.lastIndexOf('.') + 1);
				Ti.API.info("File Extension " + fileExt);
			} else {
				fileExt = "";
			}

			var currentData = {
				userPhoto : userSound,

				timePeriod : $.arti.value,
				photoDate : $.photoRecordTA.value,
				photoInterviewLocation : $.soundInterviewLocationTA.value,
				photoTitle : $.TitleLabelTA.value,
				photoFirstName : $.soundPeopleNameTA.value,
				photoLastName : $.soundPeopleNameLTA.value,
				photoPeopleNames : $.soundNameTA.value,
				photoLanguage : $.soundLangTA.value,
				photoPlace : $.soundPlaceTA.value,
				photoEventName : $.soundEventTA.value,
				photoOrg : $.soundOrgTA.value,
				photoModel : $.soundMakeTA.value,
				photoNotes : $.soundNoTA.value,
				resourceType : "Oral History",
				submitType : "Upload Image",
				photoStepNumber : 3,
				photoRights : "I have the permission of the rights owner to make this resource available through this repository.", // right
				photoMemberType : "No Membership",
				photoInterviewee : $.soundPeopleNameTA.value,
				photoPeople : $.soundPeopleTA.value,
				mimeType : oralHistoryMimeType,
				fileExtension : fileExt
			};

			data.setData(currentData);

			var args = {
				photoFullName : fullName,
				thisTitle : $.Title.text,

				timePeriod : $.arti.value,
				photoDate : $.photoRecordTA.value,
				photoInterviewLocation : $.soundInterviewLocationTA.value,
				photoTitle : $.TitleLabelTA.value,
				photoFirstName : $.soundPeopleNameTA.value,
				photoLastName : $.soundPeopleNameLTA.value,
				photoPeopleNames : $.soundNameTA.value,
				photoLanguage : $.soundLangTA.value,
				photoPlace : $.soundPlaceTA.value,
				photoEventName : $.soundEventTA.value,
				photoOrg : $.soundOrgTA.value,
				photoModel : $.soundMakeTA.value,
				photoNotes : $.soundNoTA.value,
				photoInterviewee : $.soundPeopleNameTA.value,
				photoPeople : $.soundPeopleTA.value,
				mimeType : oralHistoryMimeType

			};
			
			submissionPageController = Alloy.createController('submissionPageSound', args).getView();
			submissionPageController.open();
			submissionPageController = null;
		}

	}

}

function helpSubmit(e) {
	var args = {
		thisTitle : $.Title.text,
		thisTimePeriod : $.photoDate.text,
		thisItem : $.TitleLabel.text,
		thisRecordDate : $.photoRecord.text,
		thisPlace : $.soundPlace.text,
		thisName : $.soundName.text,
		thisPerson : $.soundPeopleName.text,
		thisPersonLast : $.soundPeopleNameL.text,
		thisOrg : $.soundOrg.text,
		thisPeopleDiscuss : $.soundPeople.text,
		thisInterviewPlace : $.soundInterviewLocation.text,
		thisRecordEvent : $.soundEvent.text,
		thisLanguage : $.soundLang.text,
		thisMake : $.soundMake.text,
		thisNote : $.soundNotes.text,
		thisButtonID : e.source.id
	};

	alertController = Alloy.createController('helpNote', args).getView();
	alertController.open();
	alertController = null;
}

function backButton(e) {
	$.oralWin.close();
}

