var args = arguments[0] || {};

var parent = args.parent || {};
var index = args.index;
var enabled = args.enabled;
var isSeparator = false;

$.title.text = args.item.title;
$.icon.image = args.item.icon;

$.getId = function() {
    return args.item.id;
};

$.showTitle = function() {
    $.title.visible = true;
};

$.hideTitle = function() {
    $.title.visible = false;
};

$.hideTitle();

function onSwipe(e){
	parent.onSwipe(e);
}

function onItemClick(e) {
    Ti.API.info("Clicked on item " + index);
    // if(parent.currentSelectedItem()==index){
    // Ti.API.info("Deselecting item");
    // } else {
    // Ti.API.info("Selecting item");
    // }
    //
    /// Notifying the parent about the selection
    parent.onMenuItemChange(index);
    e.cancelBubble = true;
}

$.setActive = function(state) {
	if(isSeparator===true){
		$.index.backgroundColor = "transparent";
	} else if (args.item.highlighted===true) {
		$.index.backgroundColor = Alloy.Globals.Colors.orange;
	} else {
		if (state === true) {
	        $.index.backgroundColor = "#723582";
	        $.icon.image = $.icon.image.replace("\/off\/", "\/on\/");
	        Ti.API.info('menu image path: ' +$.icon.image);
	    } else {
	        $.index.backgroundColor = "#9c71a7";
	        $.icon.image = $.icon.image.replace("\/on\/", "\/off\/");
	        Ti.API.info('menu image path: ' +$.icon.image);
	    }
	}
};

$.disable = function() {
    // $.itemContainer.opacity = 0.4;
    // $.itemContainer.touchEnabled = false;
    $.itemContainer.applyProperties({
        opacity : 0.5,
        touchEnabled : false
    });
};

$.enable = function() {
    $.itemContainer.applyProperties({
        opacity : 1,
        touchEnabled : true
    });
    // $.itemContainer.opacity = 1;
    // $.itemContainer.touchEnabled = 1;
};

$.setIsSeparator = function(_isSeparator){
	isSeparator = _isSeparator;
	if(_isSeparator===true)
		$.separator.visible = false;
};

enabled ? $.enable() : $.disable();
