import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  message = '';

  displayMessage = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe(evt => {
    //   console.log(evt);
    //   if (evt instanceof NavigationStart) {
    //     this.message = 'Loading...';
    //     this.displayMessage = true;
    //   }
    //   if (evt instanceof NavigationCancel) {
    //     this.message = 'Navigation cancelled';
    //     this.displayMessage = true;
    //   }
    //   if (evt instanceof NavigationEnd) {
    //     this.displayMessage = false;
    //   }
    // });
  }

}
