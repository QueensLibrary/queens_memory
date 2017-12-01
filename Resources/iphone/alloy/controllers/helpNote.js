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
  this.__controllerPath = 'helpNote';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.helpNoteWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], id: "helpNoteWin", theme: "mytheme" });
  $.__views.helpNoteWin && $.addTopLevelView($.__views.helpNoteWin);
  $.__views.helpNoteView = Ti.UI.createView({ backgroundColor: "black", opacity: 0.99, top: "0%", modal: true, id: "helpNoteView" });
  $.__views.helpNoteWin.add($.__views.helpNoteView);
  $.__views.navBar = Ti.UI.createView({ backgroundColor: "black", top: "0%", width: "100%", height: "5%", font: { fontSize: 14 }, zIndex: 0, id: "navBar" });
  $.__views.helpNoteView.add($.__views.navBar);
  $.__views.QL = Ti.UI.createImageView({ width: "34%", top: "26%", id: "QL", image: "/images/QL300.png" });
  $.__views.navBar.add($.__views.QL);
  $.__views.titleBan = Ti.UI.createView({ backgroundColor: "white", top: "5%", height: "11%", font: { fontSize: 12 }, id: "titleBan" });
  $.__views.helpNoteView.add($.__views.titleBan);
  $.__views.qp = Ti.UI.createImageView({ top: "11%", width: "30%", left: "7%", id: "qp", image: "/images/QM_FINAL_outlines.png" });
  $.__views.titleBan.add($.__views.qp);
  $.__views.Title = Ti.UI.createLabel({ font: { fontFamily: "Montserrat-Regular", fontWeight: "bold", fontSize: 18 }, top: "20%", left: "60%", color: "black", textAlign: "Titanium.UI.TEXT_ALIGNMENT_RIGHT", text: 'Title', id: "Title" });
  $.__views.titleBan.add($.__views.Title);
  $.__views.helpLogo = Ti.UI.createButton({ font: { fontFamily: "Entypo", fontSize: 80 }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, color: "white", top: "20%", left: "5%", title: 'b', id: "helpLogo" });
  $.__views.helpNoteView.add($.__views.helpLogo);
  $.__views.helpTitle = Ti.UI.createLabel({ font: { fontFamily: "Monsterrat", fontWeight: "bold", fontSize: 30 }, color: "white", top: "25%", left: "20%", text: 'Help Note', id: "helpTitle" });
  $.__views.helpNoteView.add($.__views.helpTitle);
  $.__views.Field = Ti.UI.createLabel({ font: { fontFamily: "Monsterrat", fontWeight: "bold", fontSize: 16 }, color: "white", left: "5%", top: "36%", text: 'Field of helpButton', id: "Field" });
  $.__views.helpNoteView.add($.__views.Field);
  $.__views.helpNoteText = Ti.UI.createLabel({ font: { fontFamily: "Monsterrat", fontWeight: "bold", fontSize: 16 }, color: "white", left: "5%", top: "45%", text: 'HELP TEXT', id: "helpNoteText" });
  $.__views.helpNoteView.add($.__views.helpNoteText);
  $.__views.submit = Ti.UI.createButton({ font: { fontFamily: "Montserrat-Regular" }, textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER, title: 'Dismiss', top: "80%", width: "400px", borderRadius: 5, borderColor: "gray", backgroundColor: "#f2f2f2", color: "black", id: "submit" });
  $.__views.helpNoteView.add($.__views.submit);
  stopMe ? $.addListener($.__views.submit, 'click', stopMe) : __defers['$.__views.submit!click!stopMe'] = true;exports.destroy = function () {};

  _.extend($, $.__views);

  var args = arguments[0] || {};

  $.Title.text = args.thisTitle || "Error, most likely";
  console.log("Original Title of helpnote is: " + $.Title.text);

  if (true) {
    $.QL.image = 'QL300.png';
    $.qp.image = 'QM_FINAL_outlines.png';
  } else if (false) {
    $.QL.image = '/images/QL300.png';
    $.qp.image = '/images/QM_FINAL_outlines.png';
  }

  switch (args.thisTitle) {
    case "Digital Photo":

      console.log("In Digital Photo!");

      if (args.thisButtonID == 'PDhelpButton') {
        $.Field.text = args.thisDate;
        $.helpNoteText.text = "Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PThelpButton') {

        $.Field.text = args.thisItem;
        $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PPhelpButton') {
        $.Field.text = args.thisPlace;
        $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PNFhelpButton') {
        $.Field.text = args.thisFirstName;
        $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PNhelpButton') {
        $.Field.text = args.thisName;
        $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PPNhelpButton') {
        $.Field.text = args.thisPerson;
        $.helpNoteText.text = "Format [Last name, First name]";
      } else if (args.thisButtonID == 'PENhelpButton') {
        $.Field.text = args.thisEvent;
        $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
      } else if (args.thisButtonID == 'POhelpButton') {
        $.Field.text = args.thisOrg;
        $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
      } else if (args.thisButtonID == 'PMhelpButton') {
        $.Field.text = args.thisMake;
        $.helpNoteText.text = "Examples: Kodak EasyShare camera, Adobe Photoshop";
      } else if (args.thisButtonID == 'PNohelpButton') {
        $.Field.text = args.thisNote;
        $.helpNoteText.text = "Context for this photo, relationship between photographer and the subject of the photo, description of events in the photo, etc. OR if unknown, write 'Unknown' ";
      } else break;

      break;

    case "Scanned Item":
      console.log("In Scanned Item!");

      if (args.thisButtonID == 'PDhelpButton') {
        $.Field.text = args.thisDate;
        $.helpNoteText.text = "Examples: Date original photo was taken, or the date a program was printed  Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PThelpButton') {

        $.Field.text = args.thisItem;
        $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PNFhelpButton') {
          $.Field.text = args.thisName;
          $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
        } else if (args.thisButtonID == 'PNhelpButton') {
          $.Field.text = args.thisName;
          $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
        } else if (args.thisButtonID == 'PPNhelpButton') {
          $.Field.text = args.thisPerson;
          $.helpNoteText.text = "Format [Last name, First name]";
        } else if (args.thisButtonID == 'PENhelpButton') {
          $.Field.text = args.thisEvent;
          $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
        } else if (args.thisButtonID == 'POhelpButton') {
          $.Field.text = args.thisOrg;
          $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
        } else if (args.thisButtonID == 'PMhelpButton') {
          $.Field.text = args.thisMake;
          $.helpNoteText.text = "Examples: Epsom model 2380, Adobe Photoshop";
        } else if (args.thisButtonID == 'PLochelpButton') {
          $.Field.text = args.thisDepict;
          $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown'";
        } else if (args.thisButtonID == 'PMehelpButton') {
          $.Field.text = args.thisMeasure;
          $.helpNoteText.text = "Format: [5 x 8 inches]";
        } else if (args.thisButtonID == 'PNohelpButton') {
          $.Field.text = args.thisNote;
          $.helpNoteText.text = "Context for this item, relationship between the creator and the subject, description of related events, etc. OR if unknown, write 'Unknown'";
        } else break;

      break;

    case "Oral History":

      console.log("In Oral History!");

      if (args.thisButtonID == 'PDDhelpButton') {

        $.Field.text = args.thisTimePeriod;
        $.helpNoteText.text = "Can be specific events (ex: WWII), or decades (ex: 1930-1990) OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PThelpButton') {

        $.Field.text = args.thisItem;
        $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PRhelpButton') {
        $.Field.text = args.thisRecordDate;
        $.helpNoteText.text = "Format: [Month DD YYYY]";
      } else if (args.thisButtonID == 'PNhelpButton') {
        $.Field.text = args.thisName;
        $.helpNoteText.text = "Format [Last name, First name] ";
      } else if (args.thisButtonID == 'PPNhelpButton') {
        $.Field.text = args.thisPerson;
        $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PPNLhelpButton') {
        $.Field.text = args.thisPersonLast;
        $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'POhelpButton') {
        $.Field.text = args.thisOrg;
        $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
      } else if (args.thisButtonID == 'PPehelpButton') {
        $.Field.text = args.thisPeopleDiscuss;
        $.helpNoteText.text = "Name(s) of person/people discussed in the interview: Format [Last name, First name]";
      } else if (args.thisButtonID == 'PPLhelpButton') {
        $.Field.text = args.thisPlace;
        $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PILhelpButton') {
        $.Field.text = args.thisInterviewPlace;
        $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PESNhelpButton') {
        $.Field.text = args.thisRecordEvent;
        $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PLNhelpButton') {
        $.Field.text = args.thisLanguage;
        $.helpNoteText.text = "The Language this interview was taken in  ";
      } else if (args.thisButtonID == 'PMhelpButton') {
        $.Field.text = args.thisMake;
        $.helpNoteText.text = "Examples: iphone, Zoom H2 digital audio recorder";
      } else if (args.thisButtonID == 'PNohelpButton') {
        $.Field.text = args.thisNote;
        $.helpNoteText.text = "Context for this interview, relationship between the interviewee and the interviewer or subjects of the interview, description of related events, etc.  OR if unknown, write 'Unknown'";
      } else break;
      break;

    case "Wild Sound":

      console.log("In Wild Sound!");

      if (args.thisButtonID == 'PDhelpButton') {
        $.Field.text = args.thisDate;
        $.helpNoteText.text = "Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
      } else if (args.thisButtonID == 'PDDhelpButton') {

        $.Field.text = args.thisTimePeriod;
        $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown'";
      } else if (args.thisButtonID == 'PThelpButton') {

        $.Field.text = args.thisItem;
        $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown'";
      } else if (args.thisButtonID == 'PNhelpButton') {
        $.Field.text = args.thisName;
        $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown'";
      } else if (args.thisButtonID == 'PNLhelpButton') {
        $.Field.text = args.thisNameLast;
        $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown'";
      } else if (args.thisButtonID == 'PESNhelpButton') {
        $.Field.text = args.thisRecordEvent;
        $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
      } else if (args.thisButtonID == 'PPehelpButton') {
        $.Field.text = args.thisPeopleDiscuss;
        $.helpNoteText.text = "Example: The names of musicians if you record them performing";
      } else if (args.thisButtonID == 'POhelpButton') {
        $.Field.text = args.thisOrg;
        $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
      } else if (args.thisButtonID == 'PMhelpButton') {
        $.Field.text = args.thisMake;
        $.helpNoteText.text = "Examples: iphone, Zoom H2 digital audio recorder";
      } else if (args.thisButtonID == 'PNohelpButton') {
        $.Field.text = args.thisNote;
        $.helpNoteText.text = "Context for this recording, description of related events, etc. OR if unknown, write 'Unknown'";
      } else break;
      break;

    case "Terms & Conditions":
      console.log("In terms!");

      if (args.thisButtonID == 'EmailhelpButton') {
        $.Field.text = args.thisField;
        $.helpNoteText.text = "The App team will notify you by email once your submission is live on the  App's website.";
      } else break;
      break;

    case "":
      if (args.thisDate) {
        $.Field.text = args.thisDate;
        $.helpNoteText.text = "The date should be in this format: [Month DD YYYY]";
      } else break;

      break;

  }

  function backButton(e) {
    $.helpNoteWin.close();
  }

  function slideMenu(e) {
    menuController = Alloy.createController('leftmenu').getView();
    menuController.open();
  }

  function stopMe(e) {
    $.helpNoteWin.close();
  }

  __defers['$.__views.submit!click!stopMe'] && $.addListener($.__views.submit, 'click', stopMe);

  _.extend($, exports);
}

module.exports = Controller;