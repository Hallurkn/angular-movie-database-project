import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import { MovieDataService } from '../../../services/movie-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private movie: Movie;

  constructor(private route: ActivatedRoute, private data: MovieDataService) {
    route.params.subscribe(params => {
      const id = params['id'];
      this.data.getMovieById(id)
        .subscribe(movie => {
          this.movie = movie;
        }
        );
    });
  }

  ngOnInit() {
  }

}
