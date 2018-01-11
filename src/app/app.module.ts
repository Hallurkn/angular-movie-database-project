import { ApiService } from './services/api.service';
import { MovieDataService } from './services/movie-data.service';
import { UserGuardService } from './services/user-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { AuthService } from './services/auth.service';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { NewMoviesComponent } from './components/new-movies/new-movies.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieFormComponent } from './components/movies/movie-form/movie-form.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieDetailsComponent,
    MoviesComponent,
    MovieCardComponent,
    LoginComponent,
    PopularMoviesComponent,
    NewMoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ApiService, MovieDataService, AuthService, UserGuardService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
