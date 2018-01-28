import { Component, OnInit } from '@angular/core';
import {Qcm, Qcms} from "./shared/models/qcms.model";

@Component({
  selector: 'app-qcms',
  templateUrl: './qcms.component.html',
  styleUrls: ['./qcms.component.css']
})
export class QcmsComponent implements OnInit {

  qcms: Qcms = new Qcms();

  currentQcm: Qcm = null;

  constructor() {
    this.qcms.add("JAVA");
    this.qcms.add("PHP");
    this.qcms.add("JavaScript");
    this.qcms.add("HTML");
  }

  ngOnInit() {
  }

  setCurrentQcm(qcm: Qcm): void {
    this.currentQcm = qcm;
  }

}
