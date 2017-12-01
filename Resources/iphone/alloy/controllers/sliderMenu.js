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
  this.__controllerPath = 'sliderMenu';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.sliderWin = Ti.UI.createWindow({ orientationModes: [Ti.UI.PORTRAIT], width: "50%", right: "0%", top: "5%", zIndex: 0, id: "sliderWin" });
  $.__views.sliderWin && $.addTopLevelView($.__views.sliderWin);
  $.__views.__alloyId112 = Ti.UI.createScrollView({ id: "__alloyId112" });
  $.__views.sliderWin.add($.__views.__alloyId112);
  if (true) {
    var __alloyId113 = [];$.__views.__alloyId114 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId114" });
    __alloyId113.push($.__views.__alloyId114);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
    $.__views.__alloyId114.add($.__views.tbServiceAlerts);
    $.__views.__alloyId115 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'About This App', id: "__alloyId115" });
    $.__views.tbServiceAlerts.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId116" });
    __alloyId113.push($.__views.__alloyId116);openFormatView ? $.addListener($.__views.__alloyId116, 'click', openFormatView) : __defers['$.__views.__alloyId116!click!openFormatView'] = true;$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
    $.__views.__alloyId116.add($.__views.tbServiceAlerts);
    $.__views.__alloyId117 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Formats', id: "__alloyId117" });
    $.__views.tbServiceAlerts.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId118" });
    __alloyId113.push($.__views.__alloyId118);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
    $.__views.__alloyId118.add($.__views.tbServiceAlerts);
    $.__views.__alloyId119 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'FAQs', id: "__alloyId119" });
    $.__views.tbServiceAlerts.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId120" });
    __alloyId113.push($.__views.__alloyId120);stayConnect ? $.addListener($.__views.__alloyId120, 'click', stayConnect) : __defers['$.__views.__alloyId120!click!stayConnect'] = true;$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
    $.__views.__alloyId120.add($.__views.tbServiceAlerts);
    $.__views.__alloyId121 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Stay Connected', id: "__alloyId121" });
    $.__views.tbServiceAlerts.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId122" });
    __alloyId113.push($.__views.__alloyId122);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
    $.__views.__alloyId122.add($.__views.tbServiceAlerts);
    $.__views.__alloyId123 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Privacy & Terms', id: "__alloyId123" });
    $.__views.tbServiceAlerts.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createTableViewRow({ color: "white", borderColor: "black", borderWidth: 5, font: { fontSize: 12 }, height: "10%", id: "__alloyId124" });
    __alloyId113.push($.__views.__alloyId124);$.__views.tbServiceAlerts = Ti.UI.createView({ borderColor: "black", height: Titanium.UI.FILL, id: "tbServiceAlerts" });
    $.__views.__alloyId124.add($.__views.tbServiceAlerts);
    $.__views.__alloyId125 = Ti.UI.createLabel({ color: "white", left: "7%", font: { fontSize: 12 }, text: 'Version XX.XXX.XX', id: "__alloyId125" });
    $.__views.tbServiceAlerts.add($.__views.__alloyId125);
    $.__views.rContainer = Ti.UI.createTableView({ backgroundColor: "gray", right: "0%", borderColor: "gray", borderWidth: 0.5, data: __alloyId113, id: "rContainer" });
    $.__views.__alloyId112.add($.__views.rContainer);
  }
  exports.destroy = function () {};

  _.extend($, $.__views);

  var formatsController;
  var stayConnectedController;
  var args = arguments[0] || {};
  var is_open = false;

  var TnC = Titanium.UI.createButton({});
  TnC.addEventListener('click', function (e) {
    Titanium.API.info("You clicked the button");
    console.log('In sliderMenu.js');
  });

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

    console.log("Is this true? is_open: " + is_open);
    if (is_open) {

      $.mover.animate(Ti.UI.createAnimation({
        duration: 1500,
        right: 0
      }));
    }
  }

  function closeAnimation() {
    $.mover.animate(Ti.UI.createAnimation({
      duration: 1500,
      right: 0,
      width: '0',
      height: '0'
    }));
  }

  if (true) {
    __defers['$.__views.__alloyId116!click!openFormatView'] && $.addListener($.__views.__alloyId116, 'click', openFormatView);
  }
  if (true) {
    __defers['$.__views.__alloyId120!click!stayConnect'] && $.addListener($.__views.__alloyId120, 'click', stayConnect);
  }

  _.extend($, exports);
}

module.exports = Controller;