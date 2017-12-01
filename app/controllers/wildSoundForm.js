/**
 * @author ITD
 */
var args = arguments[0] || {};
//var parent = _parent;
//var parents = self;

var soundNativePath;
var userSound;
var wildSoundMimeType;

Alloy.Globals.WildSoundForm = $.wildSoundWin;

// $.arti.value = "Location";
// $.TitleLabelTA.value = "Title";
// $.dateTextArea.value = "Date recorded";
//
// $.soundNameTA.value = "First Name";
// $.soundNameLTA.value = "Last Name";
// $.soundOrgTA.value = "Org";
// $.soundPeopleTA.value = "People";
// $.soundMakeTA.value = "PLace";
// $.soundEventTA.value = "Interview Location";
// $.soundNoTA.value = "Interview Location";

var pWidth = Ti.Platform.displayCaps.platformWidth;
//375 iPhone 7
var pHeight = Ti.Platform.displayCaps.platformHeight;
//667 iPhone 7

console.log("Getting the platform version: " + Titanium.Platform.getVersion());
console.log("Getting screen size: " + Titanium.Platform.getDisplayCaps());
console.log("Getting screen sizeWidth: " + pWidth);
console.log("Getting screen sizeHeight: " + pHeight);

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
	$.audioSelectBtn.visible = false;
	$.nextBtn.visible = false;

	if (pWidth == '320') {
		console.log("iPhone 5 ya'll! ");
		// $.pickerView.width = '110%';
		$.dateAsterisk.left = '47%';
		$.locAsterisk.left = '47%';
		$.PTasterisk.left = '38.5%';
		$.soundNameAsterisk.left = '52.5%';
		$.soundNameLAsterisk.left = '52.5%';
		$.soundNameLAsterisk.top = '11%';
		$.notesAsterisk.left = '38%';

	} else if (pHeight == '736') {
		console.log("iPhone 6S/7S ya'll! ");

		$.dateAsterisk.left = '39%';
		$.locAsterisk.left = '39%';
		$.PTasterisk.left = '33%';
		$.soundNameAsterisk.left = '44.5%';
		$.soundNameLAsterisk.left = '44.5%';
		$.soundNameLAsterisk.top = '11%';
		$.notesAsterisk.left = '32%';

	} else {
		console.log("checking screenWidth: " + pWidth);
	}

}

if (OS_ANDROID) {
	$.QL.image = '/images/QL300.png';
	$.qp.image = '/images/QM_FINAL_outlines.png';
	$.audioSelectBtniOS.visible = false;
	$.nextBtniOS.visible = false;
}

var isAndroid = Ti.Platform.osname == 'android';
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

