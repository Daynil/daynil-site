import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  thisYear: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const today = new Date();
    this.thisYear = today.getFullYear();
    this.navBarBg();
  }

  navBarBg() {
    if (this.router.url === '/') return 'home-nav-bar';
    else return 'normal-nav-bar';
  }
}
