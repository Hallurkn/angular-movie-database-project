import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private role = 'User';

  private roles = ['User', 'Admin'];

  message: string;

  constructor(public authService: AuthService, public router: Router) { }

  private onSubmit(form) {
    if (form.valid) {
      this.authService.login(this.role).subscribe(() => {

        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

          // Redirect the user
          this.router.navigate([redirect]);
        }
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
