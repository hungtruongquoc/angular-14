import { Component } from '@angular/core';
import {AuthService} from "./core/services/auth-service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Angular';

  constructor(private authService: AuthService) {}

  onLogOutClicked() {
    this.authService.logout();
  }
}
