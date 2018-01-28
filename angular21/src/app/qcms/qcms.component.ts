import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qcms',
  templateUrl: './qcms.component.html',
  styleUrls: ['./qcms.component.css']
})
export class QcmsComponent implements OnInit {

  qcms: Array<string> = [
    'JAVA',
    'PHP',
    'JavaScript',
    'HTML'
  ];

  currentQcm: string = null;

  constructor() { }

  ngOnInit() {
  }

  setCurrentQcm(qcm: string): void {
    this.currentQcm = qcm;
  }

}
