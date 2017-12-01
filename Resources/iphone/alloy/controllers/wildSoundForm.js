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
  this.__controllerPath = 'wildSoundForm';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.wildSoundWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], backgroundColor: "#000000", id: "wildSoundWin", theme: "mytheme" });
  $.__views.wildSoundWin && $.addTopLevelView($.__views.wildSoundWin);
  $.__views.navBar = Ti.UI.createView({ backgroundColor: "black", top: "0%", width: "100%", height: "8%", font: { fontSize: 14 }, zIndex: 0, id: "navBar" });
  $.__views.wildSoundWin.add($.__views.navBar);
  $.__views.back = Ti.UI.createButton({ font: { fontFamily: "queensfoundationfont", fontSize: 36 }, left: "5%", color: "white", backgroundColor: "transparent", borderColor: "transparent", top: "8%", title: 'T', id: "back" });
  $.__views.navBar.add($.__views.back);
  backButton ? $.addListener($.__views.back, 'click', backButton) : __defers['$.__views.back!click!backButton'] = true;$.__views.QL = Ti.UI.createImageView(function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: "34%", top: "26%" });
    if (Alloy.isTablet) Alloy.deepExtend(true, o, { top: "25.00%", left: "40%" });
    Alloy.deepExtend(true, o, { id: "QL" });
    return o;
  }());
  $.__views.navBar.add($.__views.QL);
  $.__views.titleBan = Ti.UI.createView({ backgroundColor: "white", top: "7%", height: "20%", font: { fontSize: 12 }, id: "titleBan" });
  $.__views.wildSoundWin.add($.__views.titleBan);
  $.__views.qp = Ti.UI.createImageView({ top: "8%", width: "30%", left: "7%", id: "qp" });
  $.__views.titleBan.add($.__views.qp);
  $.__views.Title = Ti.UI.createLabel({ font: { fontSize: 18, fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "bold" }, color: "black", top: "15%", right: "5%", text: 'Wild Sound', id: "Title" });
  $.__views.titleBan.add($.__views.Title);
  $.__views.scrollView = Ti.UI.createScrollView({ top: "17%", backgroundColor: "#e6e6e6", showHorizontalScrollIndicator: "false", showVerticalScrollIndicator: "true", width: Titanium.UI.FILL, bottom: "0%", contentHeight: Titanium.UI.SIZE, contentWidth: Titanium.UI.FILL, layout: "vertical", disableBounce: "true", id: "scrollView" });
  $.__views.wildSoundWin.add($.__views.scrollView);
  $.__views.pickerView = Ti.UI.createView({ top: "0%", left: "0%", backgroundColor: "transparent", height: "55%", width: "100%", id: "pickerView" });
  $.__views.scrollView.add($.__views.pickerView);
  $.__views.provideInfo = Ti.UI.createLabel({ font: { fontSize: "10", fontFamily: "", fontStyle: "", fontWeight: "" }, color: "black", top: "11%", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, wordWrap: "true", text: 'Please provide the following information about your sound.', id: "provideInfo" });
  $.__views.pickerView.add($.__views.provideInfo);
  $.__views.dateTextArea = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "38%", height: "11%", id: "dateTextArea" });
  $.__views.pickerView.add($.__views.dateTextArea);
  $.__views.soundDate = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", left: "5%", top: "30%", text: 'Date sound recorded:', id: "soundDate" });
  $.__views.pickerView.add($.__views.soundDate);
  $.__views.PDhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "40%", title: 'b', id: "PDhelpButton" });
  $.__views.pickerView.add($.__views.PDhelpButton);
  helpSubmit ? $.addListener($.__views.PDhelpButton, 'click', helpSubmit) : __defers['$.__views.PDhelpButton!click!helpSubmit'] = true;$.__views.dateAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "42%", top: "28%", text: '*', id: "dateAsterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.dateAsterisk);
  $.__views.photoDate = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "54%", left: "5%", text: 'Location of recording:', id: "photoDate" });
  $.__views.pickerView.add($.__views.photoDate);
  $.__views.locAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "42.5%", top: "52%", text: '*', id: "locAsterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.locAsterisk);
  $.__views.PDDhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "62%", title: 'b', id: "PDDhelpButton" });
  $.__views.pickerView.add($.__views.PDDhelpButton);
  helpSubmit ? $.addListener($.__views.PDDhelpButton, 'click', helpSubmit) : __defers['$.__views.PDDhelpButton!click!helpSubmit'] = true;$.__views.arti = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "60%", height: "11%", id: "arti" });
  $.__views.pickerView.add($.__views.arti);
  $.__views.TitleLabel = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "79%", left: "5%", text: 'Title of recording:', id: "TitleLabel" });
  $.__views.pickerView.add($.__views.TitleLabel);
  $.__views.TitleLabelTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "85%", height: "11%", id: "TitleLabelTA" });
  $.__views.pickerView.add($.__views.TitleLabelTA);
  $.__views.PThelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "87%", title: 'b', id: "PThelpButton" });
  $.__views.pickerView.add($.__views.PThelpButton);
  helpSubmit ? $.addListener($.__views.PThelpButton, 'click', helpSubmit) : __defers['$.__views.PThelpButton!click!helpSubmit'] = true;$.__views.PTasterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { top: "76.5%", left: "36%", text: '*', id: "PTasterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.PTasterisk);
  $.__views.soundView = Ti.UI.createView({ left: "0%", width: "100%", height: "100%", backgroundColor: "transparent", id: "soundView" });
  $.__views.scrollView.add($.__views.soundView);
  $.__views.soundName = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "1%", left: "5%", text: 'Name of recordist [First]:', id: "soundName" });
  $.__views.soundView.add($.__views.soundName);
  $.__views.soundNameTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "4%", height: "6%", id: "soundNameTA" });
  $.__views.soundView.add($.__views.soundNameTA);
  $.__views.soundNameAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "47%", top: "0%", text: '*', id: "soundNameAsterisk" });
    return o;
  }());
  $.__views.soundView.add($.__views.soundNameAsterisk);
  $.__views.soundNameL = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "12%", left: "5%", text: 'Name of recordist [Last]:', id: "soundNameL" });
  $.__views.soundView.add($.__views.soundNameL);
  $.__views.soundNameLTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "15%", height: "6%", id: "soundNameLTA" });
  $.__views.soundView.add($.__views.soundNameLTA);
  $.__views.soundNameLAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "47%", top: "10%", text: '*', id: "soundNameLAsterisk" });
    return o;
  }());
  $.__views.soundView.add($.__views.soundNameLAsterisk);
  $.__views.soundEvent = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "24%", left: "5%", text: 'Name of event taking place in the recording:', id: "soundEvent" });
  $.__views.soundView.add($.__views.soundEvent);
  $.__views.soundEventTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "27%", height: "6%", id: "soundEventTA" });
  $.__views.soundView.add($.__views.soundEventTA);
  $.__views.PESNhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "27%", title: 'b', id: "PESNhelpButton" });
  $.__views.soundView.add($.__views.PESNhelpButton);
  helpSubmit ? $.addListener($.__views.PESNhelpButton, 'click', helpSubmit) : __defers['$.__views.PESNhelpButton!click!helpSubmit'] = true;$.__views.soundPeople = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "36%", left: "5%", text: 'People in the recording:', id: "soundPeople" });
  $.__views.soundView.add($.__views.soundPeople);
  $.__views.PPehelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "39%", title: 'b', id: "PPehelpButton" });
  $.__views.soundView.add($.__views.PPehelpButton);
  helpSubmit ? $.addListener($.__views.PPehelpButton, 'click', helpSubmit) : __defers['$.__views.PPehelpButton!click!helpSubmit'] = true;$.__views.soundPeopleTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "39%", height: "6%", id: "soundPeopleTA" });
  $.__views.soundView.add($.__views.soundPeopleTA);
  $.__views.soundOrg = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "48%", left: "5%", text: 'Organizations associated with the recording:', id: "soundOrg" });
  $.__views.soundView.add($.__views.soundOrg);
  $.__views.soundOrgTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "51%", height: "6%", id: "soundOrgTA" });
  $.__views.soundView.add($.__views.soundOrgTA);
  $.__views.POhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "51%", title: 'b', id: "POhelpButton" });
  $.__views.soundView.add($.__views.POhelpButton);
  helpSubmit ? $.addListener($.__views.POhelpButton, 'click', helpSubmit) : __defers['$.__views.POhelpButton!click!helpSubmit'] = true;$.__views.soundMake = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "60%", left: "5%", text: 'Make or model of recorder used:', id: "soundMake" });
  $.__views.soundView.add($.__views.soundMake);
  $.__views.soundMakeTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "63%", height: "6%", id: "soundMakeTA" });
  $.__views.soundView.add($.__views.soundMakeTA);
  $.__views.PMhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "62%", title: 'b', id: "PMhelpButton" });
  $.__views.soundView.add($.__views.PMhelpButton);
  helpSubmit ? $.addListener($.__views.PMhelpButton, 'click', helpSubmit) : __defers['$.__views.PMhelpButton!click!helpSubmit'] = true;$.__views.soundNotes = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "72%", left: "5%", text: 'Additional Notes:', id: "soundNotes" });
  $.__views.soundView.add($.__views.soundNotes);
  $.__views.notesAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "36%", top: "70.7%", text: '*', id: "notesAsterisk" });
    return o;
  }());
  $.__views.soundView.add($.__views.notesAsterisk);
  $.__views.soundNoTA = Ti.UI.createTextArea({ color: "black", borderColor: "gray", borderRadius: "5", left: "5%", width: "90%", height: "15%", backgroundColor: "white", font: { fontFamily: "Montserrat-Regular" }, top: "75%", id: "soundNoTA" });
  $.__views.soundView.add($.__views.soundNoTA);
  $.__views.PNohelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "8%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "75%", title: 'b', id: "PNohelpButton" });
  $.__views.soundView.add($.__views.PNohelpButton);
  helpSubmit ? $.addListener($.__views.PNohelpButton, 'click', helpSubmit) : __defers['$.__views.PNohelpButton!click!helpSubmit'] = true;$.__views.audioSelectBtn = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular", fontSize: "16", fontStyle: "", fontWeight: "" }, title: "CLICK TO ADD SOUND", backgroundColor: "#f2f2f2", borderColor: "gray", borderRadius: 5, color: "black", width: "70%", id: "audioSelectBtn" });
  $.__views.soundView.add($.__views.audioSelectBtn);
  showOptions ? $.addListener($.__views.audioSelectBtn, 'click', showOptions) : __defers['$.__views.audioSelectBtn!click!showOptions'] = true;$.__views.soundView2 = Ti.UI.createView({ width: "100%", backgroundColor: "transparent", left: "0%", height: "30%", id: "soundView2" });
  $.__views.scrollView.add($.__views.soundView2);
  $.__views.nextBtn = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular", fontSize: "16", fontStyle: "", fontWeight: "" }, title: "Next", backgroundColor: "#f2f2f2", borderColor: "gray", borderRadius: 5, color: "black", width: "40%", id: "nextBtn" });
  $.__views.soundView2.add($.__views.nextBtn);
  submit ? $.addListener($.__views.nextBtn, 'click', submit) : __defers['$.__views.nextBtn!click!submit'] = true;$.__views.audioSelectBtniOS = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular", fontSize: "16", fontStyle: "", fontWeight: "" }, title: "CLICK TO ADD SOUND", backgroundColor: "#f2f2f2", borderColor: "gray", borderRadius: 5, color: "black", width: "70%", top: "0%", id: "audioSelectBtniOS" });
  $.__views.soundView2.add($.__views.audioSelectBtniOS);
  showOptions ? $.addListener($.__views.audioSelectBtniOS, 'click', showOptions) : __defers['$.__views.audioSelectBtniOS!click!showOptions'] = true;$.__views.nextBtniOS = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular", fontSize: "16", fontStyle: "", fontWeight: "" }, title: "Next", backgroundColor: "#f2f2f2", borderColor: "gray", borderRadius: 5, color: "black", width: "40%", top: "25%", id: "nextBtniOS" });
  $.__views.soundView2.add($.__views.nextBtniOS);
  submit ? $.addListener($.__views.nextBtniOS, 'click', submit) : __defers['$.__views.nextBtniOS!click!submit'] = true;exports.destroy = function () {};

  _.extend($, $.__views);

  var args = arguments[0] || {};


  var soundNativePath;
  var userSound;
  var wildSoundMimeType;

  Alloy.Globals.WildSoundForm = $.wildSoundWin;

  var pWidth = Ti.Platform.displayCaps.platformWidth;

  var pHeight = Ti.Platform.displayCaps.platformHeight;


  console.log("Getting the platform version: " + Titanium.Platform.getVersion());
  console.log("Getting screen size: " + Titanium.Platform.getDisplayCaps());
  console.log("Getting screen sizeWidth: " + pWidth);
  console.log("Getting screen sizeHeight: " + pHeight);

  var activityIndicator = Ti.UI.createActivityIndicator({
    color: 'black',
    font: {
      fontSize: 20,
      fontFamily: 'Montserrat-Regular',
      fontStyle: '',
      fontWeight: 'bold'
    },
    message: 'Please Wait..',
    style: Ti.UI.ActivityIndicatorStyle.DARK,
    height: Ti.UI.SIZE,
    width: Ti.UI.SIZE
  });

  if (true) {
    $.QL.image = 'QL300.png';
    $.qp.image = 'QM_FINAL_outlines.png';
    $.audioSelectBtn.visible = false;
    $.nextBtn.visible = false;

    if (pWidth == '320') {
      console.log("iPhone 5 ya'll! ");

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

  if (false) {
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
      Ti.Android.requestPermissions(permissionsToRequest, function (e) {
        if (e.success) {
          Ti.API.info("SUCCESS");
        } else {
          Ti.API.info("ERROR: " + e.error);
        }
      });
    }
  } else {
    if (!Ti.Media.hasMusicLibraryPermissions()) {
      Ti.Media.requestMusicLibraryPermissions(function (e) {
        if (!e.success) {
          alert("No permissions!");
          return;
        }
      });
    }
  }

  var data = require('data');

  function showOptions() {
    if (true) {
      Ti.Media.openMusicLibrary({
        allowMultipleSelections: false,
        mediaTypes: Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC | Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO,
        success: function (event) {
          console.log("This is in digital audio format, success soundgallery" + JSON.stringify(event.apiName));

          Ti.API.debug(event.items[0]);
          console.log(event.items[0].title);

          Ti.API.debug('Our artist is: ' + event.items[0].artist);
          Ti.API.debug('audio title: ' + event.items[0].title);
          Ti.API.debug('audio hasProtectedAsset: ' + event.items[0].hasProtectedAsset);
          Ti.API.debug('audio url: ' + event.items[0].assetURL);
          Ti.API.debug('audio mediaType: ' + event.items[0].mediaType);

          var searchItems = [];

          var searchableIndex = Ti.App.iOS.createSearchableIndex();

          var soundItemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
            itemContentType: Ti.App.iOS.UTTYPE_AUDIO,
            title: event.items[0].title,
            artist: event.items[0].artist,
            duration: event.items[0].playbackDuration,
            mediaTypes: [Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC, Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO]
          });

          var soundItem = Ti.App.iOS.createSearchableItem({
            uniqueIdentifier: Titanium.App.sessionId,
            domainIdentifier: Titanium.App.id,
            attributeSet: soundItemAttr
          });

          Ti.API.info("sound Item");

          searchItems.push(soundItem);

          searchableIndex.addToDefaultSearchableIndex(searchItems, function (e) {
            if (e.success) {
              Ti.API.info("Press the home button and now search for your keywords");
            } else {
              alert("Searchable index could not be created: " + JSON.stringify(e.error));
            }
          });
          var musicSearchItem = [soundItemAttr.title, soundItemAttr.artist, Ti.App.iOS.UTTYPE_AUDIO];
          var musicQueryString = String(musicSearchItem[0]);

          Ti.API.info('Search Query ' + musicQueryString + ' Datum: ' + JSON.stringify(musicSearchItem));

          executeSearchQuery(musicQueryString, musicSearchItem, function (callback) {
            Ti.API.info('Atrribute Set ' + JSON.stringify(callback.attributeSet));

            searchableIndex.deleteAllSearchableItemByDomainIdenifiers([Titanium.App.id], function (e) {});
          });

          alert("File added. Load times vary based on connection speed.");

          $.audioSelectBtniOS.setTitle("Change Sound");
        },
        cancel: function () {
          alert("Aborting adding a Wild Sound recording from gallery");
        },
        error: function (error) {
          var a = Titanium.UI.createAlertDialog({
            title: 'Music Library'
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
        action: Ti.Android.ACTION_GET_CONTENT,
        type: "audio/*"
      });

      var activity = $.wildSoundWin.getActivity();
      activity.startActivityForResult(intent, function (e) {
        if (e.resultCode == Ti.Android.RESULT_OK) {
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
          } catch (e) {
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

        if (false) {
          var fileExt = userSound.file.name;
          fileExt = "." + fileExt.substr(fileExt.lastIndexOf('.') + 1);
          Ti.API.info("File Extension " + fileExt);
        } else {
          fileExt = "";
        }

        var currentData = {
          userPhoto: userSound,
          photoDate: $.dateTextArea.value,
          photoPlace: $.arti.value,
          photoTitle: $.TitleLabelTA.value,
          photoFirstName: $.soundNameTA.value,
          photoLastName: $.soundNameLTA.value,
          photoEventName: $.soundEventTA.value,
          photoPeopleNames: $.soundPeopleTA.value,
          photoOrg: $.soundOrgTA.value,
          photoModel: $.soundMakeTA.value,
          photoNotes: $.soundNoTA.value,
          resourceType: "Sound Recording",
          submitType: "Upload Image",
          photoStepNumber: 3,
          photoLanguage: "EN",
          photoRights: "I have the permission of the rights owner to make this resource available through this repository.",
          photoMemberType: "No Membership",
          mimeType: wildSoundMimeType,
          fileExtension: fileExt
        };

        data.setData(currentData);
        var args = {
          thisTitle: $.Title.text,
          photoFullName: fullName,

          photoDate: $.dateTextArea.value,
          photoPlace: $.arti.value,
          photoTitle: $.TitleLabelTA.value,
          photoFirstName: $.soundNameTA.value,
          photoLastName: $.soundNameLTA.value,
          photoEventName: $.soundEventTA.value,
          photoPeopleNames: $.soundPeopleTA.value,
          photoOrg: $.soundOrgTA.value,
          photoModel: $.soundMakeTA.value,
          photoNotes: $.soundNoTA.value,

          mimeType: wildSoundMimeType
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
      thisTitle: $.Title.text,
      thisDate: $.soundDate.text,
      thisTimePeriod: $.photoDate.text,
      thisItem: $.TitleLabel.text,
      thisName: $.soundName.text,
      thisNameLast: $.soundNameL.text,
      thisRecordEvent: $.soundEvent.text,
      thisPeopleDiscuss: $.soundPeople.text,
      thisOrg: $.soundOrg.text,
      thisMake: $.soundMake.text,
      thisNote: $.soundNotes.text,
      thisButtonID: e.source.id
    };

    alertController = Alloy.createController('helpNote', args).getView();
    alertController.open();
  }

  function backButton(e) {
    $.wildSoundWin.close();
  }

  function executeSearchQuery(qString, searchableItemAttributeSet, _callback) {
    Ti.API.debug("Careful.");
    var allItems = [];

    var searchQuery = Ti.App.iOS.createSearchQuery({
      queryString: 'contentType == "public.audio"',
      attributes: ["title", "fileSize", "path", "contentType", "contentURL", "kind", "duration", "artist", "securityMethod"]
    });

    searchQuery.addEventListener("founditems", function (e) {
      Ti.API.info('Found stuff.');
      for (var i = 0; i < e.items.length; i++) {
        allItems.push(e.items[i]);
      }
    });

    searchQuery.addEventListener("completed", function (e) {
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
        attributeSet: attributeSet
      });
    });

    searchQuery.start();
  }

  __defers['$.__views.back!click!backButton'] && $.addListener($.__views.back, 'click', backButton);__defers['$.__views.PDhelpButton!click!helpSubmit'] && $.addListener($.__views.PDhelpButton, 'click', helpSubmit);__defers['$.__views.PDDhelpButton!click!helpSubmit'] && $.addListener($.__views.PDDhelpButton, 'click', helpSubmit);__defers['$.__views.PThelpButton!click!helpSubmit'] && $.addListener($.__views.PThelpButton, 'click', helpSubmit);__defers['$.__views.PESNhelpButton!click!helpSubmit'] && $.addListener($.__views.PESNhelpButton, 'click', helpSubmit);__defers['$.__views.PPehelpButton!click!helpSubmit'] && $.addListener($.__views.PPehelpButton, 'click', helpSubmit);__defers['$.__views.POhelpButton!click!helpSubmit'] && $.addListener($.__views.POhelpButton, 'click', helpSubmit);__defers['$.__views.PMhelpButton!click!helpSubmit'] && $.addListener($.__views.PMhelpButton, 'click', helpSubmit);__defers['$.__views.PNohelpButton!click!helpSubmit'] && $.addListener($.__views.PNohelpButton, 'click', helpSubmit);__defers['$.__views.audioSelectBtn!click!showOptions'] && $.addListener($.__views.audioSelectBtn, 'click', showOptions);__defers['$.__views.nextBtn!click!submit'] && $.addListener($.__views.nextBtn, 'click', submit);__defers['$.__views.audioSelectBtniOS!click!showOptions'] && $.addListener($.__views.audioSelectBtniOS, 'click', showOptions);__defers['$.__views.nextBtniOS!click!submit'] && $.addListener($.__views.nextBtniOS, 'click', submit);

  _.extend($, exports);
}

module.exports = Controller;