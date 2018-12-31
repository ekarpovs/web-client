import { Component, OnInit } from '@angular/core';

import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public jwt: JwtService) { }

  ngOnInit() {
  }

}
