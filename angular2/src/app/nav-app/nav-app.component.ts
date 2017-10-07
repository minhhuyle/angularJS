import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-app',
  templateUrl: './nav-app.component.html',
  styleUrls: ['./nav-app.component.css']
})
export class NavAppComponent implements OnInit {

  apps: Array<string> = [
    'QCM',
    'Movies'
  ];

  appSelected: string;

  constructor() {

  }

  ngOnInit() {
    this.appSelected = this.apps[0];
  }

  onClickApp(app:string){
    this.appSelected = app;
  }

  getClassByApp(app:string){
    let appClass = (app == this.appSelected) ? "active" : "";
    return appClass;
  }

}
