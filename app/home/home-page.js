/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
var page;

var frameModule = require("ui/frame");
const HomeViewModel = require("./home-view-model");


exports.loaded = function(args){
    page = args.object;

}

exports.track_cycle = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("register/register-page");
};

exports.w_pregnant = function() {
    alert("Paid Version");
};

exports.i_pregnant = function() {
    alert("Paid Version");
};

