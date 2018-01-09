import { Movie } from './models/movie';
import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './services/movie-data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private isLoggedIn: boolean;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  ngOnInit() {
  }
}
