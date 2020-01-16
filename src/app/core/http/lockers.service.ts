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

  constructor(private httpClient: HttpClient) { }

  getLockers(): Observable<Locker[]> {
    return this.httpClient.get<Locker[]>(environment.apiUrl + this.getLockersUrl);
  }
}