function showOptions() {
	if (OS_IOS) {
		//if (Titanium.Media.hasMusicLibraryPermissions()) {
		// alert('audio selected');
		Ti.Media.openMusicLibrary({
			allowMultipleSelections : false,
			mediaTypes : Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC | Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO,
			success : function(event) {
				console.log("This is in digital audio format, success soundgallery" + JSON.stringify(event.apiName));
				// var outBuffer = Ti.createBuffer({
				// data : event.source
				// });
				// // stream object could be socket, file, buffer or blob
				// var outStream = Ti.Stream.createStream({
				// mode : Ti.Stream.MODE_WRITE
				// });
				//
				// var bytesWritten = outStream.write(outBuffer);
				// // writes entire buffer to stream
				// Ti.API.info("Bytes written:" + bytesWritten);
				// should be 8

				//
				// called when media returned from the MusicLibrary
				Ti.API.debug(event.items[0]);
				console.log(event.items[0].title);

				Ti.API.debug('Our artist is: ' + event.items[0].artist);
				Ti.API.debug('audio title: ' + event.items[0].title);
				Ti.API.debug('audio hasProtectedAsset: ' + event.items[0].hasProtectedAsset);
				Ti.API.debug('audio url: ' + event.items[0].assetURL);
				Ti.API.debug('audio mediaType: ' + event.items[0].mediaType);

				// var soundFile = Ti.Filesystem.getFile(event.items[0]);
				// if (soundFile) {
				// console.log("Got something.");
				// //var isEncoded = Alloy.Globals.base64Check(soundFile);
				// }
				//
				// var soundDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'sound_recording');
				// if (!soundDir.exists()) {
				// soundDir.createDirectory();
				// }
				//
				// // .resolve() provides the resolved native path for the directory.
				// var soundFile = Ti.Filesystem.getFile(soundDir.resolve(), 'sound_rec.mp3');
				// Ti.API.info("soundFile path is: " + soundFile.resolve());
				// if (soundFile.write(event.items[0]) === false) {
				// // handle write error
				// console.log("Got something.");
				//
				// }
				// // dispose of file handles
				// soundFile = null;
				// soundDir = null;

				// var player;/var/mobile/media/iTunes_Control/
				// if (player) {
				// player.stop();
				// player = null;
				// }
				// player = Titanium.Media.createAudioPlayer({
				// url : event.items[0].url
				// });
				// player.start();
				//
				// setTimeout(function() {
				// player.stop();
				// }, 10000);

				// Create an instance of the index
				var searchItems = [];

				var searchableIndex = Ti.App.iOS.createSearchableIndex();

				var soundItemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
					itemContentType : Ti.App.iOS.UTTYPE_AUDIO,
					title : event.items[0].title,
					artist : event.items[0].artist,
					duration : event.items[0].playbackDuration,
					mediaTypes : [Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC, Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO]
				});

				var soundItem = Ti.App.iOS.createSearchableItem({
					uniqueIdentifier : Titanium.App.sessionId,
					domainIdentifier : Titanium.App.id,
					attributeSet : soundItemAttr
				});

				Ti.API.info("sound Item");

				searchItems.push(soundItem);

				searchableIndex.addToDefaultSearchableIndex(searchItems, function(e) {
					if (e.success) {
						Ti.API.info("Press the home button and now search for your keywords");
					} else {
						alert("Searchable index could not be created: " + JSON.stringify(e.error));
					}
				});
				var musicSearchItem = [soundItemAttr.title, soundItemAttr.artist, Ti.App.iOS.UTTYPE_AUDIO];
				var musicQueryString = String(musicSearchItem[0]);

				Ti.API.info('Search Query ' + musicQueryString + ' Datum: ' + JSON.stringify(musicSearchItem));

				executeSearchQuery(musicQueryString, musicSearchItem, function(callback) {
					Ti.API.info('Atrribute Set ' + JSON.stringify(callback.attributeSet));

					// Delete all Spotlight items with the given domain identifiers.
					searchableIndex.deleteAllSearchableItemByDomainIdenifiers([Titanium.App.id], function(e) {
						// console.log('Ti.App.iOS.SearchableIndex.deleteAllSearchableItemByDomainIdenifiers', e);
					});

				});

				// var stringToSaveInDatabase = Ti.Utils.base64encode(musicFile).toString();
				// //Ti.API.info("Current user sound Base64: " + stringToSaveInDatabase);

				alert("File added. Load times vary based on connection speed.");

				// $.audioSelectBtn.setTitle("Change Sound");
				$.audioSelectBtniOS.setTitle("Change Sound");
			},
			cancel : function() {
				// called when user cancels taking a picture
				alert("Aborting adding a Wild Sound recording from gallery");
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

		var activity = $.wildSoundWin.getActivity();
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
						Ti.API.info('Datum: ' + JSON.stringify(userSound.file.name) + ' CONTEXT INDEX: ' + Ti.Utils.base64encode(userSound).toString());
						wildSoundMimeType = userSound.mimeType;
						console.log("Oral History Mimetype " + userSound.mimeType + " User Sound " + userSound.size);
						var maxUploadSize = 104857600;
						if (userSound.length <= maxUploadSize) {
							var minutes = userSound.length / 1000000;
							minutes = minutes.toPrecision(2);
							$.audioSelectBtn.setTitle("Change Sound");
							alert("File added. Load times vary based on connection speed.");
						} else if (userSound.getSize() > maxUploadSize) {
							alert("Sorry! This audio file is too big to upload. (max: 20MB) To upload large files, please visit QueensMemory.org");
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
	if ($.soundNameTA.value === "" || $.soundNameLTA.value === "" || $.dateTextArea.value === "" || $.soundNoTA.value === "" || $.TitleLabelTA.value === "" || $.arti.value === "") {
		alert('You must fill out all the required fields to submit!');
	} else {
		if (!userSound) {
			alert('You need to select an audio file to submit!');
		} else {
			var fullName;
			var Name = $.soundNameTA.value.split(" ");
			if (Name[0] != " " || Name[1] != " " || Name[2] != " ") {
				var fullName = $.soundNameTA.value.split(" ");
			} else {
				fullName = $.photoN.value;
			}

			if (OS_ANDROID) {
				var fileExt = userSound.file.name;
				fileExt = "." + fileExt.substr(fileExt.lastIndexOf('.') + 1);
				Ti.API.info("File Extension " + fileExt);
			} else {
				fileExt = "";
			}

			var currentData = {
				userPhoto : userSound,
				photoDate : $.dateTextArea.value,
				photoPlace : $.arti.value,
				photoTitle : $.TitleLabelTA.value,
				photoFirstName : $.soundNameTA.value,
				photoLastName : $.soundNameLTA.value,
				photoEventName : $.soundEventTA.value,
				photoPeopleNames : $.soundPeopleTA.value,
				photoOrg : $.soundOrgTA.value,
				photoModel : $.soundMakeTA.value,
				photoNotes : $.soundNoTA.value,
				resourceType : "Sound Recording",
				submitType : "Upload Image",
				photoStepNumber : 3,
				photoLanguage : "EN",
				photoRights : "I have the permission of the rights owner to make this resource available through this repository.", // right
				photoMemberType : "No Membership",
				mimeType : wildSoundMimeType,
				fileExtension : fileExt
			};

			data.setData(currentData);
			var args = {
				thisTitle : $.Title.text,
				photoFullName : fullName,

				photoDate : $.dateTextArea.value,
				photoPlace : $.arti.value,
				photoTitle : $.TitleLabelTA.value,
				photoFirstName : $.soundNameTA.value,
				photoLastName : $.soundNameLTA.value,
				photoEventName : $.soundEventTA.value,
				photoPeopleNames : $.soundPeopleTA.value,
				photoOrg : $.soundOrgTA.value,
				photoModel : $.soundMakeTA.value,
				photoNotes : $.soundNoTA.value,

				mimeType : wildSoundMimeType
			};

			activityIndicator.show();

			submissionPageController = Alloy.createController('submissionPageSound', args).getView();
			activityIndicator.hide();

			submissionPageController.open();
			submissionPageController = null;
		}

	}

}

function helpSubmit(e) {
	var args = {
		thisTitle : $.Title.text,
		thisDate : $.soundDate.text,
		thisTimePeriod : $.photoDate.text,
		thisItem : $.TitleLabel.text,
		thisName : $.soundName.text,
		thisNameLast : $.soundNameL.text,
		thisRecordEvent : $.soundEvent.text,
		thisPeopleDiscuss : $.soundPeople.text,
		thisOrg : $.soundOrg.text,
		thisMake : $.soundMake.text,
		thisNote : $.soundNotes.text,
		thisButtonID : e.source.id
	};

	alertController = Alloy.createController('helpNote', args).getView();
	alertController.open();
}

function backButton(e) {
	$.wildSoundWin.close();
}

function executeSearchQuery(qString, searchableItemAttributeSet, _callback) {
	// if(!searchableItemAttributeSet.apiName == "Ti.App.iOS.SearchableItemAttributeSet"){
	//
	// }
	Ti.API.debug("Careful.");
	var allItems = [];
	// The search-query
	var searchQuery = Ti.App.iOS.createSearchQuery({
		queryString : 'contentType == "public.audio"',
		attributes : ["title", "fileSize", "path", "contentType", "contentURL", "kind", "duration", "artist", "securityMethod"]
	});

	// The event to be called when a new batch of items is found
	searchQuery.addEventListener("founditems", function(e) {
		Ti.API.info('Found stuff.');
		for (var i = 0; i < e.items.length; i++) {
			allItems.push(e.items[i]);
		}
	});

	// The event to be called when the search-query completes
	searchQuery.addEventListener("completed", function(e) {
		if (!e.success) {
			alert(e.error);
		}

		for (var i = 0; i < allItems.length; i++) {
			var attributeSet = allItems[i].attributeSet;
			var foundTitle = attributeSet.title;
			var foundDisplayName = attributeSet.path;
			var foundFileSize = attributeSet.fileSize;
			var foundContentType = attributeSet.contentType;

			Ti.API.info("title: " + foundTitle + ", path: " + foundDisplayName + " fileSize " + foundFileSize + " contentType " + foundContentType);
		}

		_callback && _callback({
			attributeSet : attributeSet,
		});

	});

	// Start the search-query (or use searchQuery.cancel()) to abort it
	searchQuery.start();
}
