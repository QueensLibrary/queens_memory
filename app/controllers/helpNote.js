// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};
// var args;
// var titles = $.helpNoteWin.getParent();
// console.log("Original Title of helpnote is: " + $.Title.text + " getting title: " + titles);
$.Title.text = args.thisTitle || "Error, most likely";
console.log("Original Title of helpnote is: " + $.Title.text);


if (OS_IOS){
	$.QL.image = 'QL300.png';
	$.qp.image = 'QM_FINAL_outlines.png';
	
	}
else if (OS_ANDROID){
	$.QL.image = '/images/QL300.png';
	$.qp.image = '/images/QM_FINAL_outlines.png';
	}

// var Button = false;

switch(args.thisTitle){
	case "Digital Photo":
	
	console.log("In Digital Photo!"); 
	
		if(args.thisButtonID == 'PDhelpButton'){
			$.Field.text = args.thisDate;
			$.helpNoteText.text = "Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
			//The date should be in this format: [Month DD YYYY]
			
		} 
		else if (args.thisButtonID == 'PThelpButton'){

			$.Field.text = args.thisItem;
			$.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";

			
		} 
		else if (args.thisButtonID == 'PPhelpButton'){
			$.Field.text = args.thisPlace;
			$.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
		
		} 
		else if (args.thisButtonID == 'PNFhelpButton'){
			$.Field.text = args.thisFirstName;
			$.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
			//The name of the photographer in the format: Format [Last name, First name]
		} 
		else if (args.thisButtonID == 'PNhelpButton'){
			$.Field.text = args.thisName;
			$.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
			//The name of the photographer in the format: Format [Last name, First name]
		} 
		else if (args.thisButtonID == 'PPNhelpButton'){
			$.Field.text = args.thisPerson;
			$.helpNoteText.text = "Format [Last name, First name]";
			//The name of the people represented in the photograph should be in the format: Format [Last name, First name]
		} 
		else if (args.thisButtonID == 'PENhelpButton'){
			$.Field.text = args.thisEvent;
			$.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
			//Ask Natalie	
		} 
		else if (args.thisButtonID == 'POhelpButton'){
			$.Field.text = args.thisOrg;
			$.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";	
		} 
		else if (args.thisButtonID == 'PMhelpButton'){
			$.Field.text = args.thisMake;
			$.helpNoteText.text = "Examples: Kodak EasyShare camera, Adobe Photoshop";
		} 
		else if(args.thisButtonID == 'PNohelpButton'){
			$.Field.text = args.thisNote;
			$.helpNoteText.text = "Context for this photo, relationship between photographer and the subject of the photo, description of events in the photo, etc. OR if unknown, write 'Unknown' ";	
		} 
		else break;
		
	break;
	
	case "Scanned Item":
		// $.Field.text = "Field: Scanned Item!";
		console.log("In Scanned Item!");
		
		if(args.thisButtonID == 'PDhelpButton'){
			$.Field.text = args.thisDate;
			$.helpNoteText.text = "Examples: Date original photo was taken, or the date a program was printed  Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";
			
		} 
		else if (args.thisButtonID == 'PThelpButton'){

			$.Field.text = args.thisItem;
			$.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";

			
		} 
		// else if (args.thisButtonID == 'PPhelpButton'){
			// $.Field.text = args.thisPlace;
			// $.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code]";
			// For definitions of these materials and more options, visit:    http://memory.loc.gov/ammem/techdocs/genre.html
			//OR if unknown, write 'Unknown'
			
			//SHOULD BE TYPE OF ARTIFACT
// 		
		// } 
		else if (args.thisButtonID == 'PNFhelpButton'){
			$.Field.text = args.thisName;
			$.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";

		} 
		else if (args.thisButtonID == 'PNhelpButton'){
			$.Field.text = args.thisName;
			$.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";

		} 
		else if (args.thisButtonID == 'PPNhelpButton'){
			$.Field.text = args.thisPerson;
			$.helpNoteText.text = "Format [Last name, First name]";

		} 
		else if (args.thisButtonID == 'PENhelpButton'){
			$.Field.text = args.thisEvent;
			$.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities";
	
		} 
		else if (args.thisButtonID == 'POhelpButton'){
			$.Field.text = args.thisOrg;
			$.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
			
		} 
		else if (args.thisButtonID == 'PMhelpButton'){
			$.Field.text = args.thisMake;
			$.helpNoteText.text = "Examples: Epsom model 2380, Adobe Photoshop";
	
		}
		else if (args.thisButtonID == 'PLochelpButton'){
			$.Field.text = args.thisDepict;
			$.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown'";

		} 
		else if (args.thisButtonID == 'PMehelpButton'){
			$.Field.text = args.thisMeasure;
			$.helpNoteText.text = "Format: [5 x 8 inches]";

		} 
		else if(args.thisButtonID == 'PNohelpButton'){
			$.Field.text = args.thisNote;
			$.helpNoteText.text = "Context for this item, relationship between the creator and the subject, description of related events, etc. OR if unknown, write 'Unknown'";
			
		} 
		else break;
		
	break;
	
	case "Oral History":
		// $.Field.text = "Oral!";
		
		console.log("In Oral History!");
		
		// if(args.thisButtonID == 'PDhelpButton'){
			// $.Field.text = args.thisDate;
			// $.helpNoteText.text = "Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";	
		// } 
		
		 if (args.thisButtonID == 'PDDhelpButton'){

			$.Field.text = args.thisTimePeriod;
			$.helpNoteText.text = "Can be specific events (ex: WWII), or decades (ex: 1930-1990) OR if unknown, write 'Unknown' ";

			
		} 
		else if (args.thisButtonID == 'PThelpButton'){

			$.Field.text = args.thisItem;
			$.helpNoteText.text = "Name this item OR if unknown, write 'Unknown' ";

			
		} 
		else if (args.thisButtonID == 'PRhelpButton'){
			$.Field.text = args.thisRecordDate;
			$.helpNoteText.text = "Format: [Month DD YYYY]"; //FIX
		
		} 
		
		else if (args.thisButtonID == 'PNhelpButton'){
			$.Field.text = args.thisName;
			$.helpNoteText.text = "Format [Last name, First name] ";
			//The name of the photographer in the format: Format [Last name, First name]
			
		} 
		else if (args.thisButtonID == 'PPNhelpButton'){
			$.Field.text = args.thisPerson;
			$.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown' ";
			//The name of the people represented in the photograph should be in the format: Format [Last name, First name]
		
		
		} 
		else if (args.thisButtonID == 'PPNLhelpButton'){
			$.Field.text = args.thisPersonLast;
			$.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown' ";
			//The name of the people represented in the photograph should be in the format: Format [Last name, First name]
		
		
		} 
		else if (args.thisButtonID == 'POhelpButton'){
			$.Field.text = args.thisOrg;
			$.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
			
		} 
		else if (args.thisButtonID == 'PPehelpButton'){
			$.Field.text = args.thisPeopleDiscuss;
			$.helpNoteText.text = "Name(s) of person/people discussed in the interview: Format [Last name, First name]"; //FIX
			
		} 
		else if (args.thisButtonID == 'PPLhelpButton'){
			$.Field.text = args.thisPlace;
			$.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
		
		} 
		else if (args.thisButtonID == 'PILhelpButton'){
			$.Field.text = args.thisInterviewPlace;
			$.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown' ";
		//FIX
		} 
		
		else if (args.thisButtonID == 'PESNhelpButton'){
			$.Field.text = args.thisRecordEvent;
			$.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities OR if unknown, write 'Unknown' "; //FIX
		
		} 
		else if (args.thisButtonID == 'PLNhelpButton'){
			$.Field.text = args.thisLanguage;
			$.helpNoteText.text = "The Language this interview was taken in  "; //FIX
		
		} 
		else if (args.thisButtonID == 'PMhelpButton'){
			$.Field.text = args.thisMake;
			$.helpNoteText.text = "Examples: iphone, Zoom H2 digital audio recorder";

		} 
		else if(args.thisButtonID == 'PNohelpButton'){
			$.Field.text = args.thisNote;
			$.helpNoteText.text = "Context for this interview, relationship between the interviewee and the interviewer or subjects of the interview, description of related events, etc.  OR if unknown, write 'Unknown'";
			
		} 
		else break;
		break;
		
		
	case "Wild Sound":
		// $.Field.text = "Wild!";
		
		console.log("In Wild Sound!");
		
		if(args.thisButtonID == 'PDhelpButton'){
			$.Field.text = args.thisDate;
			$.helpNoteText.text = "Format: [Month DD YYYY] OR if unknown, write 'Unknown' ";	
		} 
		else if (args.thisButtonID == 'PDDhelpButton'){

			$.Field.text = args.thisTimePeriod;
			$.helpNoteText.text = "Be as specific as possible, mailing address or closest intersection. Format: [Street, City, State, Zip code] OR if unknown, write 'Unknown'";
		} 
		else if (args.thisButtonID == 'PThelpButton'){

			$.Field.text = args.thisItem;
			$.helpNoteText.text = "Name this item OR if unknown, write 'Unknown'";	
		} 
		else if (args.thisButtonID == 'PNhelpButton'){
			$.Field.text = args.thisName;
			$.helpNoteText.text = "Format [First name] OR if unknown, write 'Unknown'";
		
		} 
		else if (args.thisButtonID == 'PNLhelpButton'){
			$.Field.text = args.thisNameLast;
			$.helpNoteText.text = "Format [Last name] OR if unknown, write 'Unknown'";
		
		} 
		else if (args.thisButtonID == 'PESNhelpButton'){
			$.Field.text = args.thisRecordEvent;
			$.helpNoteText.text = "Examples: St. Patrick's Day parade, wedding festivities"; //FIX
		
		} 
		else if (args.thisButtonID == 'PPehelpButton'){
			$.Field.text = args.thisPeopleDiscuss;
			$.helpNoteText.text = "Example: The names of musicians if you record them performing"; //FIX
			
		} 
		else if (args.thisButtonID == 'POhelpButton'){
			$.Field.text = args.thisOrg;
			$.helpNoteText.text = "Examples: P.S. 124, Queens Library at Sunnyside, Greater Astoria Historical Society";
			
		} 
		else if (args.thisButtonID == 'PMhelpButton'){
			$.Field.text = args.thisMake;
			$.helpNoteText.text = "Examples: iphone, Zoom H2 digital audio recorder";
		
			
		} 
		else if(args.thisButtonID == 'PNohelpButton'){
			$.Field.text = args.thisNote;
			$.helpNoteText.text = "Context for this recording, description of related events, etc. OR if unknown, write 'Unknown'";
			
		} 
		else break;
		break;
		
	case "Terms & Conditions":
		// $.Field.text = "Terms!";
		console.log("In terms!");
		
		if(args.thisButtonID == 'EmailhelpButton'){ ////FIX THISSS
			$.Field.text = args.thisField;
			$.helpNoteText.text = "The App team will notify you by email once your submission is live on the  App's website.";	
		}
		else break;
		break;
		
	case "":
		// $.Field.text = "Upload!";
		if(args.thisDate){
			$.Field.text = args.thisDate;
			$.helpNoteText.text = "The date should be in this format: [Month DD YYYY]";
		}
		else break;
		
		break;
	
}


function backButton(e){
	$.helpNoteWin.close();
}

function slideMenu(e){
	menuController = Alloy.createController('leftmenu').getView();
	menuController.open();
}


function stopMe(e) {
	$.helpNoteWin.close();
}

