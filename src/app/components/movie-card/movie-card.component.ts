import { MoviesComponent } from './../movies/movies.component';
import { MovieDataService } from './../../services/movie-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  private movies: Movie[];
  private userRole: string;

  constructor(private data: MovieDataService, private parentComponent: MoviesComponent) {
  }

  ngOnInit() {
    this.data.movies.subscribe(movieData => {
      this.movies = movieData;
    });
    this.userRole = this.parentComponent.userRole;
  }

  deleteMovie(movieId) {
    const confirmDelete = confirm('Are you sure you want to delete this movie?');

    if (confirmDelete) {
      this.data.deleteMovieById(movieId)
        .subscribe(data => {
          this.movies = this.movies.filter(x => x.id !== movieId);
        }
        );
    }
  }

  onDetailsClick(movie) {
    movie.clickCount++;
    this.data.updateMovie(movie).subscribe();
  }
}
