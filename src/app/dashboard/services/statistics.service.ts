import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CommunicationConstants as url } from '../../shared/constants/communication-constants';
import { IStatisticItem } from '../models/statistic-item';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private  httpClient:  HttpClient) { }

  getList(options: any): Observable<Array<IStatisticItem>> {
    const access_token = sessionStorage.getItem('sid'); // @TO DO get from session object

    return this.httpClient.post<Array<IStatisticItem>>(
      `${url.API_HOST}/dashboard/statistic`, null,
      {headers: {'Authorization': `Bearer ${access_token}`, 'ContentType': 'application/json'}});
  }
}
