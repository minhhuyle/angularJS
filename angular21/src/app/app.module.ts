import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QcmsComponent } from './qcms/qcms.component';
import { QuestionsComponent } from './qcms/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QcmsComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
