export class Qcm {

  label: string = "";
  questions: Array<Question> = [];

  constructor(label: string) {
    this.label = label;
  }
}

export class Question {

  label: string = "";
  answers: Array<Answer> = [];
}

export class Answer {

  label: string = "";
  valid: boolean = false;

  constructor(label: string, valid: boolean) {
    this.label = label;
    this.valid = valid;
  }
}
