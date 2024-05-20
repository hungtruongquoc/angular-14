import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string | null = null;
  isLoggedIn = false;

  constructor(private httpClient: HttpClient) {

  }

  requestError = new Subject()

  hasLoginInfo() {
    return this.isLoggedIn;
  }

  login(username: string, password: string) {
    console.log(this.redirectUrl);
    return this.httpClient.post('https://beetrack-upgrade.local/api/v2/login', {username, password})
      .pipe(
        map((response) => {
          console.log(response);
          this.isLoggedIn = true;
          return response;
        }),
        catchError((error) => {
          this.requestError.next(error);
          return of(null);
        })
      );
  }
}
