const observableModule = require("data/observable");

function Step2ViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = Step2ViewModel;
