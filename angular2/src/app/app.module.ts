import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesAppComponent } from './movies-app/movies-app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NavAppComponent } from './nav-app/nav-app.component';
import { QcmAppComponent } from './qcm-app/qcm-app.component';
import { QcmPlayComponent } from './qcm-play/qcm-play.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesAppComponent,
    MoviesListComponent,
    NavAppComponent,
    QcmAppComponent,
    QcmPlayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
