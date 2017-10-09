import { Component, OnInit, Input} from '@angular/core';
import {Qcm} from "../model/qcm";

@Component({
  selector: 'qcm-list',
  templateUrl: './qcm-list.component.html',
  styleUrls: ['./qcm-list.component.css']
})
export class QcmListComponent implements OnInit {

  @Input()
  qcms: Array<Qcm>;


  @Input()
  currentQcm: Qcm;


  constructor() { }

  ngOnInit() {
  }

  getClassListQcm(even){
    return (even) ? "list-group-item-light" : "";
  }

  setCurrentQcm(qcm: Qcm): void {
    this.currentQcm = qcm;
  }

}
