export class Qcm {

  label: string = "";
  questions: Array<Question> = [];

  constructor(label: string) {
    this.label = label;
  }

  addQuestion(question: Question) {
    this.questions.push(question);
  }
}

export class Question {

  label: string = "";
  answers: Array<Answer> = [];


  constructor(label: string) {
    this.label = label;
    this.answers.push(new Answer("1", true));
    this.answers.push(new Answer("2", false));
  }

  addNewAnswer(){
    this.answers.push(new Answer((this.answers.length+1).toString(), false));
  }
}

export class Answer {

  label: string = "";
  valid: boolean = false;

  constructor(label: string, valid: boolean) {
    this.label = label;
    this.valid = valid;
  }
}
