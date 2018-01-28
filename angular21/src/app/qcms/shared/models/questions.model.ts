export class Questions {

  datas: Array<Question> = [];

  constructor() {
  }

  add(label: string) {

    let question = new Question();
    question.label = label;
    question.addAnswer("A");
    question.addAnswer("B");
    question.addAnswer("C");
    question.addAnswer("D");

    this.datas.push(question);
  }

  getFirst(){
    return this.datas[0];
  }
}


export class Question {

  label: string = "";
  answers: Answers = new Answers();

  addAnswer(label: string) {
    this.answers.add(label);
  }

  getAnswers() {
    return this.answers.get();
  }
}


export class Answers {

  datas: Array<Answer> = [];

  add(label: string) {
    this.datas.push(new Answer(label));
  }

  get(){
    return this.datas;
  }
}


export class Answer {

  label: string = "";

  constructor(label: string) {
    this.label = label;
  }
}
