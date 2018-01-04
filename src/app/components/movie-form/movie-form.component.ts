import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../../services/movie-data.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  private movie: Movie;

  constructor(private router: Router, private route: ActivatedRoute, private data: MovieDataService) {
    route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.data.getMovieById(id).subscribe(movieData => {
          this.movie = movieData;
        });
      } else {
        this.movie = new Movie('', '', undefined, '', '', undefined, '', '');
      }
    });
  }

  ngOnInit() {
  }

  private onSubmit(form) {
    if (form.valid) {
      this.data.addMovie(this.movie).subscribe();
      this.router.navigate(['movies']);
    }
  }

  private cancelForm(form): void {
    form.reset();
    this.router.navigate(['movies']);
  }
}
