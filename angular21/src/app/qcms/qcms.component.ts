import { Component, OnInit } from '@angular/core';
import {Qcm} from "./shared/models/qcms.model";

@Component({
  selector: 'app-qcms',
  templateUrl: './qcms.component.html',
  styleUrls: ['./qcms.component.css']
})
export class QcmsComponent implements OnInit {

  playMode: any = PlayMode.EDIT;
  qcms: Array<Qcm> = [];

  constructor() {
  }

  ngOnInit() {
  }

  isCurrentPlayMode(playMode){
    return playMode === this.playMode;
  }

  getPlayModes(){
    return [PlayMode.EDIT, PlayMode.VISUALIZATION];
  }

  setCurrentPlayMode(playMode: String) {
    this.playMode = playMode;
  }

  shouldShowVisualizationPlayMode() {
    return this.playMode === PlayMode.VISUALIZATION;
  }

  shouldShowEditPlayMode() {
    return this.playMode === PlayMode.EDIT;
  }

  getQcms(){
    return this.qcms;
  }

  shouldShowQcms() {
    return this.qcms.length > 0;
  }
}

const PlayMode = {
  EDIT : "Edit",
  VISUALIZATION : "Visualization"
};
