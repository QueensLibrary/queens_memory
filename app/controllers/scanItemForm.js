/**
 * @author ITD
 */

Alloy.Globals.ScanForm = $.scanWin;

var args;
var submitTitle = $.Title.text;
var ImageFactory = require('ti.imagefactory');

// $.arti.value = "QPL";
// $.TitleLabelTA.value = "Wahiddo Thissuh";
// $.artifactText.value = "QPL Ephemera";
// $.photoNF.value = "Aniqa";
// $.photoN.value = "Wahiddo";
// $.photoNo.value = "Notes";
// $.photoLocationTA.value = "Location";

var scannedItem;
var scannedItemMimeType;
var pWidth = Ti.Platform.displayCaps.platformWidth;
//375 iPhone 7
var pHeight = Ti.Platform.displayCaps.platformHeight;
//667 iPhone 7

$.artifactText.editable = false;

if (OS_IOS) {
	$.QL.image = 'QL300.png';
	$.qp.image = 'QM_FINAL_outlines.png';

	if (pWidth == '320') {
		console.log("iPhone 5 ya'll! ");

		$.photoView2.height = '105%';
		$.photoPeopleName.top = '26%';
		$.PPNhelpButton.top = '31%';
		$.photoPN.top = '32%';

		$.PMhelpButton.top = '65%';

		$.dateAsterisk.left = '68%';
		$.locAsterisk.left = '60%';
		$.PTasterisk.left = '29%';
		$.NameAsterisk.left = '66.5%';
		$.NameLAsterisk.left = '66.5%';
		$.placesAsterisk.left = '72%';
		$.notesAsterisk.left = '38%';

	} else if (pHeight == '736') {
		console.log("iPhone 6S/7S ya'll! ");

		$.dropDownButton.top = '83.5%';

		$.dateAsterisk.left = '56%';
		$.locAsterisk.left = '48.5%';
		$.PTasterisk.left = '25%';
		$.NameAsterisk.left = '54%';
		$.NameLAsterisk.left = '54%';
		$.placesAsterisk.left = '59%';
		$.notesAsterisk.left = '31.5%';

	} else {
		console.log("checking screenWidth: " + pWidth);
	}

} else if (OS_ANDROID) {
	$.QL.image = '/images/QL300.png';
	$.qp.image = '/images/QM_FINAL_outlines.png';

	var toast = Ti.UI.createNotification({
		message : "Please Stand By",
		duration : Ti.UI.NOTIFICATION_DURATION_LONG
	});

}

// Variables
var opts = {
	title : 'Select File Type'
};

opts.options = ['Photo', 'Cancel'];
opts.buttonNames = ['Help'];
opts.cancel = 1;

var artifacts = {
	title : 'Select Artifact Type'
};
artifacts.options = ['Photo Print', 'Photo negative', 'Photo positive', 'Ephemera', 'Leaflet', 'Manuscript', 'Diary', 'Clipping', 'Advertisement', 'Album', 'Broadside', 'Cartoon', 'Other', 'Cancel'];
// opts.buttonNames = ['Help'];
artifacts.cancel = 13;

var data = require('data');

