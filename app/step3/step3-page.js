/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
var page;


var Checkbox = require("nativescript-checkbox");

const Observable = require("tns-core-modules/data/observable").Observable;

var frameModule = require("ui/frame");
const Step2ViewModel = require("./step3-view-model");
const progressModule = require("tns-core-modules/ui/progress");


var pageData = new Observable({
    Pday: ["1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "7 days", "8 days", "9 days"]
  });

  var Cycledays = [], x=0;
  var i;
  for(i= 0; i < 32; i++){
       x = i + "  days";
       Cycledays.push(x);
       
}







exports.loaded = function(args){
    page = args.object;

    const vm = new Observable();
    vm.set("Cycledays", Cycledays);
    vm.set("index", 5);
    page.bindingContext = vm;
}

exports.checkProp = function(args){
    checkBox = page.getViewById('myCheckbox');

    if (checkBox.checked="true"){
        alert("Flow will set the length of your cycle to 27 days. Use the app more for predictions to become more accurate");
    }
}

exports.nextstep = function(args){

    var topmost = frameModule.topmost();
    topmost.navigate("homescreen/homescreen-page");
}