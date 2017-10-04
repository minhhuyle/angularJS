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

                    if(qcm.done){
                        qcm.replay = true;
                        self.answers[qcm.title].indexQuestion = 0;
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
                            self.selectedQcm.done = true;

                            for(var i = 0; i< currentAnswer.datas.length; i++){
                                if(currentAnswer.datas[i] == self.selectedQcm.questions[i].good){
                                    self.selectedQcm.score++;
                                }
                            }
                        }
                    };
                };


                self.getIndexOfQuestion = function () {
                    return (self.selectedQcm) &&  getCurrentAnswer().datas.length + 1;
                };



                self.isDone = function(){
                    return self.selectedQcm .done;
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
                    return self.selectedQcm.replay;
                };


                self.showLevel = function () {
                    if (self.score == 0) return "text-danger";
                    else if ((self.selectedQcm) && self.score == self.selectedQcm.questions.length) return "text-success";
                    return "text-info";
                };

                self.replayNextQuestion = function () {
                    self.selectedQcm.indexQuestion++;
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
                        replay: false,
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
                }

            }
            ])
        ;
    }
    ()
)
;