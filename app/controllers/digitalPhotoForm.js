var args = arguments[0] || {};

//var parent = _parent;
//var parents = self;
var ImageFactory = require('ti.imagefactory');

// $.arti.value = "Today";
// $.TitleLabelTA.value = "This item";
// $.photoPlaceTA.value = "QPL";
// $.photoNameFTA.value = "Aniqa";
// $.photoNameTA.value = "Wahiddo";
// $.photoNotesTA.value = "notes";
Alloy.Globals.DigitalForm = $.photoWin;

var userImage;
var rawImage;
var digitalPhotoMimeType;
var pWidth = Ti.Platform.displayCaps.platformWidth;
//375 iPhone 7
var pHeight = Ti.Platform.displayCaps.platformHeight;
//667 iPhone 7

// var my_timer = Alloy.Globals.countDown(0, 4, function() {// while it counts down
// console.log(my_timer.time.m + " : " + my_timer.time.s);
// }, function() {
// toast.show();
// });

//                                 iPhone 4S (and earlier)	     iPhone 5	     iPhone 6 & 7	    iPhone 6 Plus & 7 Plus
//Window (including status bar area)	 320 x 480 pts	       320 x 568 pts	 375 x 667 pts	       414 x 736 pts

//Images
if (OS_IOS) {
	$.QL.image = 'QL300.png';
	$.qp.image = 'QM_FINAL_outlines.png';

	if (pWidth == '320') {
		console.log("iPhone 5 ya'll! ");

		$.dateAsterisk.left = '48%';
		$.locAsterisk.left = '55.5%';
		$.PTasterisk.left = '29%';
		$.NameAsterisk.left = '62.5%';
		$.PNasterisk.left = '62.5%';
		$.notesAsterisk.left = '38%';

	} else if (pHeight == '736') {
		console.log("iPhone 6S/7S ya'll! ");

		$.dateAsterisk.left = '40%';
		$.PTasterisk.left = '25%';
		$.locAsterisk.left = '45.5%';
		$.NameAsterisk.left = '51%';
		$.PNasterisk.left = '51%';
		$.notesAsterisk.left = '32%';

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

if (OS_ANDROID) {
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
}

var data = require('data');

function showOptions() {
	$.imgSrc.setEnabled(false);
	// Variables
	var opts = {
		title : 'Select'
	};

	opts.options = ['Camera', 'Photo Gallery', 'Cancel'];
	opts.buttonNames = ['Help'];
	opts.cancel = 2;

	var scanOptionDialog = Ti.UI.createOptionDialog(opts);

	//scanOptionDialog.hiddenBehavior = Titanium.UI.HIDDEN_BEHAVIOR_GONE; Why I put dis?
	scanOptionDialog.show();

	scanOptionDialog.addEventListener('click', function(event) {
		if (event.index == 0) {
			Titanium.API.info('Camera');
			Titanium.Media.showCamera({
				success : function(event) {
					// called when media returned from the camera
					Ti.API.debug('Our type was: ' + event.mediaType);
					Ti.API.debug('Media is: ' + event);
					Ti.API.debug('Media is: ' + JSON.stringify(event));

					if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
						if (OS_IOS) {
							var imageView = Ti.UI.createImageView({
								image : event.media,
							});

							userImage = imageView.toBlob();
							digitalPhotoMimeType = userImage.mimeType;

							imageView = null;
							imgFile = null;
							$.imgSrc.setTitle("Change Image");
							alert("File added. Load times vary based on connection speed.");
						} else {
							try {
								var imageCorrection = Alloy.Globals.rotateAndResize(event.media, event.media.width, 100);
								userImage = imageCorrection.read();
								digitalPhotoMimeType = userImage.mimeType;
								$.imgSrc.setTitle("Change Image");
								alert("An image has been captured!");
							} catch(e) {
								alert('Unexpected error: ' + e.code);
							}
						}
					} else {
						alert("got the wrong type back =" + event.mediaType);
					}
				},
				cancel : function() {
					// called when user cancels taking a picture
					if (OS_ANDROID) {
						// called when user cancels taking a picture
						Ti.UI.createNotification({
							message : "Abort adding in picture from gallery",
							duration : Ti.UI.NOTIFICATION_DURATION_SHORT
						}).show();
					} else {
						alert("Abort adding in picture from gallery.");
					}
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
						return;
					}
					a.show();
				},
				saveToPhotoGallery : false,
				// allowEditing and mediaTypes are iOS-only settings
				// allowEditing:true,
				mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
			});

		} else if (event.index == 1) {
			Ti.Media.openPhotoGallery({
				success : function(event) {
					//my_timer.start();
					// called when media returned from the camera
					if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
						userImage = null;
						try {
							if (OS_ANDROID) {
								var imageCorrection = Alloy.Globals.rotateAndResize(event.media, event.media.width, 100);

								if (imageCorrection) {
									Ti.API.info('Corrected Blob Issue: ' + imageCorrection.read() + " " + imageCorrection.read().mimeType);
								}

								var imageBlob = imageCorrection.read();

								Ti.API.debug('Our api name was: ' + event.mediaType);
								Ti.API.debug('image url: ' + imageBlob.mimeType);
								Ti.API.debug('image height: ' + imageBlob.height);
								Ti.API.debug('image width: ' + imageBlob.width);
								Ti.API.debug('image file: ' + imageBlob.file);

								if (event.media.mimeType === "image/jpeg") {
									Ti.API.info("jpeg: " + event.media);

									// var imgfile = ImageFactory.imageAsResized(event.media, {
									// width : event.media.width,
									// height : event.media.height,
									// });

									// userImage = Ti.UI.createImageView({
									// image : imgfile,
									// }).toBlob();
									userImage = imageBlob;
									var isEncoded = Alloy.Globals.base64Check(userImage);
									digitalPhotoMimeType = userImage.mimeType;

									$.imgSrc.setTitle("Change Image");
									alert("File added. Load times vary based on connection speed.");
								} else {

									userImage = imageBlob;
									digitalPhotoMimeType = userImage.mimeType;

									$.imgSrc.setTitle("Change Image");
									alert("File added. Load times vary based on connection speed.!");
								}
							}// end Android imaging
							else {

								Ti.API.debug('Our api name was: ' + event.media);

								var imageView = Ti.UI.createImageView({
									image : event.media,
									width : Ti.UI.SIZE,
									height : Ti.UI.SIZE
								});

								userImage = imageView.toBlob();
								digitalPhotoMimeType = userImage.mimeType;

								imageView = null;
								imgFile = null;
								$.imgSrc.setTitle("Change Image");
								alert("File added. Load times vary based on connection speed.");
							}

						} catch(e) {
							alert('Unexpected error: ' + JSON.stringify(e));
							return;
						}
					} else {
						alert("You selected an invalid file. Please try a different photo." + event.mediaType);
					}
				},

				cancel : function() {
					// called when user cancels taking a picture
					if (OS_ANDROID) {
						// called when user cancels taking a picture
						Ti.UI.createNotification({
							message : "Abort adding in picture from gallery",
							duration : Ti.UI.NOTIFICATION_DURATION_SHORT
						}).show();
					} else {
						alert("Abort adding in picture from gallery.");
					}
				},
				error : function(error) {
					// called when there's an error
					var a = Titanium.UI.createAlertDialog({
						title : 'Photo Gallery'
					});
					if (error.code == Titanium.Media.NO_CAMERA) {
						a.setMessage('Please run this test on device');
					} else {
						a.setMessage('Unexpected error: ' + error.code);
					}
					a.show();
				},

				saveToPhotoGallery : false,
				mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO
			});
		} else {
			// called when user cancels taking a picture
			if (OS_ANDROID) {
				// called when user cancels taking a picture
				Ti.UI.createNotification({
					message : "Abort adding in picture from gallery",
					duration : Ti.UI.NOTIFICATION_DURATION_SHORT
				}).show();
			} else {
				alert("Abort adding in picture from gallery.");
			}
		}

	});

	scanOptionDialog = null;
	$.imgSrc.setEnabled(true);

}

