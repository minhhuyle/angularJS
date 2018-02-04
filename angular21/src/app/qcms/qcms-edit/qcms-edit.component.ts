import {Component, Input, OnInit} from '@angular/core';
import {Qcm, Question} from "../shared/models/qcms.model";

@Component({
  selector: 'app-qcms-edit',
  templateUrl: './qcms-edit.component.html',
  styleUrls: ['./qcms-edit.component.css']
})
export class QcmsEditComponent implements OnInit {

  @Input()
  qcms: Array<Qcm>;

  createButtonQcmState: boolean = false;
  qcmSelected: Qcm = null;
  questionSelected: Question = null;

  constructor() { }

  ngOnInit() {
  }

  registerQcm(qcmForm) {
    this.qcms.push(new Qcm(qcmForm.value.label));
    qcmForm.reset();
  }

  getQcms(){
    return this.qcms;
  }

  //should
  shouldShowQcms() {
    return this.qcmSelected === null;
  }

  shouldShowQuestions() {
    return this.qcmSelected && this.questionSelected === null;
  }

  shouldShowAnswers() {
    return this.questionSelected;
  }
  //

  selectQcmToEdit(qcm: Qcm) {
    this.qcmSelected = qcm;
    this.createButtonQcmState = false;
  }

  shouldShowSelectedQcmToEdit(){
    return this.qcmSelected !== null;
  }

  getSelectedQcmLabel(){
    return this.qcmSelected.label;
  }

  registerQuestion(questionForm) {
    this.qcmSelected.addQuestion(new Question(questionForm.value.label));
    questionForm.reset();
  }

  getCurrentQuestions(){
    return this.qcmSelected.questions;
  }

  selectQuestionToEdit(question: Question) {
    this.questionSelected = question;
  }

  backToQcms() {
    this.backToQuestions();
    this.qcmSelected = null;
  }

  backToQuestions() {
    this.questionSelected = null;
  }
}
