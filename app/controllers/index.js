// // request storage permission
// function checkPermissions(callback) {
  // // request storage permission
  // if (OS_ANDROID) {
    // var RSP = require("com.boxoutthinkers.reqstorageperm");
// 
    // var ownedPermission = function() {
      // // done
      // callback && callback();
    // };
// 
    // var requestStoragePerm = function() {
      // if (!RSP.hasStoragePermission()) {
        // RSP.requestStoragePermissions(function (e) {
          // if (e.success) {
            // // success
            // Ti.API.info('requestStoragePermission : success');
            // ownedPermission();
          // } else {
            // // retry or settings open
            // Ti.API.error('requestStoragePermission : error');
            // var dialog = Ti.UI.createAlertDialog({
              // message: msg,
              // cancel: 1,
              // buttonNames: ["OK", "Open Setting"],
              // title: "Need Storeage Permission"
            // });
            // dialog.addEventListener('click', function(e){
              // if (e.index === e.source.cancel){
                // Ti.API.debug('settings open');
                // var resumedFn = function() {
                  // requestStoragePerm();
                  // Ti.Android.currentActivity.onStart = null;
                  // Ti.Android.currentActivity.onResume = null;
                // };
                // Ti.Android.currentActivity.onStart = resumedFn;
                // Ti.Android.currentActivity.onResume = resumedFn;
// 
                // // settings open
                // RSP.settingsOpen();
              // } else {
                // requestStoragePerm();
              // }
            // });
            // dialog.show();
          // }
        // });
      // } else {
        // Ti.API.info('requestStoragePermission : already have');
        // ownedPermission();
      // }
    // };
// 
    // var checkNRequestStoragePerm = function () {
      // if (!RSP.hasStoragePermission()) {
        // var dialog = Ti.UI.createAlertDialog({
          // message: "Need Storage Permission. Because, .......",
          // ok: "OK",
          // title: "Need Storage Permission"
        // });
        // dialog.addEventListener('click', function(e){
          // requestStoragePerm();
        // });
        // dialog.show();
      // } else {
        // Ti.API.info('requestStoragePermission : already have');
        // ownedPermission();
      // }
    // };
// 
    // // do check
    // checkNRequestStoragePerm();
  // } else {
    // // non android
    // callback && callback();
  // }
// }
// if (OS_ANDROID) {
	// var cameraPermission = "android.permission.CAMERA";
	// var storagePermission = "android.permission.READ_EXTERNAL_STORAGE";
	// var hasCameraPermission = Ti.Android.hasPermission(cameraPermission);
	// var hasStoragePermission = Ti.Android.hasPermission(storagePermission);
	// var permissionsToRequest = [];
	// if (!hasCameraPermission) {
		// permissionsToRequest.push(cameraPermission);
	// }
	// if (!hasStoragePermission) {
		// permissionsToRequest.push(storagePermission);
	// }
	// if (permissionsToRequest.length > 0) {
		// Ti.Android.requestPermissions(permissionsToRequest, function(e) {
			// if (e.success) {
				// Ti.API.info("SUCCESS");
			// } else {
				// Ti.API.info("ERROR: " + e.error);
			// }
		// });
	// }
// }
$.index.open();

// run
// checkPermissions(function callback() {
	// if (OS_ANDROID) {
		// Ti.API.info('Here is the current sound permissions ' + Ti.Filesystem.hasStoragePermissions());
	// }else{
		// Ti.API.info('iOS has current sound permissions assigned.');
	// }
// });

