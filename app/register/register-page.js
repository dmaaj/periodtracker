/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
var page;

var Checkbox = require("nativescript-checkbox");
const Observable = require("tns-core-modules/data/observable").Observable;
var frameModule = require("ui/frame");
const DatePicker = require("tns-core-modules/ui/date-picker").DatePicker;
const RegisterViewModel = require("./register-view-model");
const progressModule = require("tns-core-modules/ui/progress");


exports.loaded = function(args){
    page = args.object;
    const vm = new Observable();
    
    const TODAY = new Date();
    vm.set("date", TODAY);
    vm.set("minDate", new Date(1975, 0, 29));
    vm.set("maxDate", new Date(2045, 4, 12));
    // << date-picker-dates
page.bindingContext = vm;

}




exports.onProgressLoaded = function(args){
    page = args.object;
    

}

exports.checkProp = function(args){
    checkBox = page.getViewById('myCheckbox');

    if (checkBox.checked="true"){
        alert("You can log the first day of your last period or you can just log the beginning of a new one");
    }
}

exports.nextstep = function(args){
    LastPday = page.getViewById('LastP').day.toString();
    LastPmonth = page.getViewById('LastP').month.toString();
    LastPyear = page.getViewById('LastP').year.toString();
    checkBox = page.getViewById('myCheckbox');
    console.log(checkBox.checked, LastPday, LastPmonth, LastPyear );
    var topmost = frameModule.topmost();
    topmost.navigate("step2/step2-page");
}
