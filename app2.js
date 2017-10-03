/**
 * Created by CLH3623 on 03/10/2017.
 */
(function() {

    angular.module("myapp", [])
        .controller("editController", ['$rootScope', function ($rootScope) {

            var qcm = [];
            $rootScope.qcm = qcm;

            var self = this;
            self.showInputQCM = false;

            self.addQCM = function() {
                self.showInputQCM = true;
            };

            self.shouldShowInputQCM = function() {
                return self.showInputQCM;
            };

            self.showEditMode = function() {
                return $rootScope.state == "EDIT";
            };

            self.submitQcm = function() {
                self.showInputQCM = false;
                qcm.push(self.qcmTitle);
                self.qcmTitle = "";
            };

            self.getQcm = function() {
                return qcm;
            }

        }])
}());
