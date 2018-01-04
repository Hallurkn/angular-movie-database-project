import { MovieDataService } from './../../services/movie-data.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.css']
})
export class NewMoviesComponent implements OnInit {
  public recentMovies: Movie[] = [];

  constructor(private data: MovieDataService) {
    this.data.movies
      .subscribe(movieData => {
        this.getRecentlyAddedMovies(movieData, this.recentMovies, 3);
      });
  }

  getRecentlyAddedMovies(movieArr: Movie[], recentArr: Movie[], numMov: number) {
    let mostRecent: Date;
    let mostRecentMovie: Movie;
    let mostRecentMovieIndex: number;

    // If numMov is above the lenght of array, set numMov to length of array
    numMov = ((movieArr.length > numMov) ? numMov : movieArr.length);

    for (let j = 0; j < numMov; j++) {
      for (let i = 0; i < movieArr.length; i++) {
        const movie = movieArr[i];

        if (i === 0) {
          mostRecent = movie.added;
        }

        if (mostRecent <= movie.added) {
          mostRecent = movie.added;
          mostRecentMovie = movie;
          mostRecentMovieIndex = i;
        }

        if (i === (movieArr.length - 1)) {
          recentArr.push(mostRecentMovie);
          movieArr.splice(mostRecentMovieIndex, 1);
        }
      }
    }
  }

  ngOnInit() {
  }

}
