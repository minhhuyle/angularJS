import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies-app',
  templateUrl: './movies-app.component.html',
  styleUrls: ['./movies-app.component.css']
})
export class MoviesAppComponent implements OnInit {

  numberOfMovies: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
