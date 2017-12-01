// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
// var args = $.args;

var formatsController;
var stayConnectedController;
var args = arguments[0] || {};
var is_open =false;

// var rContainerController;

	// rContainerController = Alloy.createController('sliderMenu').getView();
	// rContainerController.open();

var TnC = Titanium.UI.createButton({});
TnC.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
   console.log('In sliderMenu.js');
   
   
});




// rContainerController.addEventListener('swipe', function(e){
	// alert('You swiped to the '+e.direction);
// });


function openFormatView(e) {
	formatsController = Alloy.createController('acceptedFormats').getView();
	formatsController.open();
	console.log('sliderMenu.js, open formats view');
}

function stayConnect(e) {
	stayConnectedController = Alloy.createController('stayConnected').getView();
	stayConnectedController.open();
}

function doAnimation() {
	console.log("Is this even reaching in here???");
	console.log("Is this false? is_open: " + is_open);
	is_open = true;
	
	// TnC.addEventListener
	console.log("Is this true? is_open: " + is_open);
	if( is_open){
	
	$.mover.animate(Ti.UI.createAnimation({
	duration: 1500,
	right: 0,
	// width:'50%',
	// width:'15%',
	// height: '100%',
	// height: '50%',
	
	// height: Titanium.UI.FULL,
	// top: '0%',    
	}));   
	
	//is_open = false; 
	}
	
	// else{
		
		
		// $.mover.animate(Ti.UI.createAnimation({
		// duration: 1500,
		// right: 0,
		// width:'0',
		// height: '0'
		// height: Titanium.UI.FULL,
		// top: '0%',    
		// }));   
	// }
}

function closeAnimation() {
	$.mover.animate(Ti.UI.createAnimation({
	duration: 1500,
	right: 0,
	width:'0',
	height: '0'
	// height: Titanium.UI.FULL,
	// top: '0%',    
	}));    
}