function showOptions() {
	if (OS_IOS) {
		Titanium.Media.openPhotoGallery({
			success : function(event) {
				// called when media returned from the camera
				scannedItem = event.media;

				if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
					console.log("This is in digital photoform, success photogallery");

					// Ti.API.debug('Our type was: ' + userImage.mimeType);
					// Ti.API.debug('Our api name was: ' + userImage.apiName);
					// Titanium.API.info('image url: ' + userImage.size);

					Ti.API.debug('Our type was: ' + event.media.toString());
					Ti.API.debug('Our api name was: ' + event.mediaType);
					Titanium.API.info('image url: ' + event.media.size);

					var imageView = Ti.UI.createImageView({
						image : event.media,
						width : Ti.UI.SIZE,
						height : Ti.UI.SIZE,
					});

					try {
						scannedItem = imageView.toBlob();
						scannedItemMimeType = scannedItem.mimeType;

						$.scanSrc.setTitle("Change Image");
						alert("File added. Load times vary based on connection speed.");
					} catch(e) {
						alert('Unexpected error: ' + e.code);
					}
					args = {
						customImage : scannedItem,
					};

				} else {
					alert("got the wrong type back =" + event.mediaType);
				}
			},

			cancel : function() {
				// called when user cancels taking a picture
				alert("Abort adding in scanned item.");
			},
			error : function(error) {
				// called when there's an error
				var a = Titanium.UI.createAlertDialog({
					title : 'Camera'
				});
				if (error.code == Titanium.Media.NO_CAMERA) {
					a.setMessage('Please run this test on device');
				} else {
					a.setMessage('Unexpected error: ' + error.code);
				}
				a.show();
			},

			saveToPhotoGallery : false,
		});
	} else {
		var scanOptionDialog = Ti.UI.createOptionDialog(opts);

		scanOptionDialog.show();
		scanOptionDialog.addEventListener('click', function(event) {
			switch(event.index) {
			case 0:
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						var imageCorrection = Alloy.Globals.rotateAndResize(event.media, event.media.width, 100);

						if (imageCorrection) {
							Ti.API.info('Corrected Blob Issue: ' + imageCorrection.read() + " " + imageCorrection.read().mimeType);
						}
						var imageBlob = imageCorrection.read();
						// called when media returned from the camera
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							console.log("This is in digital photoform, success photogallery");

							Ti.API.debug('Our type was: ' + event.media.mimeType);
							Ti.API.debug('Our api name was: ' + event.media.apiName);

							scannedItem = null;
							try {

								//Ti.API.info("API Name: " + event.media);
								scannedItem = imageBlob;
								var isEncoded = Alloy.Globals.base64Check(scannedItem);
								Ti.API.info('Is this properly setup?' + isEncoded);
								scannedItemMimeType = scannedItem.mimeType;
								$.scanSrc.setTitle("Change Image");
								alert("File added. Load times vary based on connection speed.");
							} catch(e) {
								Ti.UI.createNotification({
									message : "Invalid selection. Please try a different photo.",
									duration : Ti.UI.NOTIFICATION_DURATION_SHORT
								}).show();
							}
						} else {
							alert("got the wrong type back =" + event.mediaType);
						}
					},

					cancel : function() {
						// called when user cancels taking a picture
						Ti.UI.createNotification({
							message : "Abort adding in scanned item.",
							duration : Ti.UI.NOTIFICATION_DURATION_SHORT
						}).show();
					},
					error : function(error) {
						// called when there's an error
						var a = Titanium.UI.createAlertDialog({
							title : 'Photo'
						});
						if (error.code == Titanium.Media.NO_CAMERA) {
							a.setMessage('Please run this test on device');
						} else {
							a.setMessage('Unexpected error: ' + error.code);
						}
						a.show();
					},

					saveToPhotoGallery : false,
				});
				break;
			// case 1:
			// var intent = Ti.Android.createIntent({
			// action : Ti.Android.ACTION_GET_CONTENT,
			// type : "image/tiff",
			// });
			// var activity = $.scanWin.getActivity();
			// activity.startActivityForResult(intent, function(e) {
			// if (e.resultCode == Ti.Android.RESULT_OK) {
			//
			// var contentResolutionModule = require("com.jreyes.ticontentres");
			// var scanNativePath;
			// Ti.API.info('Here is the current sound path ' + JSON.stringify(e.intent));
			//
			// if (scanNativePath.indexOf("content://") === 0) {
			// scanNativePath = contentResolutionModule.getPath(e.intent.data);
			// } else {
			// scanNativePath = Titanium.Network.decodeURIComponent(scanNativePath);
			// }
			//
			// scannedItem = Ti.Filesystem.getFile(scanNativePath);
			// var stringToSaveInDatabase = Ti.Utils.base64encode(scannedItem).toString();
			// Ti.API.info('These are the current BASE64:' + stringToSaveInDatabase);
			//
			// if (scannedItem) {
			// $.scanSrc.setTitle("Change Image");
			// alert("File added. Load times vary based on connection speed.");
			// }
			// }
			//
			// });
			// break;
			default:
				Ti.UI.createNotification({
					message : "Abort adding in scanned item.",
					duration : Ti.UI.NOTIFICATION_DURATION_SHORT
				}).show();
				break;
			}

		});
		scanOptionDialog = null;
		Ti.API.debug('image scannedItemMimeType: ' + scannedItemMimeType);
	}
}

