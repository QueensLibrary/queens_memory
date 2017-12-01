function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.drawer/" + s : s.substring(0, index) + "/nl.fokkezb.drawer/" + s.substring(index + 1);
    return 0 !== path.indexOf("/") ? "/" + path : path;
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
    new (require("/alloy/widget"))("nl.fokkezb.drawer");
    this.__widgetId = "nl.fokkezb.drawer";
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var mod;
    mod = args.drawerLayout ? "com.tripvi.drawerlayout" : "dk.napp.drawer";
    $.module = require(mod);
    args.children && _.each(args.children, function(child) {
        if (!child) return;
        var role = child.role;
        "dk.napp.drawer" !== mod && (role = role.replace("Window", "View"));
        role && (args[role] = child);
    });
    var consts;
    consts = "dk.napp.drawer" === mod ? [ "closeDrawerGestureMode", "openDrawerGestureMode", "centerHiddenInteractionMode", "animationMode", "statusBarStyle" ] : [ "drawerLockMode" ];
    _.each(consts, function(arg) {
        args[arg] && "string" == typeof args[arg] && (args[arg] = $.module[args[arg]]);
    });
    if ("dk.napp.drawer" === mod) {
        if (_.has(args, "drawerIndicatorEnabled")) {
            args.hamburgerIcon = args.drawerIndicatorEnabled;
            delete args.drawerIndicatorEnabled;
        }
        if (_.has(args, "drawerArrowIcon")) {
            args.arrowAnimation = args.drawerArrowIcon;
            delete args.drawerArrowIcon;
        }
        if (_.has(args, "drawerArrowIconColor")) {
            args.hamburgerIconColor = args.drawerArrowIconColor;
            delete args.drawerArrowIconColor;
        }
    } else {
        if (_.has(args, "hamburgerIcon")) {
            args.drawerIndicatorEnabled = args.hamburgerIcon;
            delete args.hamburgerIcon;
        }
        if (_.has(args, "arrowAnimation")) {
            args.drawerArrowIcon = args.arrowAnimation;
            delete args.arrowAnimation;
        }
        if (_.has(args, "hamburgerIconColor")) {
            args.drawerArrowIconColor = args.hamburgerIconColor;
            delete args.hamburgerIconColor;
        }
    }
    delete args.id;
    delete args.__parentSymbol;
    delete args.children;
    if ("dk.napp.drawer" === mod) {
        _.extend(args, args.window || {});
        $.instance = $.module.createDrawer(_.omit(args, "window"));
        $.window = $.instance;
        $.addTopLevelView($.instance);
    } else {
        $.instance = $.module.createDrawer(_.omit(args, "window"));
        $.window = Ti.UI.createWindow(_.extend(_.pick(args, [ "orientationModes", "exitOnClose", "backgroundColor" ]), args.window || {}));
        $.window.add($.instance);
        $.addTopLevelView($.window);
    }
    $.window.addEventListener("open", function(e) {
        var actionBar = ("dk.napp.drawer" === mod ? this : e.source).getActivity().getActionBar();
        if (actionBar) {
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setOnHomeIconItemSelected(function() {
                if ($.isRightWindowOpen()) return $.closeRightWindow();
                $.toggleLeftWindow();
            });
        }
    });
    var props;
    props = "dk.napp.drawer" === mod ? [ "centerWindow", "leftWindow", "rightWindow", "closeDrawerGestureMode", "openDrawerGestureMode", "leftDrawerWidth", "rightDrawerWidth", "orientationModes", "centerHiddenInteractionMode", "animationMode", "animationVelocity", "showShadow", "shadowWidth", "shouldStretchDrawer", "fading", "parallaxAmount", "statusBarStyle", "hamburgerIcon", "hamburgerIconColor", "arrowAnimation" ] : [ "leftView", "rightView", "centerView", "isLeftDrawerOpen", "isLeftDrawerVisible", "isRightDrawerOpen", "isRightDrawerVisible", "leftDrawerWidth", "rightDrawerWidth", "drawerIndicatorEnabled", "drawerIndicatorImage", "drawerLockMode", "drawerArrowIcon", "drawerArrowIconColor" ];
    _.each(props, function(key) {
        var cc = key[0].toUpperCase() + key.substring(1);
        var get = $["get" + cc] || ($["get" + cc] = function() {
            return $.instance[key];
        });
        var set = $["set" + cc] || ($["set" + cc] = function(val) {
            -1 !== consts.indexOf(key) && "string" == typeof val && (val = $.module[val]);
            $.instance[key] = val;
        });
        Object.defineProperty($, key, {
            get: get,
            set: set
        });
    });
    if ("dk.napp.drawer" === mod) {
        $.closeLeftWindow = function() {
            if ($.instance.isLeftWindowOpen()) return $.instance.toggleLeftWindow();
        };
        $.closeRightWindow = function() {
            if ($.instance.isRightWindowOpen()) return $.instance.toggleRightWindow();
        };
        $.openLeftWindow = function() {
            if (!$.instance.isLeftWindowOpen()) return $.instance.toggleLeftWindow();
        };
        $.openRightWindow = function() {
            if (!$.instance.isRightWindowOpen()) return $.instance.toggleRightWindow();
        };
        $.replaceCenterView = function(view) {
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
        $.open = function(params) {
            return $.window.open(params);
        };
        $.close = function(params) {
            return $.window.close(params);
        };
        $.isAnyWindowOpen = function() {
            return $.instance.getIsLeftDrawerOpen() || $.instance.getIsRightDrawerOpen();
        };
        $.isLeftWindowOpen = function() {
            return $.instance.getIsLeftDrawerOpen();
        };
        $.isRightWindowOpen = function() {
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
    $.on = function(event, callback, context) {
        return $.instance.addEventListener(event, callback);
    };
    $.off = function(event, callback, context) {
        return $.instance.removeEventListener(event, callback);
    };
    $.trigger = function(event, args) {
        return $.instance.fireEvent(event, args);
    };
    $.addEventListener = $.on;
    $.removeEventListener = $.off;
    $.fireEvent = $.trigger;
    var methods;
    methods = "dk.napp.drawer" === mod ? [ "toggleLeftWindow", "toggleRightWindow", "bounceLeftWindow", "bounceRightWindow", "isAnyWindowOpen", "isLeftWindowOpen", "isRightWindowOpen", "open", "close" ] : [ "replaceCenterView", "toggleLeftWindow", "openLeftWindow", "closeLeftWindow", "toggleRightWindow", "openRightWindow", "closeRightWindow" ];
    _.each(methods, function(fn) {
        $[fn] || ($[fn] = function(a, b) {
            return $.instance[fn](a, b);
        });
    });
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;