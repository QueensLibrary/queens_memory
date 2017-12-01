var Alloy = require('/alloy'),
    Backbone = Alloy.Backbone,
    _ = Alloy._;

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
    delete obj[key];
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'digitalPhotoForm';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.photoWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], height: Titanium.UI.FILL, width: Titanium.UI.FILL, title: "Digital Photograph", backgroundColor: "#f2f2f2", id: "photoWin", theme: "mytheme" });
  $.__views.photoWin && $.addTopLevelView($.__views.photoWin);
  $.__views.navBar = Ti.UI.createView({ backgroundColor: "black", top: "0%", width: "100%", height: "8%", font: { fontSize: 14 }, zIndex: 0, id: "navBar" });
  $.__views.photoWin.add($.__views.navBar);
  $.__views.back = Ti.UI.createButton({ font: { fontFamily: "queensfoundationfont", fontSize: 36 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, left: "5%", color: "white", backgroundColor: "transparent", borderColor: "transparent", top: "8%", title: 'T', id: "back" });
  $.__views.navBar.add($.__views.back);
  backButton ? $.addListener($.__views.back, 'click', backButton) : __defers['$.__views.back!click!backButton'] = true;$.__views.QL = Ti.UI.createImageView({ width: "34%", top: "26%", id: "QL", image: "QL300.png" });
  $.__views.navBar.add($.__views.QL);
  $.__views.titleBan = Ti.UI.createView({ backgroundColor: "white", top: "7%", height: "11%", font: { fontSize: 12 }, id: "titleBan" });
  $.__views.photoWin.add($.__views.titleBan);
  $.__views.qp = Ti.UI.createImageView({ top: "12%", width: "30%", left: "7%", id: "qp", image: "QM_FINAL_outlines.png" });
  $.__views.titleBan.add($.__views.qp);
  $.__views.Title = Ti.UI.createLabel({ font: { fontSize: 18, fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "bold" }, textAlign: "Titanium.UI.TEXT_ALIGNMENT_RIGHT", top: "35%", right: "5%", text: 'Digital Photo', id: "Title" });
  $.__views.titleBan.add($.__views.Title);
  $.__views.__alloyId71 = Ti.UI.createScrollView({ top: "17%", backgroundColor: "#e6e6e6", showHorizontalScrollIndicator: "false", showVerticalScrollIndicator: "true", width: Titanium.UI.FILL, bottom: "0%", contentHeight: Titanium.UI.SIZE, contentWidth: Titanium.UI.FILL, layout: "vertical", disableBounce: "true", id: "__alloyId71" });
  $.__views.photoWin.add($.__views.__alloyId71);
  $.__views.pickerView = Ti.UI.createView({ top: "0%", left: "0%", backgroundColor: "transparent", height: "55%", width: "100%", id: "pickerView" });
  $.__views.__alloyId71.add($.__views.pickerView);
  $.__views.provideInfoLabel = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "", fontStyle: "", fontWeight: "" }, top: "10%", left: "5%", right: "5%", textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, text: 'Please provide the following information about your photo.', id: "provideInfoLabel" });
  $.__views.pickerView.add($.__views.provideInfoLabel);
  $.__views.photoDateLabel = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "30%", left: "5%", text: 'Date photo was taken:', id: "photoDateLabel" });
  $.__views.pickerView.add($.__views.photoDateLabel);
  $.__views.PDhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "36%", title: 'b', id: "PDhelpButton" });
  $.__views.pickerView.add($.__views.PDhelpButton);
  helpSubmit ? $.addListener($.__views.PDhelpButton, 'click', helpSubmit) : __defers['$.__views.PDhelpButton!click!helpSubmit'] = true;$.__views.arti = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "38%", height: "9.5%", id: "arti" });
  $.__views.pickerView.add($.__views.arti);
  $.__views.dateAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "43.5%", top: "28%", text: '*', id: "dateAsterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.dateAsterisk);
  $.__views.TitleLabel = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "54%", left: "5%", text: 'Title of item:', id: "TitleLabel" });
  $.__views.pickerView.add($.__views.TitleLabel);
  $.__views.PThelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "58%", title: 'b', id: "PThelpButton" });
  $.__views.pickerView.add($.__views.PThelpButton);
  helpSubmit ? $.addListener($.__views.PThelpButton, 'click', helpSubmit) : __defers['$.__views.PThelpButton!click!helpSubmit'] = true;$.__views.TitleLabelTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "60%", height: "9.5%", id: "TitleLabelTA" });
  $.__views.pickerView.add($.__views.TitleLabelTA);
  $.__views.PTasterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { top: "52%", left: "27%", text: '*', id: "PTasterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.PTasterisk);
  $.__views.photoPlace = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "79%", left: "5%", text: 'Location photo was taken:', id: "photoPlace" });
  $.__views.pickerView.add($.__views.photoPlace);
  $.__views.PPhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "83%", title: 'b', id: "PPhelpButton" });
  $.__views.pickerView.add($.__views.PPhelpButton);
  helpSubmit ? $.addListener($.__views.PPhelpButton, 'click', helpSubmit) : __defers['$.__views.PPhelpButton!click!helpSubmit'] = true;$.__views.photoPlaceTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "85%", height: "9.5%", id: "photoPlaceTA" });
  $.__views.pickerView.add($.__views.photoPlaceTA);
  $.__views.locAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "50%", top: "77%", text: '*', id: "locAsterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.locAsterisk);
  var __alloyId73 = [];__alloyId73.push("Camera");if (true) {
    __alloyId73.push("Photo Gallery");
  }
  if (true) {
    __alloyId73.push("Help");
  }
  __alloyId73.push("Cancel");$.__views.dialog = Ti.UI.createOptionDialog({ options: __alloyId73, cancel: 3, id: "dialog" });
  $.__views.photoView2 = Ti.UI.createView({ backgroundColor: "transparent", height: "75%", id: "photoView2" });
  $.__views.__alloyId71.add($.__views.photoView2);
  $.__views.photoNameF = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "2%", left: "5%", text: 'Name of Photographer [First]:', id: "photoNameF" });
  $.__views.photoView2.add($.__views.photoNameF);
  $.__views.photoNameFTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "6%", height: "7%", id: "photoNameFTA" });
  $.__views.photoView2.add($.__views.photoNameFTA);
  $.__views.NameAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "55.5%", top: "0%", text: '*', id: "NameAsterisk" });
    return o;
  }());
  $.__views.photoView2.add($.__views.NameAsterisk);
  $.__views.photoName = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "18%", left: "5%", text: 'Name of Photographer [Last]:', id: "photoName" });
  $.__views.photoView2.add($.__views.photoName);
  $.__views.PNasterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { top: "16%", left: "55%", text: '*', id: "PNasterisk" });
    return o;
  }());
  $.__views.photoView2.add($.__views.PNasterisk);
  $.__views.photoNameTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "22%", height: "7%", id: "photoNameTA" });
  $.__views.photoView2.add($.__views.photoNameTA);
  $.__views.photoPeopleName = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "34%", left: "5%", text: 'Name(s) of person/people in the photo:', id: "photoPeopleName" });
  $.__views.photoView2.add($.__views.photoPeopleName);
  $.__views.PPNhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "36%", title: 'b', id: "PPNhelpButton" });
  $.__views.photoView2.add($.__views.PPNhelpButton);
  helpSubmit ? $.addListener($.__views.PPNhelpButton, 'click', helpSubmit) : __defers['$.__views.PPNhelpButton!click!helpSubmit'] = true;$.__views.photoPeopleNameTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "38%", height: "7%", id: "photoPeopleNameTA" });
  $.__views.photoView2.add($.__views.photoPeopleNameTA);
  $.__views.photoEventName = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "51%", left: "5%", text: 'Name(s) of event taking place in photo:', id: "photoEventName" });
  $.__views.photoView2.add($.__views.photoEventName);
  $.__views.PENhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "53%", title: 'b', id: "PENhelpButton" });
  $.__views.photoView2.add($.__views.PENhelpButton);
  helpSubmit ? $.addListener($.__views.PENhelpButton, 'click', helpSubmit) : __defers['$.__views.PENhelpButton!click!helpSubmit'] = true;$.__views.photoEventNameTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "55%", height: "7%", id: "photoEventNameTA" });
  $.__views.photoView2.add($.__views.photoEventNameTA);
  $.__views.photoOrg = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "67%", left: "5%", text: 'Organizations represented in the photo:', id: "photoOrg" });
  $.__views.photoView2.add($.__views.photoOrg);
  $.__views.POhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "69%", title: 'b', id: "POhelpButton" });
  $.__views.photoView2.add($.__views.POhelpButton);
  helpSubmit ? $.addListener($.__views.POhelpButton, 'click', helpSubmit) : __defers['$.__views.POhelpButton!click!helpSubmit'] = true;$.__views.photoOrgTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "71%", height: "7%", id: "photoOrgTA" });
  $.__views.photoView2.add($.__views.photoOrgTA);
  $.__views.photoMake = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "82%", left: "5%", text: 'Make or model of camera and software used:', id: "photoMake" });
  $.__views.photoView2.add($.__views.photoMake);
  $.__views.PMhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "84%", title: 'b', id: "PMhelpButton" });
  $.__views.photoView2.add($.__views.PMhelpButton);
  helpSubmit ? $.addListener($.__views.PMhelpButton, 'click', helpSubmit) : __defers['$.__views.PMhelpButton!click!helpSubmit'] = true;$.__views.photoMakeTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "gray", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "86%", height: "7%", id: "photoMakeTA" });
  $.__views.photoView2.add($.__views.photoMakeTA);
  $.__views.photoView3 = Ti.UI.createView({ backgroundColor: "transparent", height: "50%", id: "photoView3" });
  $.__views.__alloyId71.add($.__views.photoView3);
  $.__views.photoNotes = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, top: "2%", left: "5%", text: 'Additional Notes:', id: "photoNotes" });
  $.__views.photoView3.add($.__views.photoNotes);
  $.__views.PNohelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, zIndex: 1, right: "5%", color: "black", top: "6%", title: 'b', id: "PNohelpButton" });
  $.__views.photoView3.add($.__views.PNohelpButton);
  helpSubmit ? $.addListener($.__views.PNohelpButton, 'click', helpSubmit) : __defers['$.__views.PNohelpButton!click!helpSubmit'] = true;$.__views.photoNotesTA = Ti.UI.createTextArea({ color: "black", borderColor: "gray", borderRadius: "5", left: "5%", width: "90%", height: "30%", backgroundColor: "white", font: { fontFamily: "Montserrat-Regular" }, top: "8%", id: "photoNotesTA" });
  $.__views.photoView3.add($.__views.photoNotesTA);
  $.__views.notesAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "36%", top: "0%", text: '*', id: "notesAsterisk" });
    return o;
  }());
  $.__views.photoView3.add($.__views.notesAsterisk);
  $.__views.imgSrc = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, top: "50%", width: "70%", backgroundColor: "#f2f2f2", borderColor: "gray", borderRadius: 5, color: "black", height: "13%", title: 'CLICK TO ADD PHOTOGRAPH', id: "imgSrc" });
  $.__views.photoView3.add($.__views.imgSrc);
  showOptions ? $.addListener($.__views.imgSrc, 'click', showOptions) : __defers['$.__views.imgSrc!click!showOptions'] = true;$.__views.next = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, top: "65%", width: "40%", backgroundColor: "#f2f2f2", borderColor: "gray", color: "black", borderRadius: 5, height: "13%", title: 'Next', id: "next" });
  $.__views.photoView3.add($.__views.next);
  submit ? $.addListener($.__views.next, 'click', submit) : __defers['$.__views.next!click!submit'] = true;exports.destroy = function () {};

  _.extend($, $.__views);

  var args = arguments[0] || {};

  var ImageFactory = require('ti.imagefactory');

  Alloy.Globals.DigitalForm = $.photoWin;

  var userImage;
  var rawImage;
  var digitalPhotoMimeType;
  var pWidth = Ti.Platform.displayCaps.platformWidth;

  var pHeight = Ti.Platform.displayCaps.platformHeight;

  if (true) {
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
  } else if (false) {
    $.QL.image = '/images/QL300.png';
    $.qp.image = '/images/QM_FINAL_outlines.png';

    var toast = Ti.UI.createNotification({
      message: "Please Stand By",
      duration: Ti.UI.NOTIFICATION_DURATION_LONG
    });
  }

  if (false) {
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
      Ti.Android.requestPermissions(permissionsToRequest, function (e) {
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

    var opts = {
      title: 'Select'
    };

    opts.options = ['Camera', 'Photo Gallery', 'Cancel'];
    opts.buttonNames = ['Help'];
    opts.cancel = 2;

    var scanOptionDialog = Ti.UI.createOptionDialog(opts);

    scanOptionDialog.show();

    scanOptionDialog.addEventListener('click', function (event) {
      if (event.index == 0) {
        Titanium.API.info('Camera');
        Titanium.Media.showCamera({
          success: function (event) {
            Ti.API.debug('Our type was: ' + event.mediaType);
            Ti.API.debug('Media is: ' + event);
            Ti.API.debug('Media is: ' + JSON.stringify(event));

            if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
              if (true) {
                var imageView = Ti.UI.createImageView({
                  image: event.media
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
                } catch (e) {
                  alert('Unexpected error: ' + e.code);
                }
              }
            } else {
              alert("got the wrong type back =" + event.mediaType);
            }
          },
          cancel: function () {
            if (false) {
              Ti.UI.createNotification({
                message: "Abort adding in picture from gallery",
                duration: Ti.UI.NOTIFICATION_DURATION_SHORT
              }).show();
            } else {
              alert("Abort adding in picture from gallery.");
            }
          },
          error: function (error) {
            var a = Titanium.UI.createAlertDialog({
              title: 'Camera'
            });
            if (error.code == Titanium.Media.NO_CAMERA) {
              a.setMessage('Please run this test on device');
            } else {
              a.setMessage('Unexpected error: ' + error.code);
              return;
            }
            a.show();
          },
          saveToPhotoGallery: false,

          mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
        });
      } else if (event.index == 1) {
        Ti.Media.openPhotoGallery({
          success: function (event) {
            if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
              userImage = null;
              try {
                if (false) {
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
                } else {

                    Ti.API.debug('Our api name was: ' + event.media);

                    var imageView = Ti.UI.createImageView({
                      image: event.media,
                      width: Ti.UI.SIZE,
                      height: Ti.UI.SIZE
                    });

                    userImage = imageView.toBlob();
                    digitalPhotoMimeType = userImage.mimeType;

                    imageView = null;
                    imgFile = null;
                    $.imgSrc.setTitle("Change Image");
                    alert("File added. Load times vary based on connection speed.");
                  }
              } catch (e) {
                alert('Unexpected error: ' + JSON.stringify(e));
                return;
              }
            } else {
              alert("You selected an invalid file. Please try a different photo." + event.mediaType);
            }
          },

          cancel: function () {
            if (false) {
              Ti.UI.createNotification({
                message: "Abort adding in picture from gallery",
                duration: Ti.UI.NOTIFICATION_DURATION_SHORT
              }).show();
            } else {
              alert("Abort adding in picture from gallery.");
            }
          },
          error: function (error) {
            var a = Titanium.UI.createAlertDialog({
              title: 'Photo Gallery'
            });
            if (error.code == Titanium.Media.NO_CAMERA) {
              a.setMessage('Please run this test on device');
            } else {
              a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
          },

          saveToPhotoGallery: false,
          mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO
        });
      } else {
        if (false) {
          Ti.UI.createNotification({
            message: "Abort adding in picture from gallery",
            duration: Ti.UI.NOTIFICATION_DURATION_SHORT
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

        if (false) {
          var fileExt = userImage.file.name;
          fileExt = "." + fileExt.substr(fileExt.lastIndexOf('.') + 1);
          Ti.API.info("File Extension " + fileExt);
        } else {
          fileExt = "";
        }

        var currentData = {
          userPhoto: userImage,
          submitType: "Upload Image",
          resourceType: "Digital Photograph",
          photoStepNumber: 3,
          photoFirstName: $.photoNameFTA.value,
          photoLastName: $.photoNameTA.value,

          photoLanguage: "EN",
          photoPlace: $.photoPlaceTA.value,
          photoRights: "I have the permission of the rights owner to make this resource available through this repository.",
          photoEventName: $.photoEventNameTA.value,
          photoMemberType: "No Membership",

          photoPeopleNames: $.photoPeopleNameTA.value,
          photoOrg: $.photoOrgTA.value,
          photoModel: $.photoMakeTA.value,
          photoNotes: $.photoNotesTA.value,
          photoTitle: $.TitleLabelTA.value,
          photoDate: $.arti.value,
          mimeType: digitalPhotoMimeType,
          fileExtension: fileExt
        };

        data.setData(currentData);

        var args = {
          customDate: $.arti.value,
          customImage: currentData['userPhoto'],
          photoFullName: fullName,
          thisTitle: $.Title.text,
          photoDate: $.arti.value,
          photoFirstName: $.photoNameFTA.value,
          photoLastName: $.photoNameTA.value,
          photoPlace: $.photoPlaceTA.value,
          photoEventName: $.photoEventNameTA.value,
          photoPeopleNames: $.photoPeopleNameTA.value,
          photoOrg: $.photoOrgTA.value,
          photoModel: $.photoMakeTA.value,
          photoNotes: $.photoNotesTA.value,
          photoTitle: $.TitleLabelTA.value
        };

        submissionPageController = Alloy.createController('submissionPage', args).getView();
        submissionPageController.open();

        submissionPageController = null;
      }
    }
  }

  function helpSubmit(e) {

    console.log("Args: " + JSON.stringify(e));

    var args = {
      thisTitle: $.Title.text,
      thisDate: $.photoDateLabel.text,
      thisItem: $.TitleLabel.text,
      thisPlace: $.photoPlace.text,
      thisFirstName: $.photoNameF.text,
      thisName: $.photoName.text,
      thisPerson: $.photoPeopleName.text,
      thisEvent: $.photoEventName.text,
      thisOrg: $.photoOrg.text,
      thisMake: $.photoMake.text,
      thisNote: $.photoNotes.text,
      thisButtonID: e.source.id
    };

    console.log("In digi, helpsubmit: " + args.thisTitle);
    console.log('View ARG helpSubmit:' + JSON.stringify(args));

    alertController = Alloy.createController('helpNote', args).getView();
    alertController.open();
  }

  function backButton(e) {
    $.photoWin.close();
  }

  __defers['$.__views.back!click!backButton'] && $.addListener($.__views.back, 'click', backButton);__defers['$.__views.PDhelpButton!click!helpSubmit'] && $.addListener($.__views.PDhelpButton, 'click', helpSubmit);__defers['$.__views.PThelpButton!click!helpSubmit'] && $.addListener($.__views.PThelpButton, 'click', helpSubmit);__defers['$.__views.PPhelpButton!click!helpSubmit'] && $.addListener($.__views.PPhelpButton, 'click', helpSubmit);__defers['$.__views.PPNhelpButton!click!helpSubmit'] && $.addListener($.__views.PPNhelpButton, 'click', helpSubmit);__defers['$.__views.PENhelpButton!click!helpSubmit'] && $.addListener($.__views.PENhelpButton, 'click', helpSubmit);__defers['$.__views.POhelpButton!click!helpSubmit'] && $.addListener($.__views.POhelpButton, 'click', helpSubmit);__defers['$.__views.PMhelpButton!click!helpSubmit'] && $.addListener($.__views.PMhelpButton, 'click', helpSubmit);__defers['$.__views.PNohelpButton!click!helpSubmit'] && $.addListener($.__views.PNohelpButton, 'click', helpSubmit);__defers['$.__views.imgSrc!click!showOptions'] && $.addListener($.__views.imgSrc, 'click', showOptions);__defers['$.__views.next!click!submit'] && $.addListener($.__views.next, 'click', submit);

  _.extend($, exports);
}

module.exports = Controller;