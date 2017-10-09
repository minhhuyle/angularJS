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
  currentQcm: Qcm = null;

  constructor() {
  }

  ngOnInit() {
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

}
