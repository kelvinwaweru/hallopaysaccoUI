(function (module) {
    mifosX.controllers = _.extend(module, {
        TransactionClientController: function (scope, resourceFactory, routeParams, location, dateFilter) {

            scope.formData = {};
            scope.formData.transferDate = new Date();
            scope.clientId = routeParams.id;
            resourceFactory.officeResource.getAllOffices(function (data) {
                scope.offices = data;
                scope.formData.destinationOfficeId = scope.offices[0].id;
            });

            scope.submit = function () {
                this.formData.locale = scope.optlang.code;
                this.formData.dateFormat = scope.df;
                this.formData.transferDate = dateFilter(this.formData.transferDate, scope.df);
                resourceFactory.clientResource.save({clientId: routeParams.id, command: 'proposeTransfer'}, this.formData, function (data) {
                    location.path('/viewclient/' + routeParams.id);
                });
            };
        }
    });
    mifosX.ng.application.controller('TransactionClientController', ['$scope', 'ResourceFactory', '$routeParams', '$location', 'dateFilter', mifosX.controllers.TransactionClientController]).run(function ($log) {
        $log.info("TransactionClientController initialized");
    });
}(mifosX.controllers || {}));
