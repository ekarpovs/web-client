import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationLink, navigationLinks } from './navigation-links';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @TO DO: filter according logged in user's roles
  activeLinks: Array<NavigationLink> = navigationLinks;

  constructor(private router: Router, public jwt: JwtService) { }

  ngOnInit() {
  }

  logout() {
    this.jwt.logout().subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['auth/login']);
      }, err => {
      console.log(err);
    });
  }
}
