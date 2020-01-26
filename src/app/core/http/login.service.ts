import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  serviceUrl = '/getLogin.php';
  serviceParameters = ['login', 'pass'];
  user: User;

  constructor(private httpClient: HttpClient) {
    this.user = new User();
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
