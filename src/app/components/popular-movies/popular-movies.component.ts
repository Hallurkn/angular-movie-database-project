import { MovieDataService } from './../../services/movie-data.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  public popularMovies: Movie[] = [];

  constructor(private data: MovieDataService) {
    this.data.movies
      .subscribe(movieData => {
        this.getMostPopularMovies(movieData, this.popularMovies, 3);
      });
  }

  getMostPopularMovies(movieArr: Movie[], popularArr: Movie[], numMov: number) {
    let largest = 0;
    let mostPopularMovie: Movie;
    let mostPopularMovieIndex: number;

    // If numMov is above the lenght of array, set numMov to length of array
    numMov = ((movieArr.length > numMov) ? numMov : movieArr.length);

    for (let j = 0; j < numMov; j++) {
      for (let i = 0; i < movieArr.length; i++) {
        const movie = movieArr[i];

        if (largest < movie.clickCount) {
          largest = movie.clickCount;
          mostPopularMovie = movie;
          mostPopularMovieIndex = i;
        }

        if (i === (movieArr.length - 1)) {
          popularArr.push(mostPopularMovie);
          movieArr.splice(mostPopularMovieIndex, 1);
          largest = 0;
        }
      }
    }
  }

  ngOnInit() {
  }

}
