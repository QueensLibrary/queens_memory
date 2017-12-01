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
  this.__controllerPath = 'menuItem';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  $.__views.index = Ti.UI.createView({ backgroundColor: "transparent", layout: "vertical", height: "52dp", width: Ti.UI.FILL, id: "index" });
  $.__views.index && $.addTopLevelView($.__views.index);
  $.__views.itemContainer = Ti.UI.createView({ top: 0, height: "50dp", width: Ti.UI.FILL, bubbleParent: false, id: "itemContainer" });
  $.__views.index.add($.__views.itemContainer);
  onItemClick ? $.addListener($.__views.itemContainer, 'click', onItemClick) : __defers['$.__views.itemContainer!click!onItemClick'] = true;onSwipe ? $.addListener($.__views.itemContainer, 'swipe', onSwipe) : __defers['$.__views.itemContainer!swipe!onSwipe'] = true;$.__views.icon = Ti.UI.createImageView({ width: Ti.UI.SIZE, height: "60%", left: "14dp", id: "icon" });
  $.__views.itemContainer.add($.__views.icon);
  $.__views.title = Ti.UI.createLabel({ top: "9dp", left: "66dp", width: Ti.UI.SIZE, height: "32dp", color: "white", font: { fontSize: "16sp", fontWeight: "bold" }, id: "title" });
  $.__views.itemContainer.add($.__views.title);
  exports.destroy = function () {};

  _.extend($, $.__views);

  var args = arguments[0] || {};

  var parent = args.parent || {};
  var index = args.index;
  var enabled = args.enabled;
  var isSeparator = false;

  $.title.text = args.item.title;
  $.icon.image = args.item.icon;

  $.getId = function () {
    return args.item.id;
  };

  $.showTitle = function () {
    $.title.visible = true;
  };

  $.hideTitle = function () {
    $.title.visible = false;
  };

  $.hideTitle();

  function onSwipe(e) {
    parent.onSwipe(e);
  }

  function onItemClick(e) {
    Ti.API.info("Clicked on item " + index);

    parent.onMenuItemChange(index);
    e.cancelBubble = true;
  }

  $.setActive = function (state) {
    if (isSeparator === true) {
      $.index.backgroundColor = "transparent";
    } else if (args.item.highlighted === true) {
      $.index.backgroundColor = Alloy.Globals.Colors.orange;
    } else {
      if (state === true) {
        $.index.backgroundColor = "#723582";
        $.icon.image = $.icon.image.replace("\/off\/", "\/on\/");
        Ti.API.info('menu image path: ' + $.icon.image);
      } else {
        $.index.backgroundColor = "#9c71a7";
        $.icon.image = $.icon.image.replace("\/on\/", "\/off\/");
        Ti.API.info('menu image path: ' + $.icon.image);
      }
    }
  };

  $.disable = function () {
    $.itemContainer.applyProperties({
      opacity: 0.5,
      touchEnabled: false
    });
  };

  $.enable = function () {
    $.itemContainer.applyProperties({
      opacity: 1,
      touchEnabled: true
    });
  };

  $.setIsSeparator = function (_isSeparator) {
    isSeparator = _isSeparator;
    if (_isSeparator === true) $.separator.visible = false;
  };

  enabled ? $.enable() : $.disable();

  __defers['$.__views.itemContainer!click!onItemClick'] && $.addListener($.__views.itemContainer, 'click', onItemClick);__defers['$.__views.itemContainer!swipe!onSwipe'] && $.addListener($.__views.itemContainer, 'swipe', onSwipe);

  _.extend($, exports);
}

module.exports = Controller;