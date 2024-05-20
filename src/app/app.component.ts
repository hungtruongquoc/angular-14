import { Component } from '@angular/core';
import {AuthService} from "./core/services/auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Angular';

  constructor(private authService: AuthService, private router: Router) {}

  onLogOutClicked() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  showLogout() {
    return this.authService.hasLoginInfo();
  }

  showLogin() {
    return !this.authService.hasLoginInfo();
  }
}
