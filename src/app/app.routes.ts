import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router/src/config';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { AdminGuardService } from './services/admin-guard.service';
import { UserGuardService } from './services/user-guard.service';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'movies', component: MoviesComponent, /* canActivate: [UserGuardService], */
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: MovieListComponent },
            { path: 'cards', component: MovieCardComponent },
            { path: 'create', component: MovieFormComponent, /* canActivate: [AdminGuardService] */ },
            { path: 'edit/:id', component: MovieFormComponent, /* canActivate: [AdminGuardService] */ },
            { path: ':id', component: MovieDetailsComponent },
        ]
    },
    {
        path: '',
        redirectTo: 'home', // where to go when no routes found
        pathMatch: 'full'
    },
];