function submit(e) {
	if ($.arti.value === "" || $.artifactText.value === "" || $.photoNF.value === "" || $.photoN.value === "" || $.photoLocationTA.value === "" || $.TitleLabelTA.value === "" || $.photoNo.value === "") {
		alert('You must fill out all the required fields to submit!');
	} else {
		if (!scannedItem) {
			alert('You need to select an item to submit!');
		} else {

			var fullName;
			var Name = $.photoN.value.split(" ");
			if (Name[0] != " " || Name[1] != " " || Name[2] != " ") {
				var fullName = $.photoN.value.split(" ");
			} else {
				fullName = $.photoN.value;
			}

			if (OS_ANDROID) {
				var fileExt = scannedItem.file.name;
				fileExt = "." + fileExt.substr(fileExt.lastIndexOf('.') + 1);
				Ti.API.info("File Extension " + fileExt);
			} else {
				fileExt = "";
			}

			var currentData = {

				photoDate : $.arti.value,
				userPhoto : scannedItem,
				resourceType : "Scanned Material",
				submitType : "Upload Image",
				photoStepNumber : 3,

				photoFirstName : $.photoNF.value,
				photoLastName : $.photoN.value,
				photoLanguage : "EN",
				photoRights : "I have the permission of the rights owner to make this resource available through this repository.", // right
				photoEventName : $.photoEN.value,
				photoMemberType : "No Membership",
				photoPeopleNames : $.photoPN.value,
				photoOrg : $.photoO.value,
				photoModel : $.photoM.value,
				photoNotes : $.photoNo.value,
				artifactType : $.artifactText.value,
				photoTitle : $.TitleLabelTA.value,
				mimeType : scannedItemMimeType,
				photoLocation : $.photoLocationTA.value,
				photoMeasurements : $.photoMeasurementsTA.value,
				fileExtension : fileExt
			};

			data.setData(currentData);
			var args = {
				customDate : $.arti.value,
				customImage : currentData['userPhoto'],
				customImageSize : scannedItem.size || 'nil',
				photoFullName : fullName,
				thisTitle : $.Title.text,

				photoDate : $.arti.value,
				photoTitle : $.TitleLabelTA.value,
				photoFirstName : $.photoNF.value,
				photoLastName : $.photoN.value,
				photoEventName : $.photoEN.value,
				photoPeopleNames : $.photoPN.value,
				photoOrg : $.photoO.value,
				photoModel : $.photoM.value,
				photoNotes : $.photoNo.value,
				artifactType : $.artifactText.value,
				// photoTitle : $.TitleLabelTA.value,
				photoLocation : $.photoLocationTA.value,
				photoMeasurements : $.photoMeasurementsTA.value,
				photoNotes : $.photoNo.value,
			};

			submissionPageController = Alloy.createController('submissionPage', args).getView();
			submissionPageController.open();
		}
	}
}



