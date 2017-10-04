/**
 * Created by minhhuyle on 04/10/2017.
 */
(function () {

        angular.module("qcmMinh", [])
            .controller("quizCtrl", ['$rootScope', function ($rootScope) {
                var self = this;
                $rootScope.state = "NORMAL";
                self.answers = {};



                let getCurrentAnswer = function(){
                    return (self.selectedQcm) && self.answers[self.selectedQcm.title];
                };



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
                    if (!self.answers[qcm.title]) {
                        self.answers[qcm.title] = {indexQuestion: 0, datas: []};
                    }
                };


                self.getSelectedQcmTitle = function () {
                    return (self.selectedQcm) && self.selectedQcm.title;
                };



                self.getSelectedQcmResponses = function () {
                    if (self.selectedQcm) {
                        var indexCurrentQuestionOfSelectedQuiz = getCurrentAnswer().indexQuestion;
                        var questionSelected = self.selectedQcm.questions[indexCurrentQuestionOfSelectedQuiz];
                        return questionSelected.responses;
                    }
                    return null;
                };



                self.answerToQuestion = function (response) {
                    var currentAnswer = getCurrentAnswer();
                    if(currentAnswer){
                        currentAnswer.datas.push(response);
                        currentAnswer.indexQuestion++;

                        if(currentAnswer.indexQuestion >= self.selectedQcm.questions.length){
                            currentAnswer.done = true;
                        }
                    };
                };


                self.getIndexOfQuestion = function () {
                    return getCurrentAnswer().indexQuestion + 1;
                };



                self.isDone = function(){
                    return getCurrentAnswer().done;
                };








                self.selectQuiz = function (data) {
                    if (self.selectData != data) {
                        self.currentQcm = 0;
                        self.score = 0;
                        self.questionsAnswer = [];
                        self.replay = false;
                    } else if (self.replay) {
                        self.currentQcm = 0;
                    }
                    self.selectData = data;
                };

                self.shouldShowReplay = function () {
                    return self.replay && self.currentQcm < self.selectData.questions.length;
                };

                self.shouldShowSelectedData = function () {
                    if (self.selectData != null) {
                        if (self.currentQcm >= self.selectData.questions.length) {
                            return null;
                        }

                        return true && !self.shouldShowReplay();
                    }

                    return null
                };

                self.showQuestion = function () {
                    return (self.selectData) && self.selectData.questions[self.currentQcm].enonce;
                };


                self.answerQuestion = function (reponse) {
                    if (reponse == self.selectData.questions[self.currentQcm].good) {
                        self.score++;
                    }

                    self.questionsAnswer.push(reponse);
                    self.currentQcm++;

                    if (self.currentQcm >= self.selectData.questions.length) {
                        self.replay = true;
                    }
                };






                self.shouldShowScore = function () {
                    if (self.currentQcm == undefined) return false;
                    return (self.selectData) && self.currentQcm >= self.selectData.questions.length;
                };

                self.showFinishedQuestion = function (question) {
                    if ((self.selectData) && question.title == self.selectData.title) {
                        return (self.shouldShowScore()) && "btn-success";
                    }
                    return false;
                };


                self.showScore = function () {
                    return self.score;
                }

                self.showLevel = function () {
                    if (self.score == 0) return "text-danger";
                    else if ((self.selectData) && self.score == self.selectData.questions.length) return "text-success";
                    return "text-info";
                }


                self.replayNextQuestion = function () {
                    self.currentQcm++;
                };


                self.showColorResponse = function (reponse) {
                    var myResponse = self.questionsAnswer[self.currentQcm];
                    var goodResponse = self.selectData.questions[self.currentQcm].good;

                    if (reponse == goodResponse) {
                        return "btn-success";
                    } else if (reponse == myResponse) {
                        return "btn-danger";
                    }
                }


            }])


            .controller("editCtrl", ['$rootScope', function ($rootScope) {

                var self = this;

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
                }

            }
            ])
        ;
    }
    ()
)
;