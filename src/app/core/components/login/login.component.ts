import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private jwt: JwtService) { }

  ngOnInit() {
    this.jwt.logout();
  }

  login(username, password) {
    this.jwt.login(username, password).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['home']);
    }, err => {
      console.log(err);
    });
  }
}
