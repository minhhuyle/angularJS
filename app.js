/**
 * Created by minhhuyle on 04/10/2017.
 */
(function () {
        angular.module("qcmMinh", ["ngMockE2E", "ngResource"])
            .filter('answer', ['filterFilter', function (filterFilter) {
                return function (qcmArray, type) {
                    switch (type) {
                        case "ALL":
                            return qcmArray;
                            break;
                        case "DONE":
                            return filterFilter(qcmArray, {done: true});
                            break;
                        case "UNDONE":
                            return filterFilter(qcmArray, {done: false});
                            break;
                        default:
                            return qcmArray;
                    }
                }
            }])
            .factory('stateManagementQcm', [function () {
                var self = this;

                self.state = "NORMAL";

                self.changeMode = function () {
                    self.state = (self.state == "EDIT") ? "NORMAL" : "EDIT";
                    return self.state;
                };

                self.returnState = function () {
                    return self.state;
                };

                return this;
            }])
            .factory('qcmResource', ['$resource', function ($resource) {
                return $resource('/qcm/:id', {id: '@id'});
            }])
            .factory('qcmListService', ['$http', 'qcmResource', function ($http, qcmResource) {
                var self = this;
                self.qcm = [];

                self.addNewQcm = function (newQcm) {
                    self.qcm.push(newQcm);
                };

                self.getAllQcms = function () {
                    return self.qcm;
                };

                self.qcm.push(qcmResource.get({id: 1}));

                return this;
            }])
            .run(function ($httpBackend) {
                    var l = [{
                        title: "1er",
                        done: false,
                        replay: false,
                        answersUser: [],
                        indexQuestion: 0,
                        score: 0,
                        questions: [{
                            enonce: "ABHHBHBB",
                            responses: ["A", "B", "C", "D"],
                            good: 1
                        },
                            {
                                enonce: "ABHklkHBHBB",
                                responses: ["A", "B", "C", "D"],
                                good: 0
                            }, {
                                enonce: "Ckdoskdlskdd",
                                responses: ["A", "B", "C", "D"],
                                good: 2
                            },
                            {
                                enonce: "iijijijij",
                                responses: ["A", "B", "C", "D"],
                                good: 3
                            }]
                    }, {
                        title: "2ème",
                        done: false,
                        replay: false,
                        answersUser: [],
                        indexQuestion: 0,
                        score: 0,
                        questions: [{
                            enonce: "ABHHBHBB",
                            responses: ["A", "B", "C", "D"],
                            good: 1
                        },
                            {
                                enonce: "ABHklkHBHBB",
                                responses: ["A", "B", "C", "D"],
                                good: 0
                            }, {
                                enonce: "Ckdoskdlskdd",
                                responses: ["A", "B", "C", "D"],
                                good: 2
                            },
                            {
                                enonce: "iijijijij",
                                responses: ["A", "B", "C", "D"],
                                good: 3
                            }]
                    }]
                    $httpBackend.whenGET('/qcm').respond(l)
                    $httpBackend.whenGET(new RegExp('\\/qcm\\/[0-9]+')).respond(l[0])
                }
            )
            .controller("quizCtrl", ['qcmListService', 'stateManagementQcm', '$rootScope', function (qcmListService, stateManagementQcm, $rootScope) {
                var self = this;
                //   $rootScope.state = "NORMAL";

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

                self.changeMode = function () {
                    stateManagementQcm.changeMode();
                };

                self.getAllQcms = function () {
                    return qcmListService.getAllQcms();
                };

                self.shouldShowNormalMode = function () {
                    return stateManagementQcm.returnState() == "NORMAL";
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
                            if (self.selectedQcm.answersUser[i] == self.selectedQcm.questions[i].good) {
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

            .controller("editCtrl", ['qcmListService', 'stateManagementQcm', '$rootScope', function (qcmListService, stateManagementQcm, $rootScope) {

                var self = this;

                self.numberOfQuestion = 0;

                self.shouldShowEditMode = function () {
                    return stateManagementQcm.returnState() == "EDIT";
                };

                self.changeMode = function () {
                    stateManagementQcm.changeMode()
                };

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
)
;