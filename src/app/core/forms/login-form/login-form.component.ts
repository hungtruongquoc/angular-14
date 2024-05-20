import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.sass'
})
export class LoginFormComponent {
  @Output() login = new EventEmitter<{ username: string, password: string }>();
  @ViewChild('loginForm') loginForm: NgForm;
  errorMessage: string | null = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.login.emit(form.value);
    } else {
      this.errorMessage = 'Please provide valid username and password.';
    }
  }

  reset() {
    this.loginForm.reset();
  }
}
