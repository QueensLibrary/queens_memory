// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


function openFacebook(e){
	
	Titanium.Platform.openURL("https://www.facebook.com/queensmemory/");
}

function openTwitter(e){
	
	Titanium.Platform.openURL("https://twitter.com/QueensMemory");
	
}

function openInstagram(e){
	
	
}

function openLinkedIn(e){
	
	
}

function openTumblr(e){
	
	
}

function openPinterest(e){
	
	
}

function backButton(e){
	$.connectWin.close();
}

function doAnimation() {
	
	// sliderController = Alloy.createController("sliderMenu").getView();
// 	
	// //messes up on this console.log...
	// // console.log("sliderMenu opening up? tis doAnimation);
// 	
	// sliderController.open();	  
}