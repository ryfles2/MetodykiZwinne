import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Statistic } from 'src/app/shared/models/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  getStatisticsUrl = '/getStatistics.php';
  constructor(private httpClient: HttpClient) {
  }

  public getStatistics(): Observable<Statistic[]> {
    return this.httpClient.get<Statistic[]>(environment.apiUrl + this.getStatisticsUrl);
  }
}
