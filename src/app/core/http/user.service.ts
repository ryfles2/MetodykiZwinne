import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/shared/models/user';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {SpsUser} from 'src/app/shared/models/sps-user';
import {map} from "rxjs/operators";

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

  public updateUserType(id, type): Observable<string> {
    const updateUserTypeUrl = '/updateUser.php';
    return this.httpClient.post<string>(environment.apiUrl + updateUserTypeUrl + '/?id=' + id + '&type=' + type, {responseType: 'text' as 'json'});
  }

  public addUser(login, password, type): Observable<string> {
    const addUserUrl = '/addUser.php';
    return this.httpClient.post<string>(environment.apiUrl + addUserUrl + '/?login=' + login + '&pass=' + password + '&type=' + type, {responseType: 'text' as 'json'});
  }

  public deleteUser(id): Observable<string> {
    const deleteUserUrl = '/deleteUser.php';
    return this.httpClient.delete<string>(environment.apiUrl + deleteUserUrl + '?id=' + id, {responseType: 'text' as 'json'});
  }
}
