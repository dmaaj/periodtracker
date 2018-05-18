const observableModule = require("data/observable");

function RegisterViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = RegisterViewModel;
