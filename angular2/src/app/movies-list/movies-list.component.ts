import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Array<string> = [
    'Batman vs Superman',
    'Star Wars',
    'The Revenant',
    'Mad max: Fury Road'
  ]

  constructor() { }

  ngOnInit() {
  }

}
