const frame = require('ui/frame');

const createViewModel = require("./main-view-model").createViewModel;

exports.onNavigatingTo = function (args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

exports.onMapTap = function (args) {
  const button = args.object;
  const page = button.page;
  console.log("in onMapTap...")

  var navigationOptions = {
    moduleName: "map-page",  // use button's custom toPage attribute to set destination
    context: { bindingContext: page.bindingContext }  // propagate parent page's binding context
  }
  frame.topmost().navigate(navigationOptions);
}
