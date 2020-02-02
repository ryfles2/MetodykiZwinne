import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Locker } from 'src/app/shared/models/locker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LockersService {
  getLockersUrl = '/getLockers.php';
  updateLockerUrl = '/updateLockersStatus.php';

  constructor(private httpClient: HttpClient) { }

  getLockers(): Observable<Locker[]> {
    console.log(environment.apiUrl);
    return this.httpClient.get<Locker[]>(environment.apiUrl + this.getLockersUrl);
  }

  updateLocker(id: number, state: number): Observable<any> {
    return this.httpClient.post<any>(environment.apiUrl + this.updateLockerUrl + '?id=' + id + '&state=' + state, null, { responseType: 'json' });
  }
}
