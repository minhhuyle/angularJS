/**
 * Created by minhhuyle on 07/10/2017.
 */
export class Qcm{
  label: string = "";
  questions: Array<Question>;

  constructor() {
  }

  createNewQuestion(){
    this.questions.push(new Question());
  }
}


class Question{
  statement: string = "";
  responses: Responses = new Responses();

  constructor() {
  }
}

class Responses{
  datas: Array<string>;
  goodResponse: number;
}
