import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  public isLoggedIn = false;
  public userRole: string;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor() {
    this.userRole = localStorage.getItem('userRole');
  }

  login(role): Observable<boolean> {
    if (!this.userRole || this.userRole === 'User') {
      this.userRole = role;
    }

    return Observable.of(true).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = null;
    alert('Successfully logged out');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  }
}
