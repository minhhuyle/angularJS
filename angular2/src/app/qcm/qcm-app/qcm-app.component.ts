import { Component, OnInit } from '@angular/core';
import {Qcm} from "../model/qcm";

@Component({
  selector: 'qcm-app',
  templateUrl: './qcm-app.component.html',
  styleUrls: ['./qcm-app.component.css']
})
export class QcmAppComponent implements OnInit {

  qcms: Array<Qcm> = [];
  showCreateQcm: boolean = false;
  currentQcm: string = null;

  constructor() {
  }

  ngOnInit() {
  }

  setCurrentQcm(qcm: string): void {
    this.currentQcm = qcm;
  }

  onClickCreateNewQcm():void {
    this.showCreateQcm = !this.showCreateQcm;
  }

  createNewQcm(labelQcm):void {
    let qcm: Qcm = new Qcm();
    qcm.label = labelQcm.value;
    labelQcm.value = "";
    this.qcms.push(qcm);
  }

  getClassListQcm(even){
    return (even) ? "list-group-item-light" : "";
  }
}
