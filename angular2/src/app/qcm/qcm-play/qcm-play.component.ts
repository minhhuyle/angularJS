import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'qcm-play',
  templateUrl: './qcm-play.component.html',
  styleUrls: ['./qcm-play.component.css']
})
export class QcmPlayComponent implements OnInit {

  @Input()
  currentQcm : any;

  constructor() { }

  ngOnInit() {
  }

}
