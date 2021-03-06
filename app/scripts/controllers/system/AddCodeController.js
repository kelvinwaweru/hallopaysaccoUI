(function (module) {
    mifosX.controllers = _.extend(module, {
        AddCodeController: function (scope, resourceFactory, location) {

            scope.submit = function () {
                resourceFactory.codeResources.save(this.formData, function (data) {
                    location.path('/viewcode/' + data.resourceId);
                });
            };
        }
    });
    mifosX.ng.application.controller('AddCodeController', ['$scope', 'ResourceFactory', '$location', mifosX.controllers.AddCodeController]).run(function ($log) {
        $log.info("AddCodeController initialized");
    });
}(mifosX.controllers || {}));

