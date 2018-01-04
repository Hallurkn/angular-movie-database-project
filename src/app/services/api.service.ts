import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

import { Http, Response } from '@angular/http';
import { Movie } from './../models/movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Const Variables
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  // Constructor / dependencies
  constructor(private http: Http) { }

  // HandleError Method
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  // API: GET /todos
  public getAllMovies(): Observable<Movie[]> {
    return this.http
      .get(API_URL + '/movies')
      .map(response => {
        const movies = response.json();
        return movies;
      })
      .catch(this.handleError);
  }

  // API: POST /todos
  public createMovie(movie: Movie): Observable<Movie> {
    return this.http
      .post(API_URL + '/movies', movie)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  // API: GET /todos/:id
  public getMovieById(movieId: number): Observable<Movie> {
    return this.http
      .get(API_URL + '/movies/' + movieId)
      .map(response => {
        const movie = response.json();
        return movie;
      })
      .catch(this.handleError);
  }

  // API: PUT /todos/:id
  public updateMovie(movie: Movie): Observable<Movie> {
    return this.http
      .put(API_URL + '/movies/' + movie.id, movie)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  // DELETE /todos/:id
  public deleteMovieById(movieId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/movies/' + movieId)
      .map(response => null)
      .catch(this.handleError);
  }
}
