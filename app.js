(function () {

    angular.module("myapp", [])
        .controller("managerCtrl", [function () {
            var self = this;
            self.state = "NORMAL";

            self.changeMode = function() {
                self.state = (self.state == "NORMAL") ? "EDIT" : "NORMAL";
            };
        }])

        .controller("quizCtrl", ['$rootScope', function ($rootScope) {
            var self = this;
            $rootScope.state = "NORMAL";

            self.changeMode = function() {
                $rootScope.state = "EDIT";
            };

            self.shouldShowNormalMode = function(){
                return $rootScope.state == "NORMAL";
            };



            self.data = [
                {
                    title: "HMTL5",
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
                },
                {
                    title: "JS",
                    questions: [{
                        enonce: "ABHHBHBB",
                        responses: ["A", "B", "C", "D"],
                        good: "A"
                    },
                        {
                            enonce: "ABHHBHBB",
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
                },
                {
                    title: "Angular",
                    questions: [{
                        enonce: "ABHHBHBB",
                        responses: ["A", "B", "C", "D"],
                        good: "A"
                    },
                        {
                            enonce: "ABHHBHBB",
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
                }
            ];


            self.selectData = null;

            self.selectQuiz = function (data) {
                if(self.selectData != data){
                    self.currentQcm = 0;
                    self.score = 0;
                    self.questionsAnswer = [];
                    self.replay = false;
                }else if (self.replay){
                    self.currentQcm = 0;
                }
                self.selectData = data;
            };

            self.shouldShowReplay = function(){
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

            self.getReponses = function () {
                return (self.selectData) && self.selectData.questions[self.currentQcm].responses;
            };

            self.getIndexOfQuestion = function () {
                return self.currentQcm + 1;
            };

            self.answerQuestion = function (reponse) {
                if (reponse == self.selectData.questions[self.currentQcm].good) {
                    self.score++;
                }

                self.questionsAnswer.push(reponse);
                self.currentQcm++;

                if(self.currentQcm >= self.selectData.questions.length){
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


            self.replayNextQuestion = function(){
              self.currentQcm++;
            };


            self.showColorResponse = function (reponse) {
                var myResponse = self.questionsAnswer[self.currentQcm];
                var goodResponse = self.selectData.questions[self.currentQcm].good;
                
                if(reponse == goodResponse){
                    return "btn-success";
                }else if(reponse == myResponse){
                    return "btn-danger";
                }
            }


        }])


        .controller("editController", ['$rootScope', function ($rootScope) {

            var self = this;
            self.numberOfQuestion =0;

            self.shouldShowEditMode = function(){
                return $rootScope.state == "EDIT";
            };

            self.changeMode = function() {
                $rootScope.state = "NORMAL";
            };

            var qcm = [];
            $rootScope.qcm = qcm;


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

            self.addQuestion = function() {
                alert("hello");
                self.numberOfQuestion++;
            }

        }]);
}());