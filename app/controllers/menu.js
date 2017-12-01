
// var activityWindow = require("ActivityWindow");
var helperLib = require('menuLib');
// var loginLib = require('commonLibraries/loginLib');

var selectedItem, previousSelectedItem;
var itemControllers = [];
var parent;
const MENU_STATES = {
    COLLAPSED : 0,
    EXPANDED : 1
};

$.menuState = MENU_STATES.COLLAPSED;
// var loginLib = require('commonLibraries/loginLib');

var menuItemsArray = helperLib.menuItemsArray;


// try to see if the user is logged in
// var currentUser = Alloy.Models.instance('User');

var menuItems;

function openMenu(){
	var menuView = $.getView();
    // stage it one screen length to the right
    menuView.right = '-100%';
    menuView.left = '100%';
    // animate over 300ms to the true left and right edges
    menuView.animate({
        duration : '300',
        left : 0,
        right : 0
    });
    Ti.API.info('OPEN MENU');
    $.menuState = MENU_STATES.EXPANDED;
}

function closeMenu(){
    var menuView = $.getView();
    menuView.animate({
        duration : '300',
        left : "100%",
        right : "-100%"
    });
    Ti.API.info('CLOSE MENU');
    $.menuState = MENU_STATES.COLLAPSED;
}
$.closeMenu = closeMenu;


$.toggleMenu = function(){
	Ti.API.info('MENU IS ' + $.menuState);
	if ($.menuState == MENU_STATES.COLLAPSED){
		Ti.API.info('OPEN MENU');
		openMenu();
	}
	else{
		Ti.API.info('CLOSE MENU');
		closeMenu();
	}
};

// present a different menu if the user is currently logged in
$.resetMenu = function(){
	
	/** 
	 * Makes this function idempotent. 
	 * Each time $.resetMenu() is called, a set of menu items is appended to the $.menuContainer.
	 * In order to prevent an ever growing list of menu items, we call $.menuContainer.removeAllChildren() to clean the slate.
	 * But an edge case exists:
	 * If the menu's View is never opened, you can actually add items to the $.menuContainer.
	 * BUT, the removeAllChildren() function fails.
	 * The lines below will open the menu's View, and stage it off-screen.
	 * And to avoid opening the view repeatedly, the view is first closed beforehand.
	 * We do this in IOS here, we do it in android during android menu initializtion (below)
	 */

	// First we need to remove the existing items from the menu
	$.menuContainer.removeAllChildren();
	// Now get the proper set of menu items
    // var filterMenuBy = currentUser.get("loggedIn") ? "authenticated" : "unauthenticated";
    // menuItems = _.filter(menuItemsArray, function(_item){
        // return _item[filterMenuBy];
    // });
    /// Inflating the menu with the array of items.
    _.each(menuItems, function(item, index){
        var enabled; 
        if(Ti.Network.getOnline()){
            enabled = true;
        } else {
            enabled = (Alloy.Globals.offlineControllers.indexOf( item.id ) >= 0);
        }
        var itemController = Alloy.createController("handheld/menuItem", { 
            parent : $, 
            index : index, 
            item : item, 
            enabled : enabled 
        });
        if(item.separator===true){
            itemController.setIsSeparator(true);
        }
        
        $.menuContainer.add(itemController.getView());
        itemControllers.push(itemController);
        
        _.each(itemControllers, function(itemController){
            itemController.showTitle(); 
        });
    });
    
    // add the build number to the menu
    var buildItemCtrl = Alloy.createController("handheld/buildMenuItem",{parent : $});
    buildItemCtrl.setVersion(Ti.App.version + " - " + Alloy.Globals.ENV);
    $.menuContainer.add(buildItemCtrl.getView());
    
    // add an eventListener on the build label to toggle the 
    // environments
    
};//reset


// Initialize the menu
$.resetMenu();


/// Sorting items by index
menuItemsArray = _.sortBy(menuItemsArray, function(item){
    return item.index;
});

$.setParentController = function(p){
    parent = p;
};

