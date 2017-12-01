function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function stopMe(e) {
        $.helpNoteWin.close();
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "helpNote";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.helpNoteWin = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "helpNoteWin",
        theme: "mytheme"
    });
    $.__views.helpNoteWin && $.addTopLevelView($.__views.helpNoteWin);
    $.__views.helpNoteView = Ti.UI.createView({
        backgroundColor: "black",
        opacity: .99,
        top: "0%",
        modal: true,
        id: "helpNoteView"
    });
    $.__views.helpNoteWin.add($.__views.helpNoteView);
    $.__views.navBar = Ti.UI.createView({
        backgroundColor: "black",
        top: "0%",
        width: "100%",
        height: "15%",
        font: {
            fontSize: 14
        },
        zIndex: 0,
        id: "navBar"
    });
    $.__views.helpNoteView.add($.__views.navBar);
    $.__views.QL = Ti.UI.createImageView({
        width: "33%",
        top: "15%",
        id: "QL",
        image: "/images/QL300.png"
    });
    $.__views.navBar.add($.__views.QL);
    $.__views.titleBan = Ti.UI.createView({
        backgroundColor: "white",
        top: "10%",
        height: "11%",
        font: {
            fontSize: 12
        },
        id: "titleBan"
    });
    $.__views.helpNoteView.add($.__views.titleBan);
    $.__views.qp = Ti.UI.createImageView({
        top: "14%",
        width: "30%",
        left: "7%",
        id: "qp",
        image: "/images/QM_FINAL_outlines.png"
    });
    $.__views.titleBan.add($.__views.qp);
    $.__views.Title = Ti.UI.createLabel({
        font: {
            fontFamily: "Montserrat-Regular",
            fontWeight: "bold",
            fontSize: 18
        },
        top: "20%",
        left: "60%",
        color: "black",
        textAlign: "Titanium.UI.TEXT_ALIGNMENT_RIGHT",
        text: "Title",
        id: "Title"
    });
    $.__views.titleBan.add($.__views.Title);
    $.__views.helpLogo = Ti.UI.createButton({
        font: {
            fontFamily: "Entypo",
            fontSize: 60
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "white",
        top: "25%",
        left: "0%",
        title: "b",
        id: "helpLogo"
    });
    $.__views.helpNoteView.add($.__views.helpLogo);
    $.__views.helpTitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Monsterrat",
            fontWeight: "bold",
            fontSize: 30
        },
        color: "white",
        top: "25.5%",
        left: "20%",
        text: "Help Note",
        id: "helpTitle"
    });
    $.__views.helpNoteView.add($.__views.helpTitle);
    $.__views.Field = Ti.UI.createLabel({
        font: {
            fontFamily: "Monsterrat",
            fontWeight: "bold",
            fontSize: 16
        },
        color: "white",
        left: "5%",
        top: "36%",
        text: "Field of helpButton",
        id: "Field"
    });
    $.__views.helpNoteView.add($.__views.Field);
    $.__views.helpNoteText = Ti.UI.createLabel({
        font: {
            fontFamily: "Monsterrat",
            fontWeight: "bold",
            fontSize: 16
        },
        color: "white",
        left: "5%",
        top: "45%",
        text: "HELP TEXT",
        id: "helpNoteText"
    });
    $.__views.helpNoteView.add($.__views.helpNoteText);
    $.__views.submit = Ti.UI.createButton({
        font: {
            fontFamily: "Montserrat-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        title: "Dismiss",
        top: "80%",
        width: "400px",
        borderRadius: 5,
        borderColor: "gray",
        backgroundColor: "#f2f2f2",
        color: "black",
        id: "submit"
    });
    $.__views.helpNoteView.add($.__views.submit);
    stopMe ? $.addListener($.__views.submit, "click", stopMe) : __defers["$.__views.submit!click!stopMe"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.Title.text = args.thisTitle || "Error, most likely";
    console.log("Original Title of helpnote is: " + $.Title.text);
    $.QL.image = "/images/QL300.png";
    $.qp.image = "/images/QM_FINAL_outlines.png";
    switch (args.thisTitle) {
      case "Digital Photo":
        console.log("In Digital Photo!");
        if ("PDhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisDate;
            $.helpNoteText.text = "Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
        } else if ("PThelpButton" == args.thisButtonID) {
            $.Field.text = args.thisItem;
            $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";
        } else if ("PPhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPlace;
            $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
        } else if ("PNFhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisFirstName;
            $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
        } else if ("PNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisName;
            $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
        } else if ("PPNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPerson;
            $.helpNoteText.text = "Format [Last name, First name]";
        } else if ("PENhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisEvent;
            $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
        } else if ("POhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisOrg;
            $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
        } else if ("PMhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisMake;
            $.helpNoteText.text = "Examples: Kodak EasyShare camera, Adobe Photoshop";
        } else {
            if ("PNohelpButton" != args.thisButtonID) break;
            $.Field.text = args.thisNote;
            $.helpNoteText.text = "Context for this photo, relationship between photographer and the subject of the photo, description of events in the photo, etc. OR if unknown, write 'Unknown' ";
        }
        break;

      case "Scanned Item":
        console.log("In Scanned Item!");
        if ("PDhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisDate;
            $.helpNoteText.text = "Examples: Date original photo was taken, or the date a program was printed  Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
        } else if ("PThelpButton" == args.thisButtonID) {
            $.Field.text = args.thisItem;
            $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";
        } else if ("PNFhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisName;
            $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
        } else if ("PNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisName;
            $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
        } else if ("PPNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPerson;
            $.helpNoteText.text = "Format [Last name, First name]";
        } else if ("PENhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisEvent;
            $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
        } else if ("POhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisOrg;
            $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
        } else if ("PMhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisMake;
            $.helpNoteText.text = "Examples: Epsom model 2380, Adobe Photoshop";
        } else if ("PLochelpButton" == args.thisButtonID) {
            $.Field.text = args.thisDepict;
            $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown'";
        } else if ("PMehelpButton" == args.thisButtonID) {
            $.Field.text = args.thisMeasure;
            $.helpNoteText.text = "Format: [5 x 8 inches]";
        } else {
            if ("PNohelpButton" != args.thisButtonID) break;
            $.Field.text = args.thisNote;
            $.helpNoteText.text = "Context for this item, relationship between the creator and the subject, description of related events, etc. OR if unknown, write 'Unknown'";
        }
        break;

      case "Oral History":
        console.log("In Oral History!");
        if ("PDDhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisTimePeriod;
            $.helpNoteText.text = "Can be specific events (ex: WWII), or decades (ex: 1930-1990) OR if unknown, write 'Unknown' ";
        } else if ("PThelpButton" == args.thisButtonID) {
            $.Field.text = args.thisItem;
            $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";
        } else if ("PRhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisRecordDate;
            $.helpNoteText.text = "Format: [Month DD YYYY]";
        } else if ("PNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisName;
            $.helpNoteText.text = "Format [Last name, First name] ";
        } else if ("PPNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPerson;
            $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
        } else if ("PPNLhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPersonLast;
            $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
        } else if ("POhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisOrg;
            $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
        } else if ("PPehelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPeopleDiscuss;
            $.helpNoteText.text = "Name(s) of person/people discussed in the interview: Format [Last name, First name]";
        } else if ("PPLhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPlace;
            $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
        } else if ("PILhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisInterviewPlace;
            $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
        } else if ("PESNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisRecordEvent;
            $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities OR if unknown, write 'Unknown' ";
        } else if ("PLNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisLanguage;
            $.helpNoteText.text = "The Language this interview was taken in  ";
        } else if ("PMhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisMake;
            $.helpNoteText.text = "Examples: iphone, Zoom H2 digital audio recorder";
        } else {
            if ("PNohelpButton" != args.thisButtonID) break;
            $.Field.text = args.thisNote;
            $.helpNoteText.text = "Context for this interview, relationship between the interviewee and the interviewer or subjects of the interview, description of related events, etc.  OR if unknown, write 'Unknown'";
        }
        break;

      case "Wild Sound":
        console.log("In Wild Sound!");
        if ("PDhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisDate;
            $.helpNoteText.text = "Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
        } else if ("PDDhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisTimePeriod;
            $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown'";
        } else if ("PThelpButton" == args.thisButtonID) {
            $.Field.text = args.thisItem;
            $.helpNoteText.text = "Name this item OR if unknown, write 'Unknown'";
        } else if ("PNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisName;
            $.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown'";
        } else if ("PNLhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisNameLast;
            $.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown'";
        } else if ("PESNhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisRecordEvent;
            $.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
        } else if ("PPehelpButton" == args.thisButtonID) {
            $.Field.text = args.thisPeopleDiscuss;
            $.helpNoteText.text = "Example: The names of musicians if you record them performing";
        } else if ("POhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisOrg;
            $.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
        } else if ("PMhelpButton" == args.thisButtonID) {
            $.Field.text = args.thisMake;
            $.helpNoteText.text = "Examples: iphone, Zoom H2 digital audio recorder";
        } else {
            if ("PNohelpButton" != args.thisButtonID) break;
            $.Field.text = args.thisNote;
            $.helpNoteText.text = "Context for this recording, description of related events, etc. OR if unknown, write 'Unknown'";
        }
        break;

      case "Terms & Conditions":
        console.log("In terms!");
        if ("EmailhelpButton" != args.thisButtonID) break;
        $.Field.text = args.thisField;
        $.helpNoteText.text = "The App team will notify you by email once your submission is live on the  App's website.";
        break;

      case "":
        if (!args.thisDate) break;
        $.Field.text = args.thisDate;
        $.helpNoteText.text = "The date should be in this format: [Month DD YYYY]";
    }
    __defers["$.__views.submit!click!stopMe"] && $.addListener($.__views.submit, "click", stopMe);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;