function submit(e) {

	if ($.arti.value === "" || $.TitleLabelTA.value === "" || $.photoPlaceTA.value === "" || $.photoNameTA.value === "" || $.photoNameFTA.value === "" || $.photoNotesTA.value === "") {
		alert('You must fill out all the required fields to submit!');

	} else {
		if (!userImage) {
			alert('You need to select an image to submit!');
		} else {

			var fullName;
			var Name = $.photoNameTA.value.split(" ");
			if (Name[0] != " " || Name[1] != " ") {
				fullName = $.photoNameTA.value.split(" ");
			} else {
				fullName = $.photoNameTA.value;
			}

			if (OS_ANDROID) {
				var fileExt = userImage.file.name;
				fileExt = "." + fileExt.substr(fileExt.lastIndexOf('.') + 1);
				Ti.API.info("File Extension " + fileExt);
			} else {
				fileExt = "";
			}

			var currentData = {
				userPhoto : userImage,
				submitType : "Upload Image",
				resourceType : "Digital Photograph",
				photoStepNumber : 3,
				photoFirstName : $.photoNameFTA.value,
				photoLastName : $.photoNameTA.value,

				photoLanguage : "EN",
				photoPlace : $.photoPlaceTA.value,
				photoRights : "I have the permission of the rights owner to make this resource available through this repository.", // right
				photoEventName : $.photoEventNameTA.value,
				photoMemberType : "No Membership",

				photoPeopleNames : $.photoPeopleNameTA.value,
				photoOrg : $.photoOrgTA.value,
				photoModel : $.photoMakeTA.value,
				photoNotes : $.photoNotesTA.value,
				photoTitle : $.TitleLabelTA.value,
				photoDate : $.arti.value,
				mimeType : digitalPhotoMimeType,
				fileExtension : fileExt
			};

			data.setData(currentData);

			var args = {
				customDate : $.arti.value,
				customImage : currentData['userPhoto'],
				photoFullName : fullName,
				thisTitle : $.Title.text,
				photoDate : $.arti.value,
				photoFirstName : $.photoNameFTA.value,
				photoLastName : $.photoNameTA.value,
				photoPlace : $.photoPlaceTA.value,
				photoEventName : $.photoEventNameTA.value,
				photoPeopleNames : $.photoPeopleNameTA.value,
				photoOrg : $.photoOrgTA.value,
				photoModel : $.photoMakeTA.value,
				photoNotes : $.photoNotesTA.value,
				photoTitle : $.TitleLabelTA.value,
			};

			submissionPageController = Alloy.createController('submissionPage', args).getView();
			submissionPageController.open();

			submissionPageController = null;
		}

	}

}//submit

function helpSubmit(e) {

	console.log("Args: " + JSON.stringify(e));

	var args = {
		thisTitle : $.Title.text,
		thisDate : $.photoDateLabel.text,
		thisItem : $.TitleLabel.text,
		thisPlace : $.photoPlace.text,
		thisFirstName : $.photoNameF.text,
		thisName : $.photoName.text,
		thisPerson : $.photoPeopleName.text,
		thisEvent : $.photoEventName.text,
		thisOrg : $.photoOrg.text,
		thisMake : $.photoMake.text,
		thisNote : $.photoNotes.text,
		thisButtonID : e.source.id
	};

	console.log("In digi, helpsubmit: " + args.thisTitle);
	console.log('View ARG helpSubmit:' + JSON.stringify(args));

	alertController = Alloy.createController('helpNote', args).getView();
	alertController.open();
}

function backButton(e) {
	$.photoWin.close();
}

/*
 */