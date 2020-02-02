import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SpsUser } from 'src/app/shared/models/sps-user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  serviceUrl = '/getLogin.php';
  serviceParameters = ['login', 'pass'];
  activeUser: SpsUser;
  loggedIn = false;

  constructor(private httpClient: HttpClient) {

  }

  login(login, password): Observable<SpsUser> {
    const loginUrl = '/getLogin.php';
    return this.httpClient.get<SpsUser>(environment.apiUrl + loginUrl + '/?login=' + login + '&pass=' + password);
  }

  getLoginStatus(values) {
    return this.httpClient.get(
      environment.apiUrl
        .concat(this.serviceUrl)
        .concat('?')
        .concat(this.serviceParameters[0])
        .concat('=')
        .concat(values[0])
        .concat('&')
        .concat(this.serviceParameters[1])
        .concat('=')
        .concat(values[1]),
        {responseType: 'text'}
    );
  }
}