function showArtifact() {

	$.artifactText.blur();
	$.artifactText.editable = false;

	var scanArtifactDialog = Ti.UI.createOptionDialog(artifacts);
	scanArtifactDialog.show();
	scanArtifactDialog.addEventListener('click', function(event) {
		console.log('User selected artifact: ' + JSON.stringify(event.source.selectedIndex));
		if (OS_ANDROID) {
			var artiToast = Ti.UI.createNotification({
				message : "Please write down your own artifact type in the textfield.",
				duration : Ti.UI.NOTIFICATION_DURATION_SHORT
			});

			if (event.source.selectedIndex == 13) {
				Ti.UI.createNotification({
					message : "You canceled selecting an artifact type.",
					duration : Ti.UI.NOTIFICATION_DURATION_SHORT
				}).show();
			} else {
				if (event.source.selectedIndex == 12) {
					scanArtifactDialog.hide();
					$.artifactText.setValue("");
					artiToast.show();
					$.artifactText.value = " ";
					$.artifactText.editable = true;
					$.artifactText.focus();
				} else {
					$.artifactText.setValue(event.source.options[event.source.selectedIndex]);
					$.artifactText.blur();
					console.log("ArtifactType: " + $.artifactText.value);
				}
			}
			artiToast = null;
		}//if

		else {
			console.log('User selected artifact: ' + JSON.stringify(event));

			if (event.index === 12) {
				scanArtifactDialog.hide();
				$.artifactText.setValue("");
				alert('Please write down your own artifact type.');
				$.artifactText.hintText = " ";
				$.artifactText.editable = true;
				$.artifactText.color = 'black';
			} else if (event.index === event.cancel) {
				alert("Scan Type Request Canceled");
			} else {
				$.artifactText.setValue(event.source.options[event.index]);
				console.log("ArtifactType: " + $.artifactText.value);
				$.artifactText.color = 'black';
			}
		}
	});

}

function report(e) {
	// alert('You changed the date!');
	// Ti.API.info('User selected: ' + e.value);
}

function backButton(e) {
	$.scanWin.close();
}

function helpSubmit(e) {
	var args = {
		thisTitle : $.Title.text,
		thisDate : $.photoDate.text,
		thisItem : $.TitleLabel.text,
		thisFirstName : $.photoNameF.text,

		thisName : $.photoName.text,
		thisPerson : $.photoPeopleName.text,
		thisEvent : $.photoEventName.text,
		thisOrg : $.photoOrg.text,
		thisMake : $.photoMake.text,
		thisDepict : $.photoLocation.text,
		thisMeasure : $.photoMeasurements.text,
		thisNote : $.photoNotes.text,
		thisButtonID : e.source.id
	};

	alertController = Alloy.createController('helpNote', args).getView();
	alertController.open();
}

function hideSoftKeyboard(e) {
	if (Ti.Platform.osname === 'android') {
		Ti.UI.Android.hideSoftKeyboard();
	} else {
		// $.scanWin.textField.blur();
		$.artifactText.blur();
	}
}

/*
 case 1:
 var intent = Ti.Android.createIntent({
 action : Ti.Android.ACTION_GET_CONTENT,
 type : "application/pdf"
 });
 var activity = $.scanWin.getActivity();
 activity.startActivityForResult(intent, function(e) {
 if (e.resultCode == Ti.Android.RESULT_OK) {
 var Content = require("yy.ticontent");
 Ti.API.info("module is => " + intent.getUrl());
 //Ti.API.info('Here is the current sound path ' + JSON.stringify(e.intent) file:/);

 var currentItem = String(e.intent.data);
 if (currentItem.indexOf("file:///") === 0) {
 currentItem = 'file:' + currentItem.substring(6, currentItem.length);
 }
 Ti.API.info('Here is the current item ' +  JSON.stringify(currentItem));
 // var stringToSaveInDatabase = Ti.Utils.base64encode(currentItem.read()).toString();
 // Ti.API.info('These are the current BASE64:' + stringToSaveInDatabase);

 if(currentItem != null){
 var tmpFile = Ti.Filesystem.getFile(currentItem);
 Ti.API.info('Here is the current temp file ' +  JSON.stringify(tmpFile));

 var fileData = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory + tmpFile.name);
 Ti.API.info('Here is the current storage permissions ' +  JSON.stringify(fileData));

 tmpFile.copy(fileData.nativePath);
 scannedItem = JSON.stringify(fileData);
 }
 //Ti.API.info('Here is the current storage permissions ' + ' ' + scannedItem.nativePath + ' ' + scannedItem.size + ' ' + scannedItem.name);

 var stringToSaveInDatabase = Ti.Utils.base64encode(scannedItem).toString();
 Ti.API.info('These are the current BASE64:' + stringToSaveInDatabase);

 if (stringToSaveInDatabase) alert("An PDF has been selected from the gallery!");
 scannedItemMimeType = "application/pdf";
 }

 });
 break;
 */