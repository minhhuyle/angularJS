/**
 * Created by minhhuyle on 04/10/2017.
 */
(function () {

        angular.module("qcmMinh", [])
            .controller("quizCtrl", ['$rootScope', function ($rootScope) {
                var self = this;
                $rootScope.state = "NORMAL";
                self.answersUser = {};
                

                self.changeMode = function () {
                    $rootScope.state = "EDIT";
                };

                self.shouldShowNormalMode = function () {
                    return $rootScope.state == "NORMAL";
                };


                self.getAllQcms = function () {
                    return $rootScope.qcm;
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
                    var goodResponse = self.selectedQcm.questions[self.selectedQcm.indexQuestion].good;

                    if (reponse == goodResponse) {
                        return "btn-success";
                    } else if (reponse == myResponse) {
                        return "btn-danger";
                    }
                }

            }])


            .controller("editCtrl", ['$rootScope', function ($rootScope) {

                var self = this;

                self.numberOfQuestion = 0;

                self.shouldShowEditMode = function () {
                    return $rootScope.state == "EDIT";
                };

                self.changeMode = function () {
                    $rootScope.state = "NORMAL";
                };

                var qcm = [];
                $rootScope.qcm = qcm;


                self.showInputQCM = false;

                self.addQCM = function () {
                    self.showInputQCM = true;
                };

                self.shouldShowInputQCM = function () {
                    return self.showInputQCM;
                };

                self.showEditMode = function () {
                    return $rootScope.state == "EDIT";
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
                        questions: [{
                            enonce: "ABHHBHBB",
                            responses: ["A", "B", "C", "D"],
                            good: "A"
                        },
                            {
                                enonce: "ABHklkHBHBB",
                                responses: ["A", "B", "C", "D"],
                                good: "B"
                            }, {
                                enonce: "Ckdoskdlskdd",
                                responses: ["A", "B", "C", "D"],
                                good: "C"
                            },
                            {
                                enonce: "iijijijij",
                                responses: ["A", "B", "C", "D"],
                                good: "A"
                            }]
                    };

                    qcm.push(newQcm);


                    self.qcmTitle = "";
                };

                self.getAllQcms = function () {
                    return qcm;
                };

                self.deleteQcm = function (qcmToDelete) {
                    var index = qcm.indexOf(qcmToDelete);
                    alert(index);
                    qcm.splice(index, 1);
                }

            }
            ])
        ;
    }
    ()
)
;