import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Qcm} from "../model/qcm";

@Component({
  selector: 'qcm-list',
  templateUrl: './qcm-list.component.html',
  styleUrls: ['./qcm-list.component.css']
})
export class QcmListComponent implements OnInit {

  @Input()
  qcms: Array<Qcm>;

  @Output()
  updateCurrentQcm :EventEmitter<Qcm> = new EventEmitter<Qcm>();

  constructor() { }

  ngOnInit() {
  }

  getClassListQcm(even){
    return (even) ? "list-group-item-light" : "";
  }

  setCurrentQcm(qcm: Qcm): void {
    this.updateCurrentQcm.emit(qcm);
  }

}
