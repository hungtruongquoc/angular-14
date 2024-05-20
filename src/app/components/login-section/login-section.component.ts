import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../core/services/auth-service/auth.service";
import {of} from "rxjs";
import {MessageService} from "primeng/api";
import {LoginFormComponent} from "../../core/forms/login-form/login-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.sass'
})
export class LoginSectionComponent implements OnInit, OnDestroy {
  constructor(private loginService: AuthService, private messageService: MessageService, private router: Router) {
  }

  isLoading: boolean = false;
  @ViewChild('loginForm') loginForm: LoginFormComponent;

  ngOnInit() {
    this.loginService.requestError.subscribe(this.onError.bind(this));
  }

  ngOnDestroy() {
    this.loginService.requestError.unsubscribe();
    this.messageService.clear();
    this.loginForm.reset();
  }

  onError(error: any) {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Login failed'});
    this.loginForm.reset();
  }

  onLoginSubmit(loginData: { username: string, password: string }) {
    this.isLoading = true;
    this.loginService.login(loginData.username, loginData.password)
      .subscribe((response) => {
        this.isLoading = false;
        this.router.navigate([this.loginService.redirectUrl || '/']);
      });
  }


}
