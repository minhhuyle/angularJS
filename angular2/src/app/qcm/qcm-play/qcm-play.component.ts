import {Component, OnInit, Input} from '@angular/core';
import {Qcm} from "../model/qcm";

@Component({
  selector: 'qcm-play',
  templateUrl: './qcm-play.component.html',
  styleUrls: ['./qcm-play.component.css']
})
export class QcmPlayComponent implements OnInit {

  @Input()
  currentQcm : Qcm;

  constructor() { }

  ngOnInit() {
  }

}
