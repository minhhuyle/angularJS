import {Questions} from "./questions.model";

export class Qcms {

  datas: Array<Qcm> = [];

  constructor() {
  }

  add(label: string) {
    this.datas.push(new Qcm(label));
  }

  getDatas(): Array<Qcm> {
    return this.datas;
  }
}


export class Qcm {

  label: string = "";
  questions: Questions = new Questions();

  constructor(label: string) {
    this.label = label;
    this.addDefault();
  }

  addDefault() {
    this.questions.add("Q1");
    this.questions.add("Q2");
  }
}
