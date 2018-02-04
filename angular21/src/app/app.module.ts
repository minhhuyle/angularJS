import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QcmsComponent } from './qcms/qcms.component';
import { QuestionsComponent } from './qcms/questions/questions.component';
import { QcmsEditComponent } from './qcms/qcms-edit/qcms-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    QcmsComponent,
    QuestionsComponent,
    QcmsEditComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
