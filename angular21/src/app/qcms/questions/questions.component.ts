import {Component, Input, OnInit} from '@angular/core';
import {Question, Questions} from "../shared/models/questions.model";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() questions: Questions;
  currentQuestion: Question;

  constructor() {

  }

  ngOnInit() {
    this.currentQuestion = this.questions.getFirst();
  }

  getLabel(){
    return this.currentQuestion.label;
  }

  getAnswers() {
    return this.currentQuestion.getAnswers();
  }
}
