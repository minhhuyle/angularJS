/**
 * Created by minhhuyle on 04/10/2017.
 */
(function () {
        angular.module("quiz-app")
            .config(['$routeProvider', function($routeProvider) {
                $routeProvider
                    .when('/game', {
                        templateUrl: 'app/quiz/game/game.html',
                    });
            }])
            .controller("gameCtrl", ['qcmListService',
                function (qcmListService) {
                    var self = this;

                    self.type = "ALL";
                    self.types = [{
                        label: "Tous", type: "ALL"
                    },
                        {
                            label: "Répondu", type: "DONE"
                        },
                        {
                            label: "Pas Répondu", type: "UNDONE"
                        }];


                    self.getAllQcms = function () {
                        return qcmListService.getAllQcms();
                    };


                    self.getFiltersQcm = function () {
                        return self.types;
                    };


                    self.setFilter = function (type) {
                        self.type = type;
                    };

                    self.getFilterClass = function(type){
                        if(type == self.type){
                            return "btn-primary";
                        }
                        return false;
                    };

                    self.selectQcm = function (qcm) {
                        self.selectedQcm = qcm;

                        if (qcm.done) {
                            qcm.replay = true;
                            self.selectedQcm.indexQuestion = 0;
                        }
                    };


                    self.getSelectedQcmTitle = function () {
                        return (self.selectedQcm) && self.selectedQcm.title;
                    };


                    self.getSelectedQcmResponses = function () {
                        if (self.selectedQcm) {
                            var questionSelected = self.selectedQcm.questions[self.selectedQcm.indexQuestion];
                            return questionSelected.responses;
                        }
                        return null;
                    };


                    self.answerToQuestion = function (response) {

                        self.selectedQcm.answersUser.push(response);
                        self.selectedQcm.indexQuestion++;

                        if (self.selectedQcm.indexQuestion >= self.selectedQcm.questions.length) {
                            self.selectedQcm.done = true;

                            for (var i = 0; i < self.selectedQcm.answersUser.length; i++) {
                                var indexGoodResponse = self.selectedQcm.questions[i].good

                                if (self.selectedQcm.answersUser[i] == self.selectedQcm.questions[i]
                                        .responses[indexGoodResponse]) {
                                    self.selectedQcm.score++;
                                }
                            }
                        }
                    };


                    self.getIndexOfQuestion = function () {
                        return (self.selectedQcm) && self.selectedQcm.indexQuestion + 1;
                    };


                    self.isDone = function () {
                        return self.selectedQcm.done;
                    };

                    self.shouldShowScore = function () {
                        if (self.currentQcm == undefined) return false;
                        return (self.selectedQcm) && self.isDone();
                    };


                    self.showScore = function () {
                        return (self.selectedQcm) && self.selectedQcm.score;
                    };

                    self.getClassFinishedQuiz = function (question) {
                        if (question.done) {
                            return "btn-success";
                        }
                        return "";
                    };


                    self.shouldShowReplay = function () {
                        return self.selectedQcm && self.selectedQcm.replay
                            && (self.selectedQcm.indexQuestion < self.selectedQcm.questions.length);
                    };


                    self.showLevel = function () {
                        if (self.score == 0) return "text-danger";
                        else if ((self.selectedQcm) && self.score == self.selectedQcm.questions.length) return "text-success";
                        return "text-info";
                    };

                    self.replayNextQuestion = function () {
                        (self.selectedQcm) && self.selectedQcm.indexQuestion++;
                    };


                    self.showColorResponse = function (reponse) {
                        var myResponse = self.selectedQcm.answersUser[self.selectedQcm.indexQuestion];

                        var indexOfGoodResponse = self.selectedQcm.questions[self.selectedQcm.indexQuestion].good;
                        var goodResponse = self.selectedQcm.questions[self.selectedQcm.indexQuestion]
                            .responses[indexOfGoodResponse];

                        if (reponse == goodResponse) {
                            return "btn-success";
                        } else if (reponse == myResponse) {
                            return "btn-danger";
                        }
                    }

                }])
        ;
    }
    ()
);