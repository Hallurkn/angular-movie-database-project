import { AuthService } from './../../services/auth.service';
import { MovieDataService } from './../../services/movie-data.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

@Injectable()
export class MoviesComponent implements OnInit {
  public userRole: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userRole = this.authService.userRole;
  }
}
