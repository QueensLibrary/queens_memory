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
  this.__controllerPath = 'oralHistoryForm';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.oralWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], backgroundColor: "#000000", id: "oralWin", theme: "mytheme" });
  $.__views.oralWin && $.addTopLevelView($.__views.oralWin);
  $.__views.navBar = Ti.UI.createView({ backgroundColor: "black", top: "0%", width: "100%", height: "8%", font: { fontSize: 14 }, zIndex: 0, id: "navBar" });
  $.__views.oralWin.add($.__views.navBar);
  $.__views.back = Ti.UI.createButton({ font: { fontFamily: "queensfoundationfont", fontSize: 36 }, left: "5%", color: "white", backgroundColor: "transparent", borderColor: "transparent", top: "8%", title: 'T', id: "back" });
  $.__views.navBar.add($.__views.back);
  backButton ? $.addListener($.__views.back, 'click', backButton) : __defers['$.__views.back!click!backButton'] = true;$.__views.QL = Ti.UI.createImageView(function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: "34%", top: "26%" });
    if (Alloy.isTablet) Alloy.deepExtend(true, o, { top: "25%", left: "40%" });
    Alloy.deepExtend(true, o, { id: "QL", image: "/images/QL300.png" });
    return o;
  }());
  $.__views.navBar.add($.__views.QL);
  $.__views.titleBan = Ti.UI.createView({ backgroundColor: "white", top: "7%", height: "20%", font: { fontSize: 12 }, id: "titleBan" });
  $.__views.oralWin.add($.__views.titleBan);
  $.__views.qp = Ti.UI.createImageView({ top: "8%", width: "30%", left: "7%", id: "qp" });
  $.__views.titleBan.add($.__views.qp);
  $.__views.Title = Ti.UI.createLabel({ font: { fontSize: 18, fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "bold" }, color: "black", top: "15%", right: "5%", text: 'Oral History', id: "Title" });
  $.__views.titleBan.add($.__views.Title);
  $.__views.scrollView = Ti.UI.createScrollView({ top: "17%", backgroundColor: "#e6e6e6", showHorizontalScrollIndicator: "false", showVerticalScrollIndicator: "true", width: Titanium.UI.FILL, bottom: "0%", contentHeight: Titanium.UI.SIZE, contentWidth: Titanium.UI.FILL, layout: "vertical", disableBounce: "true", id: "scrollView" });
  $.__views.oralWin.add($.__views.scrollView);
  $.__views.pickerView = Ti.UI.createView({ top: "0%", left: "0%", backgroundColor: "transparent", height: "55%", width: "100%", id: "pickerView" });
  $.__views.scrollView.add($.__views.pickerView);
  $.__views.provideInfo = Ti.UI.createLabel({ font: { fontSize: "10", fontFamily: "", fontStyle: "", fontWeight: "" }, color: "black", top: "15%", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, wordWrap: "true", text: 'Please provide the following information about your sound.', id: "provideInfo" });
  $.__views.pickerView.add($.__views.provideInfo);
  $.__views.photoDate = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "30%", left: "5%", text: 'Time period(s) discussed in interview:', id: "photoDate" });
  $.__views.pickerView.add($.__views.photoDate);
  $.__views.timeAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "68%", top: "28%", text: '*', id: "timeAsterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.timeAsterisk);
  $.__views.PDDhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "40%", title: 'b', id: "PDDhelpButton" });
  $.__views.pickerView.add($.__views.PDDhelpButton);
  helpSubmit ? $.addListener($.__views.PDDhelpButton, 'click', helpSubmit) : __defers['$.__views.PDDhelpButton!click!helpSubmit'] = true;$.__views.arti = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "38%", height: "11%", id: "arti" });
  $.__views.pickerView.add($.__views.arti);
  $.__views.photoRecord = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "54%", left: "5%", text: 'Date recorded:', id: "photoRecord" });
  $.__views.pickerView.add($.__views.photoRecord);
  $.__views.dateAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "31%", top: "51%", text: '*', id: "dateAsterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.dateAsterisk);
  $.__views.PRhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "62%", title: 'b', id: "PRhelpButton" });
  $.__views.pickerView.add($.__views.PRhelpButton);
  helpSubmit ? $.addListener($.__views.PRhelpButton, 'click', helpSubmit) : __defers['$.__views.PRhelpButton!click!helpSubmit'] = true;$.__views.photoRecordTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "60%", height: "11%", id: "photoRecordTA" });
  $.__views.pickerView.add($.__views.photoRecordTA);
  $.__views.soundInterviewLocation = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "79%", left: "5%", text: 'Location where interview took place:', id: "soundInterviewLocation" });
  $.__views.pickerView.add($.__views.soundInterviewLocation);
  $.__views.soundInterviewLocationTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "85%", height: "11%", id: "soundInterviewLocationTA" });
  $.__views.pickerView.add($.__views.soundInterviewLocationTA);
  $.__views.locAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "67%", top: "77%", text: '*', id: "locAsterisk" });
    return o;
  }());
  $.__views.pickerView.add($.__views.locAsterisk);
  $.__views.PILhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "87%", title: 'b', id: "PILhelpButton" });
  $.__views.pickerView.add($.__views.PILhelpButton);
  helpSubmit ? $.addListener($.__views.PILhelpButton, 'click', helpSubmit) : __defers['$.__views.PILhelpButton!click!helpSubmit'] = true;$.__views.soundView = Ti.UI.createView({ left: "0%", width: "100%", height: "95%", backgroundColor: "transparent", id: "soundView" });
  $.__views.scrollView.add($.__views.soundView);
  $.__views.TitleLabel = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "2%", left: "5%", text: 'Title of item:', id: "TitleLabel" });
  $.__views.soundView.add($.__views.TitleLabel);
  $.__views.TitleLabelTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "5%", height: "6%", id: "TitleLabelTA" });
  $.__views.soundView.add($.__views.TitleLabelTA);
  $.__views.PThelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "5%", title: 'b', id: "PThelpButton" });
  $.__views.soundView.add($.__views.PThelpButton);
  helpSubmit ? $.addListener($.__views.PThelpButton, 'click', helpSubmit) : __defers['$.__views.PThelpButton!click!helpSubmit'] = true;$.__views.PTasterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { top: "1%", left: "28%", text: '*', id: "PTasterisk" });
    return o;
  }());
  $.__views.soundView.add($.__views.PTasterisk);
  $.__views.soundName = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "13%", left: "5%", text: 'Name of interviewer:', id: "soundName" });
  $.__views.soundView.add($.__views.soundName);
  $.__views.soundNameTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "16%", height: "6%", id: "soundNameTA" });
  $.__views.soundView.add($.__views.soundNameTA);
  $.__views.PNhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "16%", title: 'b', id: "PNhelpButton" });
  $.__views.soundView.add($.__views.PNhelpButton);
  helpSubmit ? $.addListener($.__views.PNhelpButton, 'click', helpSubmit) : __defers['$.__views.PNhelpButton!click!helpSubmit'] = true;$.__views.soundPeopleName = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "25%", left: "5%", text: 'Name of interviewee [First]:', id: "soundPeopleName" });
  $.__views.soundView.add($.__views.soundPeopleName);
  $.__views.soundPeopleNameTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "28%", height: "6%", id: "soundPeopleNameTA" });
  $.__views.soundView.add($.__views.soundPeopleNameTA);
  $.__views.NameAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "52%", top: "23%", text: '*', id: "NameAsterisk" });
    return o;
  }());
  $.__views.soundView.add($.__views.NameAsterisk);
  $.__views.soundPeopleNameL = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "37%", left: "5%", text: 'Name of interviewee [Last]:', id: "soundPeopleNameL" });
  $.__views.soundView.add($.__views.soundPeopleNameL);
  $.__views.soundPeopleNameLTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "40%", height: "6%", id: "soundPeopleNameLTA" });
  $.__views.soundView.add($.__views.soundPeopleNameLTA);
  $.__views.NameLAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "52%", top: "35%", text: '*', id: "NameLAsterisk" });
    return o;
  }());
  $.__views.soundView.add($.__views.NameLAsterisk);
  $.__views.soundLang = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "49%", left: "5%", text: 'Language(s) used in interview:', id: "soundLang" });
  $.__views.soundView.add($.__views.soundLang);
  $.__views.PLNhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "52%", title: 'b', id: "PLNhelpButton" });
  $.__views.soundView.add($.__views.PLNhelpButton);
  helpSubmit ? $.addListener($.__views.PLNhelpButton, 'click', helpSubmit) : __defers['$.__views.PLNhelpButton!click!helpSubmit'] = true;$.__views.soundLangTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "52%", height: "6%", id: "soundLangTA" });
  $.__views.soundView.add($.__views.soundLangTA);
  $.__views.soundPlace = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "61%", left: "5%", text: 'Places discussed in the interview:', id: "soundPlace" });
  $.__views.soundView.add($.__views.soundPlace);
  $.__views.placesAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "62%", top: "59.5%", text: '*', id: "placesAsterisk" });
    return o;
  }());
  $.__views.soundView.add($.__views.placesAsterisk);
  $.__views.soundPlaceTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "64%", height: "6%", id: "soundPlaceTA" });
  $.__views.soundView.add($.__views.soundPlaceTA);
  $.__views.PPLhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "64%", title: 'b', id: "PPLhelpButton" });
  $.__views.soundView.add($.__views.PPLhelpButton);
  helpSubmit ? $.addListener($.__views.PPLhelpButton, 'click', helpSubmit) : __defers['$.__views.PPLhelpButton!click!helpSubmit'] = true;$.__views.soundEvent = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "73%", left: "5%", text: 'Name(s) of events discussed in the interview:', id: "soundEvent" });
  $.__views.soundView.add($.__views.soundEvent);
  $.__views.soundEventTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "76%", height: "6%", id: "soundEventTA" });
  $.__views.soundView.add($.__views.soundEventTA);
  $.__views.PESNhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "76%", title: 'b', id: "PESNhelpButton" });
  $.__views.soundView.add($.__views.PESNhelpButton);
  helpSubmit ? $.addListener($.__views.PESNhelpButton, 'click', helpSubmit) : __defers['$.__views.PESNhelpButton!click!helpSubmit'] = true;$.__views.soundPeople = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "85%", left: "5%", text: 'People discussed in the interview:', id: "soundPeople" });
  $.__views.soundView.add($.__views.soundPeople);
  $.__views.PPehelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "88%", title: 'b', id: "PPehelpButton" });
  $.__views.soundView.add($.__views.PPehelpButton);
  helpSubmit ? $.addListener($.__views.PPehelpButton, 'click', helpSubmit) : __defers['$.__views.PPehelpButton!click!helpSubmit'] = true;$.__views.soundPeopleTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "88%", height: "6%", id: "soundPeopleTA" });
  $.__views.soundView.add($.__views.soundPeopleTA);
  $.__views.soundView2 = Ti.UI.createView({ left: "0%", width: "100%", height: "65%", backgroundColor: "transparent", id: "soundView2" });
  $.__views.scrollView.add($.__views.soundView2);
  $.__views.soundOrg = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "0%", left: "5%", text: 'Organizations discussed in interview:', id: "soundOrg" });
  $.__views.soundView2.add($.__views.soundOrg);
  $.__views.soundOrgTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "5%", height: "9%", id: "soundOrgTA" });
  $.__views.soundView2.add($.__views.soundOrgTA);
  $.__views.POhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "6%", title: 'b', id: "POhelpButton" });
  $.__views.soundView2.add($.__views.POhelpButton);
  helpSubmit ? $.addListener($.__views.POhelpButton, 'click', helpSubmit) : __defers['$.__views.POhelpButton!click!helpSubmit'] = true;$.__views.soundMake = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "18%", left: "5%", text: 'Make or model of recorder used:', id: "soundMake" });
  $.__views.soundView2.add($.__views.soundMake);
  $.__views.soundMakeTA = Ti.UI.createTextField({ backgroundColor: "white", left: "5%", width: "90%", borderColor: "#919191", borderRadius: "5", font: { fontFamily: "Montserrat-Regular" }, color: "black", maxLength: "120", top: "23%", height: "9%", id: "soundMakeTA" });
  $.__views.soundView2.add($.__views.soundMakeTA);
  $.__views.PMhelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "24%", title: 'b', id: "PMhelpButton" });
  $.__views.soundView2.add($.__views.PMhelpButton);
  helpSubmit ? $.addListener($.__views.PMhelpButton, 'click', helpSubmit) : __defers['$.__views.PMhelpButton!click!helpSubmit'] = true;$.__views.soundNotes = Ti.UI.createLabel({ font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "black", top: "35%", left: "5%", text: 'Additional notes:', id: "soundNotes" });
  $.__views.soundView2.add($.__views.soundNotes);
  $.__views.notesAsterisk = Ti.UI.createLabel(function () {
    var o = {};
    Alloy.deepExtend(true, o, { font: { fontSize: "12", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" }, color: "red" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { font: { fontSize: "20", fontFamily: "Montserrat-Regular", fontStyle: "", fontWeight: "" } });
    Alloy.deepExtend(true, o, { left: "35%", top: "33%", text: '*', id: "notesAsterisk" });
    return o;
  }());
  $.__views.soundView2.add($.__views.notesAsterisk);
  $.__views.soundNoTA = Ti.UI.createTextArea({ color: "black", borderColor: "gray", borderRadius: "5", left: "5%", width: "90%", height: "25%", backgroundColor: "white", font: { fontFamily: "Montserrat-Regular" }, top: "40%", id: "soundNoTA" });
  $.__views.soundView2.add($.__views.soundNoTA);
  $.__views.PNohelpButton = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 30 }, zIndex: 1, right: "5%", width: "7%", height: "6%", color: "black", backgroundColor: "transparent", borderColor: "transparent", top: "41%", title: 'b', id: "PNohelpButton" });
  $.__views.soundView2.add($.__views.PNohelpButton);
  helpSubmit ? $.addListener($.__views.PNohelpButton, 'click', helpSubmit) : __defers['$.__views.PNohelpButton!click!helpSubmit'] = true;$.__views.audioSelectBtn = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular", fontSize: "", fontStyle: "", fontWeight: "" }, title: "CLICK TO ADD SOUND", top: "77%", backgroundColor: "#f2f2f2", borderColor: "gray", borderRadius: 5, color: "black", width: "70%", id: "audioSelectBtn" });
  $.__views.soundView2.add($.__views.audioSelectBtn);
  showOptions ? $.addListener($.__views.audioSelectBtn, 'click', showOptions) : __defers['$.__views.audioSelectBtn!click!showOptions'] = true;$.__views.nextBtn = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular", fontSize: "", fontStyle: "", fontWeight: "" }, title: "Next", top: "87%", backgroundColor: "#f2f2f2", borderColor: "gray", borderRadius: 5, color: "black", width: "40%", id: "nextBtn" });
  $.__views.soundView2.add($.__views.nextBtn);
  submit ? $.addListener($.__views.nextBtn, 'click', submit) : __defers['$.__views.nextBtn!click!submit'] = true;exports.destroy = function () {};

  _.extend($, $.__views);

  Alloy.Globals.OralForm = $.oralWin;

  var soundNativePath;
  var userSound;
  var oralHistoryMimeType;
  var pWidth = Ti.Platform.displayCaps.platformWidth;

  var pHeight = Ti.Platform.displayCaps.platformHeight;

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
  } else if (false) {
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
      Titanium.Media.openMusicLibrary({
        allowMultipleSelections: false,
        mediaTypes: Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC | Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO,
        success: function (event) {
          console.log("This is in digital audio format, success soundgallery" + JSON.stringify(event));

          Ti.API.debug('Our artist is: ' + event.artist);
          Titanium.API.info('audio title: ' + event.title);
          Titanium.API.info('audio url: ' + event.nativePath);

          oralHistoryMimeType = "audio/mp3";

          userSound = event.items[0];

          alert("File added. Load times vary based on connection speed.");
          $.audioSelectBtn.setTitle("Change Sound");
        },
        cancel: function () {
          alert("Aborting adding an Oral History recording from gallery");
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

      var activity = $.oralWin.getActivity();
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

        if (false) {
          var fileExt = userSound.file.name;
          fileExt = "." + fileExt.substr(fileExt.lastIndexOf('.') + 1);
          Ti.API.info("File Extension " + fileExt);
        } else {
          fileExt = "";
        }

        var currentData = {
          userPhoto: userSound,

          timePeriod: $.arti.value,
          photoDate: $.photoRecordTA.value,
          photoInterviewLocation: $.soundInterviewLocationTA.value,
          photoTitle: $.TitleLabelTA.value,
          photoFirstName: $.soundPeopleNameTA.value,
          photoLastName: $.soundPeopleNameLTA.value,
          photoPeopleNames: $.soundNameTA.value,
          photoLanguage: $.soundLangTA.value,
          photoPlace: $.soundPlaceTA.value,
          photoEventName: $.soundEventTA.value,
          photoOrg: $.soundOrgTA.value,
          photoModel: $.soundMakeTA.value,
          photoNotes: $.soundNoTA.value,
          resourceType: "Oral History",
          submitType: "Upload Image",
          photoStepNumber: 3,
          photoRights: "I have the permission of the rights owner to make this resource available through this repository.",
          photoMemberType: "No Membership",
          photoInterviewee: $.soundPeopleNameTA.value,
          photoPeople: $.soundPeopleTA.value,
          mimeType: oralHistoryMimeType,
          fileExtension: fileExt
        };

        data.setData(currentData);

        var args = {
          photoFullName: fullName,
          thisTitle: $.Title.text,

          timePeriod: $.arti.value,
          photoDate: $.photoRecordTA.value,
          photoInterviewLocation: $.soundInterviewLocationTA.value,
          photoTitle: $.TitleLabelTA.value,
          photoFirstName: $.soundPeopleNameTA.value,
          photoLastName: $.soundPeopleNameLTA.value,
          photoPeopleNames: $.soundNameTA.value,
          photoLanguage: $.soundLangTA.value,
          photoPlace: $.soundPlaceTA.value,
          photoEventName: $.soundEventTA.value,
          photoOrg: $.soundOrgTA.value,
          photoModel: $.soundMakeTA.value,
          photoNotes: $.soundNoTA.value,
          photoInterviewee: $.soundPeopleNameTA.value,
          photoPeople: $.soundPeopleTA.value,
          mimeType: oralHistoryMimeType

        };

        submissionPageController = Alloy.createController('submissionPageSound', args).getView();
        submissionPageController.open();
        submissionPageController = null;
      }
    }
  }

  function helpSubmit(e) {
    var args = {
      thisTitle: $.Title.text,
      thisTimePeriod: $.photoDate.text,
      thisItem: $.TitleLabel.text,
      thisRecordDate: $.photoRecord.text,
      thisPlace: $.soundPlace.text,
      thisName: $.soundName.text,
      thisPerson: $.soundPeopleName.text,
      thisPersonLast: $.soundPeopleNameL.text,
      thisOrg: $.soundOrg.text,
      thisPeopleDiscuss: $.soundPeople.text,
      thisInterviewPlace: $.soundInterviewLocation.text,
      thisRecordEvent: $.soundEvent.text,
      thisLanguage: $.soundLang.text,
      thisMake: $.soundMake.text,
      thisNote: $.soundNotes.text,
      thisButtonID: e.source.id
    };

    alertController = Alloy.createController('helpNote', args).getView();
    alertController.open();
    alertController = null;
  }

  function backButton(e) {
    $.oralWin.close();
  }

  __defers['$.__views.back!click!backButton'] && $.addListener($.__views.back, 'click', backButton);__defers['$.__views.PDDhelpButton!click!helpSubmit'] && $.addListener($.__views.PDDhelpButton, 'click', helpSubmit);__defers['$.__views.PRhelpButton!click!helpSubmit'] && $.addListener($.__views.PRhelpButton, 'click', helpSubmit);__defers['$.__views.PILhelpButton!click!helpSubmit'] && $.addListener($.__views.PILhelpButton, 'click', helpSubmit);__defers['$.__views.PThelpButton!click!helpSubmit'] && $.addListener($.__views.PThelpButton, 'click', helpSubmit);__defers['$.__views.PNhelpButton!click!helpSubmit'] && $.addListener($.__views.PNhelpButton, 'click', helpSubmit);__defers['$.__views.PLNhelpButton!click!helpSubmit'] && $.addListener($.__views.PLNhelpButton, 'click', helpSubmit);__defers['$.__views.PPLhelpButton!click!helpSubmit'] && $.addListener($.__views.PPLhelpButton, 'click', helpSubmit);__defers['$.__views.PESNhelpButton!click!helpSubmit'] && $.addListener($.__views.PESNhelpButton, 'click', helpSubmit);__defers['$.__views.PPehelpButton!click!helpSubmit'] && $.addListener($.__views.PPehelpButton, 'click', helpSubmit);__defers['$.__views.POhelpButton!click!helpSubmit'] && $.addListener($.__views.POhelpButton, 'click', helpSubmit);__defers['$.__views.PMhelpButton!click!helpSubmit'] && $.addListener($.__views.PMhelpButton, 'click', helpSubmit);__defers['$.__views.PNohelpButton!click!helpSubmit'] && $.addListener($.__views.PNohelpButton, 'click', helpSubmit);__defers['$.__views.audioSelectBtn!click!showOptions'] && $.addListener($.__views.audioSelectBtn, 'click', showOptions);__defers['$.__views.nextBtn!click!submit'] && $.addListener($.__views.nextBtn, 'click', submit);

  _.extend($, exports);
}

module.exports = Controller;