/// This function is called whenever a menu item is clicked 
$.onMenuItemChange = function(idx){
    
        // event tracking
    Ti.App.fireEvent("app.navigation.event", {
        fromStr : "HomeMenu",
        toStr : menuItems[idx].title,
    });
    
    if($.menuState === MENU_STATES.COLLAPSED){
        Ti.API.info("Menu is COLLAPSED");
    } else if($.menuState === MENU_STATES.EXPANDED){
        Ti.API.info("Menu is EXPANDED");
    }
    
    /// Checking if user is requesting an action that is not available offline
    if(Alloy.Globals.offlineControllers.indexOf( menuItems[idx].id)<0){
        if(!Alloy.Globals.checkOnline()){
            return;
        }
    }
    
            
    Ti.API.info("Load landing window for current selection > " + menuItems[idx].landing);
    /// Loading item's landing window per new requirement.
    if(menuItems[idx].landing){
    	// Login Needs special treatement to pass callback
    	if (menuItems[idx].landing === "login"){
			var ctrl = Alloy.createController('handheld/login', {success:loginLib.userAuthenticated, parent : parent});
		 	ctrl.isModal = true;
		 	ctrl.headerBackgroundColor = "#EBEBEB";
	        ctrl.headerTitle = "LOGIN TO YOUR ACCOUNT";
		 	parent.openWindow(ctrl, "__LOG");
		// Terms and contact us are web pages, so we need to open the app browser
		// and go to the URL
		} else if (menuItems[idx].landing === 'terms'){
        	var controller = Alloy.createController("handheld/browser", {
				"parentController" : $,
				"url" : "http://m.queenslibrary.org/about-us/copyright-disclaimer",
				"partnerUrl" : true,
				'hideNavArrows' : true,
			});
			controller.open(false /*force login*/);  
		} else if (menuItems[idx].landing === 'contactUs'){
        	var controller = Alloy.createController("handheld/browser", {
				"parentController" : $,
				"url" : (Alloy.Globals.ENV === 'QA' ? "http://mqa" : "http://m" ) + ".queenslibrary.org/contact-us",
				"partnerUrl" : false,
				'hideNavArrows' : true,
			});
			controller.open();  
        } else if (menuItems[idx].landing === 'donate'){
        	// In iOS we open Safari, apple does not like us using our webview/browser
		    // implementation
		    Alloy.Globals.sendAdobeTrackState("Donate"); 
		    if (OS_IOS){
		    	// URL param based on device OS
		    	Ti.Platform.openURL("http://foundation.queenslibrary.org/give-now/?mydevice=apple");
		    }
		    else{
			    var controller = Alloy.createController("handheld/browser", {
			        "parentController" : $,
			        "url" : "http://foundation.queenslibrary.org/give-now",
			        "partnerUrl" : true,
			        "hideNavArrows" : true,
			    });
			    controller.open();  
		    }
        } else if (menuItems[idx].landing === "landing"){
            // "HOME" opens the landing page, so do a clear instead of opening a new landing page
            parent.getWindowManager().clear();
        } else if (menuItems[idx].landing === "logout"){
            parent.header.loginLogout();
        	/// Check to see if there are any available holds if we haven't shown the prompt yet
        } else if (menuItems[idx].id === '__EBO'){
		    if(!Alloy.Globals.holdsChecked){
				var ebookLib = require('commonLibraries/ebooksCommonLib');
			
		    	activityWindow.show('Checking User\nHolds');
				ebookLib.setUserHolds().then(function(){
					activityWindow.hide();
					parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);	
				});
			}
			else{
				parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);
			}
        } else if (parent){
			// clearing the slate before jumping around
            parent.getWindowManager().clear();
            // if parent exists, we are in a view inside the main window manager
            parent.openWindow("handheld/" + menuItems[idx].landing, menuItems[idx].id);              
        } else {
            // if there is no parent, we're on a landing page.  so we need to create a window manager and pass in the view to open
            var controller = Alloy.createController('handheld/main', {
                action: "handheld/" + menuItems[idx].landing,
                landing: $,
            });
            controller.getView().open();
        };
        closeMenu();
    }
};

/// Returns the current selected item
$.currentSelectedItem = function(){
    return selectedItem;
};

/// Opens and closes the main menu on item swipes
function onSwipe(e){
    if (e.direction=="right"){
        closeMenu();
    }
}

$.onSwipe = onSwipe;

/// Monitoring change event
Titanium.Network.addEventListener("change", onNetworkChange);

/// Changes the menu when users change their connection status
function onNetworkChange(e){
    _.each(itemControllers, function(_item){
        Ti.API.info("Registering "+_item.getId());
        if(Alloy.Globals.offlineControllers.indexOf(_item.getId())<0){
            e.online ? _item.enable() : _item.disable();
        }
    });
};

// ---- original above ---- appended code below ----


// close menu if non-menu portion of screen is clicked
$.index.addEventListener('click', function(){
    closeMenu();
});

// Once the Enviroment change is complete, we need to reset the bottom row of the menu
Ti.App.addEventListener('app.change.env.done', $.resetMenu);
