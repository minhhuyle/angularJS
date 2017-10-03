'use strict'

(function(){

	angular.module("myapp", [])
		.controller("quizCtrl", [function(){
			var self = this;


			self.data = [
				{title: "HMTL5",
                    questions: [{
                        enonce: "ABHHBHBB",
                        reponses:["A", "B", "C", "D"],
                        good: "A"
                    },
                        {
                            enonce: "ABHHBHBB",
                            reponses:["A", "B", "C", "D"],
                            good: "B"
                        }],
                    questions: [{
                        enonce: "Ckdoskdlskdd",
                        reponses:["A", "B", "C", "D"],
                        good: "C"
                    },
                        {
                            enonce: "iijijijij",
                            reponses:["A", "B", "C", "D"],
                            good: "A"
                        }]},
				{title: "JS",
                    questions: [{
                        enonce: "ABHHBHBB",
                        reponses:["A", "B", "C", "D"],
                        good: "A"
                    },
                        {
                            enonce: "ABHHBHBB",
                            reponses:["A", "B", "C", "D"],
                            good: "B"
                        }],
                    questions: [{
                        enonce: "Ckdoskdlskdd",
                        reponses:["A", "B", "C", "D"],
                        good: "C"
                    },
                        {
                            enonce: "iijijijij",
                            reponses:["A", "B", "C", "D"],
                            good: "A"
                        }]},
				{title: "Angular",
                    questions: [{
                        enonce: "ABHHBHBB",
                        reponses:["A", "B", "C", "D"],
                        good: "A"
                    },
                        {
                            enonce: "ABHHBHBB",
                            reponses:["A", "B", "C", "D"],
                            good: "B"
                        }],
                    questions: [{
                        enonce: "Ckdoskdlskdd",
                        reponses:["A", "B", "C", "D"],
                        good: "C"
                    },
                        {
                            enonce: "iijijijij",
                            reponses:["A", "B", "C", "D"],
                            good: "A"
                        }]}
			];


			self.selectData = null;

			self.selectNote = function(data){
				self.selectData = data;
				self.currentQuestion = 0;
				self.score = 0;
			};

            self.shouldShowSelectedData = function(){
            	if(self.selectData != null) {
                    if(self.currentQuestion >= self.selectData.questions.length) {
                        return null;
                    }
                    return self.selectData != null;
                }
            };

            self.showQuestion = function(){
            	return self.selectData.questions[self.currentQuestion].enonce;
			};

			self.getReponses = function(){
            	return self.selectData.questions[self.currentQuestion].reponses;
			}

			self.changeCurrentQuestion = function(reponse){
				if(reponse == self.selectData.questions[self.currentQuestion].good) {
					self.score ++;
				}
				self.currentQuestion ++;
			}


		}])
}());