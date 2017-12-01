// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = arguments[0] || {};
var digitalPhotoForm = Alloy.createController('digitalPhotoForm').getView();

if (OS_IOS) {
	$.QL.image = 'QL300.png';
	$.qp.image = 'QM_FINAL_outlines.png';

} else if (OS_ANDROID) {
	$.QL.image = '/images/QL300.png';
	$.qp.image = '/images/QM_FINAL_outlines.png';
}

var items = [];

/**
 * this is how its done as of alloy 1.2
 *
 * @param {Object} _data
 */
function createListView(_data) {
	// this is pretty straight forward, assigning the values to the specific
	// properties in the template we defined above
	Ti.API.info(_data);
	//$.submit.setVisible(true);
	for (var i in _data) {
		// add items to an array
		items.push({
			template : "template1", // set the template
			textLabel : {
				text : _data[i].title // assign the values from the data
			},
			detailLabel : {
				text : _data[i].body // assign the values from the data
			}
		});
	}
	// add the array, items, to the section defined in the view.xml file
	$.section.setItems(items);
}

function backButton(e) {
	$.systemAlertWin.close();
}

function slideMenu(e) {
	menuController = Alloy.createController('sliderMenu').getView();
	menuController.open();
}

function submit(e) {
	var clearItems = [];
	$.section.setItems(clearItems);
	Ti.App.Properties.setBool('Alert Status', false);

	Ti.API.info(Ti.App.Properties.getString('Alert Status') ? true : false);
}

function stopMe(e) {
	var clearItems = [];
	if (OS_IOS) {
		$.section.setItems(clearItems);
	}		
	$.systemAlertWin.close(args);
}

createListView(args.messages); 