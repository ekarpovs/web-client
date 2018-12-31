import { Injectable } from '@angular/core';

import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwt: JwtService) { }

  public isAuthorized() {
    if (!this.jwt.loggedIn) {
      console.error('User is not authenticated.');
      return false;
    }
    return true;
  }
}
