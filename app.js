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
                            enonce: "ABHklkHBHBB",
                            reponses:["A", "B", "C", "D"],
                            good: "B"
                        },{
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
                        },{
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
                        },{
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

				   return true;
                }

                return null
            };

            self.showQuestion = function(){
				return (self.selectData) && self.selectData.questions[self.currentQuestion].enonce;
			};

			self.getReponses = function(){
            	return (self.selectData) && self.selectData.questions[self.currentQuestion].reponses;
			};

			self.getIndexOfQuestion = function(){
				return self.currentQuestion+1;
			};

			self.changeCurrentQuestion = function(reponse){
				if(reponse == self.selectData.questions[self.currentQuestion].good) {
					self.score ++;
				}
				self.currentQuestion ++;
			}

			self.shouldShowScore = function() {
				if(self.currentQuestion == undefined) return false;
				return (self.selectData) && self.currentQuestion >= self.selectData.questions.length;
			};

			self.showFinishedQuestion = function(question){
				if((self.selectData) && question.title == self.selectData.title){
					return (self.shouldShowScore()) && "btn-success";
				}
				return false;
			};



			self.showScore = function() {
				return self.score;
			}

			self.showLevel = function() {
				if(self.score == 0) return "text-danger";
				else if((self.selectData) && self.score == self.selectData.questions.length) return "text-success";
				return "text-info";
			}

		}])
}());