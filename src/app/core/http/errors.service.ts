import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpsError} from "../../shared/models/sps-error";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(private httpClient: HttpClient) {

  }

  getErrors(): Observable<SpsError[]> {
    const getErrorsUrl = '/getErrors.php';
    return this.httpClient.get<SpsError[]>(environment.apiUrl + getErrorsUrl);
  }

  addError(message, state, lockerId): Observable<any> {
    const addErrorUrl = '/addError.php';
    return this.httpClient.post(environment.apiUrl + addErrorUrl + '/?msg=' + message + '&state=' + state + '&lockId=' + lockerId, null);
  }

  updateError(id, state) {
    const updateErrorUrl = '/updateError.php';
    return this.httpClient.post(environment.apiUrl + updateErrorUrl + '/?id=' + id + '&state=' + state, null);
  }
}
