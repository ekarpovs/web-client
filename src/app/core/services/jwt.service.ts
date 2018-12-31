import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CommunicationConstants as url } from '../../shared/constants/communication-constants';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  loggedInUser: string; // @TO DO - will be object

  constructor(private  httpClient:  HttpClient) { }

  login(email: string, password: string): Observable<{sid:  string}> {
    return  this.httpClient.post<{sid:  string}>(
      `${url.API_HOST}/login`,
      {'email': email, 'password': password}).pipe(tap(res => {
      this.loggedInUser = email;
      sessionStorage.setItem('sid', res.sid);
    }));
  }

  logout(): Observable<string> {
    const sid = sessionStorage.getItem('sid');

    return  this.httpClient.post<string>(
      `${url.API_HOST}/logout`,
      {'sid': sid}).pipe(tap(res => {
        sessionStorage.removeItem('sid');
    }));
  }

  public  get loggedIn(): boolean {
    return  sessionStorage.getItem('sid') !==  null;
  }
}
