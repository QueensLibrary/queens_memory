var Alloy = require('/alloy'),
    Backbone = Alloy.Backbone,
    _ = Alloy._;

function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ? 'nl.fokkezb.drawer/' + s : s.substring(0, index) + '/nl.fokkezb.drawer/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
    delete obj[key];
  }
  return arg;
}

function Controller() {
  var Widget = new (require('/alloy/widget'))('nl.fokkezb.drawer');this.__widgetId = 'nl.fokkezb.drawer';
  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'widget';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  exports.destroy = function () {};

  _.extend($, $.__views);

  var args = arguments[0] || {};

  var mod;

  if (false && args.drawerLayout) {
    mod = 'com.tripvi.drawerlayout';
  } else {
    mod = 'dk.napp.drawer';
  }

  $.module = require(mod);

  if (args.children) {

    _.each(args.children, function (child) {
      if (!child) {
        return;
      }

      var role = child.role;

      if (mod !== 'dk.napp.drawer') {
        role = role.replace('Window', 'View');
      }

      if (role) {
        args[role] = child;
      }
    });
  }

  var consts;

  if (mod === 'dk.napp.drawer') {
    consts = ['closeDrawerGestureMode', 'openDrawerGestureMode', 'centerHiddenInteractionMode', 'animationMode', 'statusBarStyle'];
  } else {
    consts = ['drawerLockMode'];
  }

  _.each(consts, function (arg) {

    if (args[arg] && typeof args[arg] === 'string') {
      args[arg] = $.module[args[arg]];
    }
  });

  if (mod === 'dk.napp.drawer') {
    if (_.has(args, 'drawerIndicatorEnabled')) {
      args.hamburgerIcon = args.drawerIndicatorEnabled;
      delete args.drawerIndicatorEnabled;
    }
    if (_.has(args, 'drawerArrowIcon')) {
      args.arrowAnimation = args.drawerArrowIcon;
      delete args.drawerArrowIcon;
    }
    if (_.has(args, 'drawerArrowIconColor')) {
      args.hamburgerIconColor = args.drawerArrowIconColor;
      delete args.drawerArrowIconColor;
    }
  } else {
    if (_.has(args, 'hamburgerIcon')) {
      args.drawerIndicatorEnabled = args.hamburgerIcon;
      delete args.hamburgerIcon;
    }
    if (_.has(args, 'arrowAnimation')) {
      args.drawerArrowIcon = args.arrowAnimation;
      delete args.arrowAnimation;
    }
    if (_.has(args, 'hamburgerIconColor')) {
      args.drawerArrowIconColor = args.hamburgerIconColor;
      delete args.hamburgerIconColor;
    }
  }

  delete args.id;
  delete args.__parentSymbol;
  delete args.children;

  if (mod === 'dk.napp.drawer') {

    _.extend(args, args.window || {});

    $.instance = $.module.createDrawer(_.omit(args, 'window'));

    $.window = $.instance;
    $.addTopLevelView($.instance);
  } else {
    $.instance = $.module.createDrawer(_.omit(args, 'window'));

    $.window = Ti.UI.createWindow(_.extend(_.pick(args, ["orientationModes", "exitOnClose", "backgroundColor"]), args.window || {}));
    $.window.add($.instance);

    $.addTopLevelView($.window);
  }

  if (false) {
    $.window.addEventListener('open', function (e) {
      var actionBar = (mod === 'dk.napp.drawer' ? this : e.source).getActivity().getActionBar();

      if (actionBar) {
        actionBar.setDisplayHomeAsUp(true);
        actionBar.setOnHomeIconItemSelected(function () {
          if ($.isRightWindowOpen()) {
            return $.closeRightWindow();
          }
          $.toggleLeftWindow();
        });
      }
    });
  }

  var props;

  if (mod === 'dk.napp.drawer') {
    props = ['centerWindow', 'leftWindow', 'rightWindow', 'closeDrawerGestureMode', 'openDrawerGestureMode', 'leftDrawerWidth', 'rightDrawerWidth', 'orientationModes', 'centerHiddenInteractionMode', 'animationMode', 'animationVelocity', 'showShadow', 'shadowWidth', 'shouldStretchDrawer', 'fading', 'parallaxAmount', 'statusBarStyle', 'hamburgerIcon', 'hamburgerIconColor', 'arrowAnimation'];
  } else {
    props = ['leftView', 'rightView', 'centerView', 'isLeftDrawerOpen', 'isLeftDrawerVisible', 'isRightDrawerOpen', 'isRightDrawerVisible', 'leftDrawerWidth', 'rightDrawerWidth', 'drawerIndicatorEnabled', 'drawerIndicatorImage', 'drawerLockMode', 'drawerArrowIcon', 'drawerArrowIconColor'];
  }

  _.each(props, function (key) {
    var cc = key[0].toUpperCase() + key.substring(1);

    var get = $['get' + cc] || ($['get' + cc] = function () {
      return $.instance[key];
    });
    var set = $['set' + cc] || ($['set' + cc] = function (val) {

      if (consts.indexOf(key) !== -1 && typeof val === 'string') {
        val = $.module[val];
      }

      $.instance[key] = val;
    });

    Object.defineProperty($, key, {
      get: get,
      set: set
    });
  });

  if (mod === 'dk.napp.drawer') {

    $.closeLeftWindow = function () {
      if ($.instance.isLeftWindowOpen()) {
        return $.instance.toggleLeftWindow();
      }
    };

    $.closeRightWindow = function () {
      if ($.instance.isRightWindowOpen()) {
        return $.instance.toggleRightWindow();
      }
    };

    $.openLeftWindow = function () {
      if (!$.instance.isLeftWindowOpen()) {
        return $.instance.toggleLeftWindow();
      }
    };

    $.openRightWindow = function () {
      if (!$.instance.isRightWindowOpen()) {
        return $.instance.toggleRightWindow();
      }
    };

    $.replaceCenterView = function (view) {
      return $.instance.setCenterView(view);
    };

    $.leftView = $.leftWindow;
    $.setLeftView = $.setLeftWindow;
    $.getLeftView = $.getLeftWindow;

    $.centerView = $.centerWindow;
    $.setCenterView = $.setCenterWindow;
    $.getCenterView = $.getCenterWindow;

    $.rightView = $.rightWindow;
    $.setRightView = $.setRightWindow;
    $.getRightView = $.getRightWindow;

    $.drawerIndicatorEnabled = $.hamburgerIcon;
    $.setDrawerIndicatorEnabled = $.setHamburgerIcon;
    $.getDrawerIndicatorEnabled = $.getHamburgerIcon;

    $.drawerArrowIcon = $.arrowAnimation;
    $.setDrawerArrowIcon = $.setArrowAnimation;
    $.getDrawerArrowIcon = $.getArrowAnimation;

    $.drawerArrowIconColor = $.hamburgerIconColor;
    $.setDrawerArrowIconColor = $.setHamburgerIconColor;
    $.getDrawerArrowIconColor = $.getHamburgerIconColor;
  } else {

    $.open = function (params) {
      return $.window.open(params);
    };

    $.close = function (params) {
      return $.window.close(params);
    };

    $.isAnyWindowOpen = function () {
      return $.instance.getIsLeftDrawerOpen() || $.instance.getIsRightDrawerOpen();
    };

    $.isLeftWindowOpen = function () {
      return $.instance.getIsLeftDrawerOpen();
    };

    $.isRightWindowOpen = function () {
      return $.instance.getIsRightDrawerOpen();
    };

    $.leftWindow = $.leftView;
    $.setLeftWindow = $.setLeftView;
    $.getLeftWindow = $.getLeftView;

    $.centerWindow = $.centerView;
    $.setCenterWindow = $.setCenterView;
    $.getCenterWindow = $.getCenterView;

    $.rightWindow = $.rightView;
    $.setRightWindow = $.setRightView;
    $.getRightWindow = $.getRightView;

    $.hamburgerIcon = $.drawerIndicatorEnabled;
    $.setHamburgerIcon = $.setDrawerIndicatorEnabled;
    $.getHamburgerIcon = $.getDrawerIndicatorEnabled;

    $.arrowAnimation = $.drawerArrowIcon;
    $.setArrowAnimation = $.setDrawerArrowIcon;
    $.getArrowAnimation = $.getDrawerArrowIcon;

    $.hamburgerIconColor = $.drawerArrowIconColor;
    $.setHamburgerIconColor = $.setDrawerArrowIconColor;
    $.getHamburgerIconColor = $.getDrawerArrowIconColor;
  }

  $.on = function (event, callback, context) {
    return $.instance.addEventListener(event, callback);
  };

  $.off = function (event, callback, context) {
    return $.instance.removeEventListener(event, callback);
  };

  $.trigger = function (event, args) {
    return $.instance.fireEvent(event, args);
  };

  $.addEventListener = $.on;
  $.removeEventListener = $.off;
  $.fireEvent = $.trigger;

  var methods;

  if (mod === 'dk.napp.drawer') {
    methods = ['toggleLeftWindow', 'toggleRightWindow', 'bounceLeftWindow', 'bounceRightWindow', 'isAnyWindowOpen', 'isLeftWindowOpen', 'isRightWindowOpen', 'open', 'close'];
  } else {
    methods = ['replaceCenterView', 'toggleLeftWindow', 'openLeftWindow', 'closeLeftWindow', 'toggleRightWindow', 'openRightWindow', 'closeRightWindow'];
  }

  _.each(methods, function (fn) {

    if (!$[fn]) {
      $[fn] = true ? $.instance[fn] : function (a, b) {
        return $.instance[fn](a, b);
      };
    }
  });

  _.extend($, exports);
}

module.exports = Controller;