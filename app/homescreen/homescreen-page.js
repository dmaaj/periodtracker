/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
var page;


var Checkbox = require("nativescript-checkbox");

const Observable = require("tns-core-modules/data/observable").Observable;

var frameModule = require("ui/frame");
const Step2ViewModel = require("./homescreen-view-model");
const progressModule = require("tns-core-modules/ui/progress");
const Button = require("tns-core-modules/ui/button").Button;





  var Cycledays = [], x=0;
  var i;
  for(i= 0; i < 32; i++){
       x = i + "  days";
       Cycledays.push(x);
       
}






exports.loaded = function(args){
    page = args.object;

    const TODAY = new Date();

    

    const vm = new Observable();
    vm.set("Today", TODAY.toDateString());
    vm.set("Cycledays", Cycledays);
    vm.set("index", 5);
    
    page.bindingContext = vm;

    



}




exports.nextstep = function(args){

}