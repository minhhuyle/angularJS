//'use strict'

(function(){

	angular.module("myapp", [])
		.controller("quizCtrl", [function(){
			var self = this;


			self.data = [
				{title: "HMTL5"},
				{title: "JS"},
				{title: "Angular"}
			];


			self.selectData = null;


			self.selectNote = function(data){
				self.selectData = data;
			}
		}])
}());