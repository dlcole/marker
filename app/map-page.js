const frame = require('ui/frame');
var maps = require("nativescript-google-maps-sdk");

exports.onNavigatingTo = function (args) {
  var page = args.object;
  page.bindingContext = page.navigationContext.bindingContext;
  debugger;
}

exports.onBackTap = function () {
  frame.topmost().goBack();
}

exports.onMapReady = function (args) {
  mapView = args.object;
  console.log("entering onMapReady...")
  mapView.settings.compassEnabled = true;
}