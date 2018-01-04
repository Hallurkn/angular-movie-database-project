import { Movie } from './../models/movie';
import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieDataService implements OnInit {
  public movies: Observable<Movie[]>;

  constructor(private api: ApiService) {
    this.movies = this.getAllMovies();
  }

  ngOnInit() { }

  // Simulate GET /todos
  getAllMovies(): Observable<Movie[]> {
    return this.api.getAllMovies();
  }

  // Simulate POST /todos
  addMovie(movie: Movie): Observable<Movie> {
    return this.api.createMovie(movie);
  }

  // Simulate DELETE /todos/:id
  deleteMovieById(movieId: number): Observable<Movie> {
    return this.api.deleteMovieById(movieId);
  }

  // Simulate PUT /todos/:id
  updateMovie(movie: Movie): Observable<Movie> {
    return this.api.updateMovie(movie);
  }

  // Simulate GET /todos/:id
  getMovieById(todoId: number): Observable<Movie> {
    return this.api.getMovieById(todoId);
  }
}
