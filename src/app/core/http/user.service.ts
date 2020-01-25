import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpsUser } from 'src/app/shared/models/sps-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  public getUsers(): Observable<SpsUser[]> {
    const getUsersUrl = '/getAllUsers.php';
    return this.httpClient.get<SpsUser[]>(environment.apiUrl + getUsersUrl, {responseType: 'json'});
  }

  public updateUserType(id, type): Observable<any> {
    const updateUserTypeUrl = '/updateUser.php';
    return this.httpClient.post<any>(environment + updateUserTypeUrl + '/?id=' + id + '&type=' + type, {responseType: 'text'});
  }
}
