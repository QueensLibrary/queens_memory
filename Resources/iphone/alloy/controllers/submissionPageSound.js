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
  this.__controllerPath = 'submissionPageSound';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.soundSubmitContainer = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], backgroundColor: "#e6e6e6", backgroundDisabledColor: "#000000", id: "soundSubmitContainer" });
  $.__views.soundSubmitContainer && $.addTopLevelView($.__views.soundSubmitContainer);
  $.__views.navBar = Ti.UI.createView({ backgroundColor: "black", top: "0%", width: "100%", height: "8%", font: { fontSize: 14 }, zIndex: 0, id: "navBar" });
  $.__views.soundSubmitContainer.add($.__views.navBar);
  $.__views.back = Ti.UI.createButton({ left: "5%", color: "white", backgroundColor: "transparent", borderColor: "transparent", font: { fontFamily: "queensfoundationfont", fontSize: 36 }, top: "8%", title: 'T', id: "back" });
  $.__views.navBar.add($.__views.back);
  backButton ? $.addListener($.__views.back, 'click', backButton) : __defers['$.__views.back!click!backButton'] = true;$.__views.QL = Ti.UI.createImageView({ width: "34%", top: "26%", id: "QL", image: "QL300.png" });
  $.__views.navBar.add($.__views.QL);
  $.__views.titleBan = Ti.UI.createView({ backgroundColor: "white", top: "7%", height: "11%", font: { fontSize: 12 }, id: "titleBan" });
  $.__views.soundSubmitContainer.add($.__views.titleBan);
  $.__views.qp = Ti.UI.createImageView({ top: "12%", width: "30%", left: "7%", id: "qp", image: "QM_FINAL_outlines.png" });
  $.__views.titleBan.add($.__views.qp);
  $.__views.Title = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: 18, fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "bold" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, textAlign: "Titanium.UI.TEXT_ALIGNMENT_RIGHT", top: "35%", right: "5%", text: 'Submission Preview', id: "Title" });
  $.__views.titleBan.add($.__views.Title);
  $.__views.__alloyId130 = Ti.UI.createScrollView({ top: "17%", backgroundColor: "#e6e6e6", showHorizontalScrollIndicator: "false", showVerticalScrollIndicator: "true", width: Titanium.UI.FILL, bottom: "0%", contentHeight: Titanium.UI.SIZE, contentWidth: Titanium.UI.FILL, layout: "vertical", disableBounce: "true", id: "__alloyId130" });
  $.__views.soundSubmitContainer.add($.__views.__alloyId130);
  $.__views.pickerView = Ti.UI.createView({ height: "30%", id: "pickerView" });
  $.__views.__alloyId130.add($.__views.pickerView);
  $.__views.subPrev = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "bold" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, top: "25%", left: "22%", text: 'Submission Preview', id: "subPrev" });
  $.__views.pickerView.add($.__views.subPrev);
  $.__views.uploadIcon = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "50", fontFamily: "Entypo", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "16%", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, top: "40.3%", text: 'z', id: "uploadIcon" });
  $.__views.pickerView.add($.__views.uploadIcon);
  $.__views.ImageInfo = Ti.UI.createLabel({ width: "100.09%", height: "6.72%", font: { fontSize: "10", fontFamily: "", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, left: "5%", top: "53%", text: '1 audio file to upload, and includes the following:', id: "ImageInfo" });
  $.__views.pickerView.add($.__views.ImageInfo);
  $.__views.submissionsView = Ti.UI.createView({ backgroundColor: "transparent", top: "0%", left: "0%", width: "100%", layout: "vertical", height: "100%", id: "submissionsView" });
  $.__views.__alloyId130.add($.__views.submissionsView);
  $.__views.photoDate = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Time period(s):', id: "photoDate" });
  $.__views.submissionsView.add($.__views.photoDate);
  $.__views.soundDateOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Date Recorded:', id: "soundDateOral" });
  $.__views.submissionsView.add($.__views.soundDateOral);
  $.__views.soundPlaceOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Location:', id: "soundPlaceOral" });
  $.__views.submissionsView.add($.__views.soundPlaceOral);
  $.__views.photoTitleOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Title of item:', id: "photoTitleOral" });
  $.__views.submissionsView.add($.__views.photoTitleOral);
  $.__views.soundInterName = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Interviewer Name:', id: "soundInterName" });
  $.__views.submissionsView.add($.__views.soundInterName);
  $.__views.soundNameOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Track Name:', id: "soundNameOral" });
  $.__views.submissionsView.add($.__views.soundNameOral);
  $.__views.soundNameLOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Interviewer Name Last:', id: "soundNameLOral" });
  $.__views.submissionsView.add($.__views.soundNameLOral);
  $.__views.soundLangOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Language(s):', id: "soundLangOral" });
  $.__views.submissionsView.add($.__views.soundLangOral);
  $.__views.soundInterviewPlace = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Discussed Interview Places:', id: "soundInterviewPlace" });
  $.__views.submissionsView.add($.__views.soundInterviewPlace);
  $.__views.soundEventNameOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Event Name:', id: "soundEventNameOral" });
  $.__views.submissionsView.add($.__views.soundEventNameOral);
  $.__views.soundPeopleNameOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Person/People Name:', id: "soundPeopleNameOral" });
  $.__views.submissionsView.add($.__views.soundPeopleNameOral);
  $.__views.soundOrgOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Organizations:', id: "soundOrgOral" });
  $.__views.submissionsView.add($.__views.soundOrgOral);
  $.__views.soundMakeOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Make/Model and/or Software used:', id: "soundMakeOral" });
  $.__views.submissionsView.add($.__views.soundMakeOral);
  $.__views.soundNotesLabelOral = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Additional Notes:', id: "soundNotesLabelOral" });
  $.__views.submissionsView.add($.__views.soundNotesLabelOral);
  $.__views.submissionsView2 = Ti.UI.createView({ backgroundColor: "transparent", top: "0%", left: "0%", width: "100%", layout: "vertical", height: "100%", id: "submissionsView2" });
  $.__views.__alloyId130.add($.__views.submissionsView2);
  $.__views.soundDate = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Date Recorded:', id: "soundDate" });
  $.__views.submissionsView2.add($.__views.soundDate);
  $.__views.soundPlace = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Location:', id: "soundPlace" });
  $.__views.submissionsView2.add($.__views.soundPlace);
  $.__views.photoTitle = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Title of item:', id: "photoTitle" });
  $.__views.submissionsView2.add($.__views.photoTitle);
  $.__views.soundName = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Track Name:', id: "soundName" });
  $.__views.submissionsView2.add($.__views.soundName);
  $.__views.soundNameL = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Interviewer Name Last:', id: "soundNameL" });
  $.__views.submissionsView2.add($.__views.soundNameL);
  $.__views.soundEventName = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Event Name:', id: "soundEventName" });
  $.__views.submissionsView2.add($.__views.soundEventName);
  $.__views.soundPeopleName = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Person/People Name:', id: "soundPeopleName" });
  $.__views.submissionsView2.add($.__views.soundPeopleName);
  $.__views.soundOrg = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Organizations:', id: "soundOrg" });
  $.__views.submissionsView2.add($.__views.soundOrg);
  $.__views.soundMake = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Make/Model and/or Software used:', id: "soundMake" });
  $.__views.submissionsView2.add($.__views.soundMake);
  $.__views.soundNotesLabel = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "#000000", ellipsize: Titanium.UITEXT_ELLIPSIZE_TRUNCATE_END, left: "5%", top: "1%", wordWrap: "true", text: 'Additional Notes:', id: "soundNotesLabel" });
  $.__views.submissionsView2.add($.__views.soundNotesLabel);
  $.__views.bannerBottom = Ti.UI.createView({ backgroundColor: "#ffffff", height: "20%", left: "0%", top: "93%", width: "100%", id: "bannerBottom" });
  $.__views.soundSubmitContainer.add($.__views.bannerBottom);
  $.__views.edit = Ti.UI.createButton({ top: "5%", left: "5%", width: "30%", backgroundColor: "#f2f2f2", borderColor: "gray", color: "black", borderRadius: 5, title: 'Edit', id: "edit" });
  $.__views.bannerBottom.add($.__views.edit);
  backButton ? $.addListener($.__views.edit, 'click', backButton) : __defers['$.__views.edit!click!backButton'] = true;$.__views.next = Ti.UI.createButton({ top: "5%", right: "5%", width: "30%", backgroundColor: "#f2f2f2", borderColor: "gray", color: "black", borderRadius: 5, title: 'Submit', id: "next" });
  $.__views.bannerBottom.add($.__views.next);
  submit ? $.addListener($.__views.next, 'click', submit) : __defers['$.__views.next!click!submit'] = true;exports.destroy = function () {};

  _.extend($, $.__views);

  var args = arguments[0] || {};
  var data = require('data');
  var menuController;
  var parent = _parent;
  var ACS_DIGITAL_SOUND_UPLOAD_URL = "this will you api endpoint";

  if (true) {
    $.QL.image = 'QL300.png';
    $.qp.image = 'QM_FINAL_outlines.png';
  } else if (false) {
    $.QL.image = '/images/QL300.png';
    $.qp.image = '/images/QM_FINAL_outlines.png';
  }

  $.Title.text = args.thisTitle || "Error, most like";

  var checkOS = 'iPhone OS';
  if (true) {
    if (checkOS == "iPhone OS") {
      checkOS = "iOS";
    }
  }

  if (args.thisTitle == "Oral History") {

    if (true) {

      if (args.timePeriod.length <= 35 && args.photoDate.length <= 35 && args.photoInterviewLocation.length <= 35 && args.photoTitle.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoLanguage.length <= 35 && args.photoPlace.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoModel.length <= 35) {
        $.submissionsView.height = '85%';
      } else if (args.timePeriod.length >= 90 && args.photoDate.length >= 90 && args.photoInterviewLocation.length >= 90 && args.photoTitle.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoLanguage.length >= 90 && args.photoPlace.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoModel.length >= 90) {
        $.submissionsView.height = '190%';
      } else if (args.timePeriod.length >= 50 && args.photoDate.length >= 50 && args.photoInterviewLocation.length >= 50 && args.photoTitle.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoLanguage.length >= 50 && args.photoPlace.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoModel.length >= 50) {
        $.submissionsView.height = '160%';
      } else if (args.timePeriod.length >= 40 && args.photoDate.length >= 40 && args.photoInterviewLocation.length >= 40 && args.photoTitle.length >= 40 && args.photoFirstName.length >= 40 && args.photoLastName.length >= 40 && args.photoPeopleNames.length >= 40 && args.photoLanguage.length >= 40 && args.photoPlace.length >= 40 && args.photoEventName.length >= 40 && args.photoOrg.length >= 40 && args.photoModel.length >= 40) {
        $.submissionsView.height = '115%';
      } else {
        $.submissionsView.height = '150%';
      }
    }

    if (false) {

      if (args.timePeriod.length <= 35 && args.photoDate.length <= 35 && args.photoInterviewLocation.length <= 35 && args.photoTitle.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoLanguage.length <= 35 && args.photoPlace.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoModel.length <= 35) {
        $.submissionsView.height = '450dp';
      } else if (args.timePeriod.length >= 90 && args.photoDate.length >= 90 && args.photoInterviewLocation.length >= 90 && args.photoTitle.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoLanguage.length >= 90 && args.photoPlace.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoModel.length >= 90) {
        $.submissionsView.height = '900dp';
      } else if (args.timePeriod.length >= 50 && args.photoDate.length >= 50 && args.photoInterviewLocation.length >= 50 && args.photoTitle.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoLanguage.length >= 50 && args.photoPlace.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoModel.length >= 50) {
        $.submissionsView.height = '750dp';
      } else if (args.timePeriod.length >= 40 && args.photoDate.length >= 40 && args.photoInterviewLocation.length >= 40 && args.photoTitle.length >= 40 && args.photoFirstName.length >= 40 && args.photoLastName.length >= 40 && args.photoPeopleNames.length >= 40 && args.photoLanguage.length >= 40 && args.photoPlace.length >= 40 && args.photoEventName.length >= 40 && args.photoOrg.length >= 40 && args.photoModel.length >= 40) {
        $.submissionsView.height = '650dp';
      } else {
        $.submissionsView.height = '550dp';
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

    if (true) {

      if (args.photoDate.length <= 35 && args.photoPlace.length <= 35 && args.photoTitle.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoModel.length <= 35) {
        $.submissionsView.height = '75%';
      } else if (args.photoDate.length >= 90 && args.photoPlace.length >= 90 && args.photoTitle.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90) {

        $.submissionsView.height = '200%';
      } else if (args.photoDate.length >= 50 && args.photoPlace.length >= 50 && args.photoTitle.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50) {
        $.submissionsView.height = '150%';
      } else {
        $.submissionsView.height = '100%';
      }
    }

    if (false) {

      if (args.photoDate.length <= 35 && args.photoPlace.length <= 35 && args.photoTitle.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoModel.length <= 35) {
        $.submissionsView2.height = '400dp';
      } else if (args.photoDate.length >= 90 && args.photoPlace.length >= 90 && args.photoTitle.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90) {

        $.submissionsView2.height = '700dp';
      } else if (args.photoDate.length >= 50 && args.photoPlace.length >= 50 && args.photoTitle.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50) {
        $.submissionsView2.height = '600dp';
      } else {
        $.submissionsView2.height = '520dp';
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

  if (true) {} else {
    try {
      stringToSaveInDatabase = Ti.Utils.base64encode(soundBlob).toString();
    } catch (e) {
      alert("Sorry! This audio file is too big to upload. Please select a different sound.");
    }
  }

  function myreplacer(str) {
    var mapObj = {
      '>': '&gt;',
      '<': '&lt;',
      '&': '&amp;'
    };

    str = str.replace(/<|>|&/gi, function (matched) {
      return mapObj[matched];
    });
    return str;
  }

  if (data.getData().resourceType == 'Oral History') {
    if (true) {
      var absoluteParams = {
        userPhoto: soundBlob,
        submit: data.getData().submitType,
        resourceType: data.getData().resourceType,
        step: data.getData().photoStepNumber,
        firstname: myreplacer(data.getData().photoFirstName),
        lastname: myreplacer(data.getData().photoLastName),
        lang: myreplacer(data.getData().photoLanguage),
        right: data.getData().photoRights,
        title: myreplacer(data.getData().photoTitle),
        memberType: data.getData().photoMemberType,
        additional: myreplacer(data.getData().photoNotes),
        faculty: myreplacer(data.getData().photoEventName),
        interviewDate: myreplacer(data.getData().photoDate),
        interviewLocation: myreplacer(data.getData().photoInterviewLocation),
        interviewee: myreplacer(data.getData().photoPeopleNames),
        organizationsInterview: myreplacer(data.getData().photoOrg),
        peopleInterview: myreplacer(data.getData().photoPeople),
        placesInterview: myreplacer(data.getData().photoPlace),
        recorderMake: myreplacer(data.getData().photoModel),
        year: myreplacer(data.getData().timePeriod),
        email: Ti.App.Properties.getString('Email Address'),
        uploaderfname: Ti.App.Properties.getString('First Name'),
        uploaderlname: Ti.App.Properties.getString('Last Name'),
        mimeType: data.getData().mimeType,
        fileExtension: data.getData().fileExtension,
        operatingSystem: checkOS,
        osVersion: Ti.Platform.version
      };
    } else {
      var absoluteParams = {
        userPhoto: stringToSaveInDatabase,
        submit: data.getData().submitType,
        resourceType: data.getData().resourceType,
        step: data.getData().photoStepNumber,
        firstname: myreplacer(data.getData().photoFirstName),
        lastname: myreplacer(data.getData().photoLastName),
        lang: myreplacer(data.getData().photoLanguage),
        right: data.getData().photoRights,
        title: myreplacer(data.getData().photoTitle),
        memberType: data.getData().photoMemberType,
        additional: myreplacer(data.getData().photoNotes),
        faculty: myreplacer(data.getData().photoEventName),
        interviewDate: myreplacer(data.getData().photoDate),
        interviewLocation: myreplacer(data.getData().photoInterviewLocation),
        interviewee: myreplacer(data.getData().photoPeopleNames),
        organizationsInterview: myreplacer(data.getData().photoOrg),
        peopleInterview: myreplacer(data.getData().photoPeople),
        placesInterview: myreplacer(data.getData().photoPlace),
        recorderMake: myreplacer(data.getData().photoModel),
        year: myreplacer(data.getData().timePeriod),
        email: Ti.App.Properties.getString('Email Address'),
        uploaderfname: Ti.App.Properties.getString('First Name'),
        uploaderlname: Ti.App.Properties.getString('Last Name'),
        mimeType: data.getData().mimeType,
        fileExtension: data.getData().fileExtension,
        operatingSystem: 'iPhone OS',
        osVersion: Ti.Platform.version
      };
    }
  } else {
    if (true) {
      var absoluteParams = {
        userPhoto: soundBlob,
        submit: data.getData().submitType,
        resourceType: data.getData().resourceType,
        step: data.getData().photoStepNumber,
        firstname: myreplacer(data.getData().photoFirstName),
        lastname: myreplacer(data.getData().photoLastName),
        lang: myreplacer(data.getData().photoLanguage),
        right: data.getData().photoRights,
        title: myreplacer(data.getData().photoTitle),
        memberType: data.getData().photoMemberType,
        additional: myreplacer(data.getData().photoNotes),
        recorderMake: myreplacer(data.getData().photoModel),
        recordingEvent: myreplacer(data.getData().photoEventName),
        recordingLocation: myreplacer(data.getData().photoPlace),
        recordingOrganization: myreplacer(data.getData().photoOrg),
        recordingPeople: myreplacer(data.getData().photoPeopleNames),
        year: myreplacer(data.getData().photoDate),
        email: Ti.App.Properties.getString('Email Address'),
        uploaderfname: Ti.App.Properties.getString('First Name'),
        uploaderlname: Ti.App.Properties.getString('Last Name'),
        mimeType: data.getData().mimeType,
        fileExtension: data.getData().fileExtension,
        operatingSystem: checkOS,
        osVersion: Ti.Platform.version
      };
    } else {
      var absoluteParams = {
        userPhoto: stringToSaveInDatabase,
        submit: data.getData().submitType,
        resourceType: data.getData().resourceType,
        step: data.getData().photoStepNumber,
        firstname: myreplacer(data.getData().photoFirstName),
        lastname: myreplacer(data.getData().photoLastName),
        lang: myreplacer(data.getData().photoLanguage),
        right: data.getData().photoRights,
        title: myreplacer(data.getData().photoTitle),
        memberType: data.getData().photoMemberType,
        additional: myreplacer(data.getData().photoNotes),
        recorderMake: myreplacer(data.getData().photoModel),
        recordingEvent: myreplacer(data.getData().photoEventName),
        recordingLocation: myreplacer(data.getData().photoPlace),
        recordingOrganization: myreplacer(data.getData().photoOrg),
        recordingPeople: myreplacer(data.getData().photoPeopleNames),
        year: myreplacer(data.getData().photoDate),
        email: Ti.App.Properties.getString('Email Address'),
        uploaderfname: Ti.App.Properties.getString('First Name'),
        uploaderlname: Ti.App.Properties.getString('Last Name'),
        mimeType: data.getData().mimeType,
        fileExtension: data.getData().fileExtension,
        operatingSystem: 'iPhone OS',
        osVersion: Ti.Platform.version
      };
    }
  }

  var activityIndicator = Ti.UI.createActivityIndicator({
    color: 'black',
    font: {
      fontSize: 20,
      fontFamily: 'Montserrat-Regular',
      fontStyle: '',
      fontWeight: 'bold'
    },
    message: 'Sending...',
    style: Ti.UI.ActivityIndicatorStyle.DARK,
    height: Ti.UI.SIZE,
    width: Ti.UI.SIZE
  });

  $.soundSubmitContainer.add(activityIndicator);

  var submitPhoto = function (_options, _callback) {
    if (!Ti.Network.getOnline()) {
      Alloy.Globals.displayWifiSettingsAlert();
      return;
    }

    var xhr1 = Ti.Network.createHTTPClient({
      timeout: 0
    });

    xhr1.open("POST", ACS_DIGITAL_SOUND_UPLOAD_URL);
    xhr1.onerror = function (e) {
      _callback && _callback({
        success: false,
        error: e
      });
      activityIndicator.hide();
      console.log('onError!!');
      return;
    };
    xhr1.enableKeepAlive = true;

    xhr1.onload = function (e) {
      console.info(this.status);
      console.info(this.readyState);
      console.info(this.responseText);
      _callback && _callback({
        success: true,
        response: xhr1.responseText
      });
      console.log('onLoad Success!!');
      return;
    };

    xhr1.setRequestHeader('Content-Type', 'application/json');
    xhr1.setRequestHeader('enctype', 'multipart/form-data');


    xhr1.send(_options);
  };

  var photocallback = function (_response) {
    activityIndicator.hide();
    Ti.API.debug('Sent: ' + JSON.stringify(_response, null, 2));
    if (_response.success) {
      var dialog = Ti.UI.createAlertDialog({
        message: 'Sent: Thank you for using the App Upload Tool',
        ok: 'Okay',
        title: 'Submission Complete!'
      });

      dialog.addEventListener('click', function (e) {
        if (data.getData().resourceType == 'Oral History') {
          Alloy.Globals.OralForm.close();
          Alloy.Globals.OralForm = null;
        } else {
          Alloy.Globals.WildSoundForm.close();
          Alloy.Globals.WildSoundForm = null;
        }
        $.soundSubmitContainer.close();
      });
      dialog.show();
    } else {
      alert('Something went wrong. Please try to submit again. \n');
      $.next.enabled = true;
    }
  };

  function submit(e) {
    alert("Submitted");
  }

  function backButton(e) {
    $.soundSubmitContainer.close();
  }

  function slideMenu(e) {
    menuController = Alloy.createController('sliderMenu').getView();
    menuController.open();
  }

  __defers['$.__views.back!click!backButton'] && $.addListener($.__views.back, 'click', backButton);__defers['$.__views.edit!click!backButton'] && $.addListener($.__views.edit, 'click', backButton);__defers['$.__views.next!click!submit'] && $.addListener($.__views.next, 'click', submit);

  _.extend($, exports);
}

module.exports = Controller;