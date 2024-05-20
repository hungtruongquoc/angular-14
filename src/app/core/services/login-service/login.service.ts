import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient) {

    }

    requestError = new Subject()

    login(username: string, password: string) {
        return this.httpClient.post('https://beetrack-upgrade.local/api/v2/login', {username, password})
            .pipe(
                map((response) => {
                    console.log(response);
                    return response;
                }),
                catchError((error) => {
                    this.requestError.next(error);
                    return of(null);
                })
            );
    }
}
