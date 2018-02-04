import { Component, OnInit } from '@angular/core';
import {Qcm} from "./shared/models/qcms.model";

@Component({
  selector: 'app-qcms',
  templateUrl: './qcms.component.html',
  styleUrls: ['./qcms.component.css']
})
export class QcmsComponent implements OnInit {

  playMode: any = PlayMode.EDIT;
  createButtonQcmState: boolean = false;
  qcms: Array<Qcm> = [];
  qcmSelected: Qcm = null;

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

  showOrHideQcm() {
    this.createButtonQcmState = !this.createButtonQcmState;
    if(this.createButtonQcmState){
      this.qcmSelected = null;
    }
  }

  shouldShowCreateQcm() {
    return this.createButtonQcmState;
  }

  registerQcm(qcmForm) {
    this.qcms.push(new Qcm(qcmForm.value.label));
    qcmForm.reset();
  }

  getQcms(){
    return this.qcms;
  }

  shouldShowQcms() {
    return this.qcms.length > 0;
  }

  selectQcmToEdit(qcm: Qcm) {
    this.qcmSelected = qcm;
    this.createButtonQcmState = false;
  }

  shouldShowSelectedQcmToEdit(){
    return this.qcmSelected !== null;
  }

  isCurrentSelectedQcm(qcm: Qcm) {
    return this.qcmSelected === qcm;
  }

  getSelectedQcmLabel(){
    return this.qcmSelected.label;
  }
}

const PlayMode = {
  EDIT : "Edit",
  VISUALIZATION : "Visualization"
};
