const observableModule = require("data/observable");

function HomescreenViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = HomescreenViewModel;
