import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const localLoggedIn = localStorage.getItem('isLoggedIn');
    const localUserRole = localStorage.getItem('userRole');

    if (localLoggedIn && localUserRole === 'Admin') {
      return true;
    }

    if (this.authService.isLoggedIn && this.authService.userRole === 'Admin') {
      localStorage.setItem('isLoggedIn', this.authService.isLoggedIn.toString());
      localStorage.setItem('userRole', this.authService.userRole);
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
