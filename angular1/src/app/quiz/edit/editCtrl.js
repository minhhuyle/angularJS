/**
 * Created by minhhuyle on 04/10/2017.
 */
(function () {
        angular.module("quiz-app")
            .config(['$routeProvider', function($routeProvider) {
                $routeProvider
                    .when('/edit', {
                        templateUrl: 'app/quiz/edit/edit.html',
                    })
            }])
            .controller("editCtrl", ['qcmListService', '$rootScope', function (qcmListService) {

                var self = this;

                self.numberOfQuestion = 0;

                self.showInputQCM = false;

                self.addQCM = function () {
                    self.showInputQCM = true;
                };

                self.shouldShowInputQCM = function () {
                    return self.showInputQCM;
                };

                self.submitQcm = function () {
                    self.showInputQCM = false;

                    var newQcm = {
                        title: self.qcmTitle,
                        done: false,
                        replay: false,
                        answersUser: [],
                        indexQuestion: 0,
                        score: 0,
                        questions: []
                    };
                    qcmListService.addNewQcm(newQcm);


                    self.qcmTitle = "";
                };

                self.getAllQcms = function () {
                    return qcmListService.getAllQcms();
                };

                self.deleteQcm = function (qcmToDelete) {
                    var index = qcmListService.getAllQcms().indexOf(qcmToDelete);
                    qcmListService.getAllQcms().splice(index, 1);
                }

                self.selectQcm = function (qcm) {
                    self.selectedQcm = qcm;
                    self.selectedQcmIndex = 0;
                };


                self.getSelectedQcm = function () {
                    return self.selectedQcm;
                };

                self.getCurrentQuestionOfQcmSelected = function () {
                    return self.selectedQcm.questions[self.selectedQcmIndex];
                };

                self.isFirstQuestion = function () {
                    return self.selectedQcmIndex == 0;
                };

                self.isLastQuestion = function () {
                    return (self.selectedQcmIndex >= self.selectedQcm.questions.length - 1);
                };

                self.showNextQuestion = function () {
                    self.selectedQcmIndex++;
                };

                self.showPrevQuestion = function () {
                    self.selectedQcmIndex--;
                };

                self.addNewResponse = function () {
                    var responses = self.selectedQcm.questions[self.selectedQcmIndex].responses;
                    responses.push("Réponse " + (responses.length + 1));
                };

                self.addNewQuestion = function () {
                    var newQuestion = {
                        enonce: "Enonce",
                        responses: ["Réponses 1", "Réponses 2"],
                        good: 0
                    };
                    self.selectedQcm.questions.push(newQuestion)
                };

                self.disableAddResponseWhenItReach4 = function () {
                    return self.selectedQcm.questions.length > 0 &&
                        self.selectedQcm.questions[self.selectedQcmIndex].responses.length >= 4;
                }

                self.disableEditionWhenNoQuestionPresent = function () {
                    return self.selectedQcm.questions <= 0;
                }
            }
            ])
        ;
    }
    ()
);