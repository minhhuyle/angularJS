/**
 * Created by minhhuyle on 07/10/2017.
 */
export class Qcm {
  label: string = "";
  questions: Array<Question> = [];
  index: number = 0;

  constructor() {
    let question = new Question();
    question.statement = "zda"

    this.questions.push(question)
    this.questions.push(question)
  }

  getCurrentQuestion(): Question {
    return this.questions[this.index];
  }

  getCurrentResponses(){
    return this.questions[this.index].responses;
  }

}


class Question {
  statement: string = "";
  responses: Responses = new Responses();
  answer: Array<number>;

  constructor() {
  }

  addResponse(response: string) {
    this.responses.datas.push(response);
  }
}

class Responses {
  datas: Array<string> = ["Réponse 1", "Réponse 2"];
  goodResponse: number = 0;
}
