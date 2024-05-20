import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../../core/services/login-service/login.service";
import {of} from "rxjs";
import {MessageService} from "primeng/api";
import {LoginFormComponent} from "../../core/forms/login-form/login-form.component";

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.sass'
})
export class LoginSectionComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginService, private messageService: MessageService) {
  }

  isLoading: boolean = false;
  @ViewChild('loginForm') loginForm: LoginFormComponent;

  ngOnInit() {
    this.loginService.requestError.subscribe(this.onError.bind(this));
  }

  ngOnDestroy() {
    this.loginService.requestError.unsubscribe();
    this.messageService.clear();
  }

  onError(error: any) {
    console.log(error);
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Login failed'});
    this.loginForm.reset();
  }

  onLoginSubmit(loginData: { username: string, password: string }) {
    this.isLoading = true;
    this.loginService.login(loginData.username, loginData.password)
      .subscribe((response) => {
        this.isLoading = false;
        console.log(response)
      });
  }


}
