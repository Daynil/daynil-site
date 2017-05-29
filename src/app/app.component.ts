import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TransitionService } from './shared/transition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinnerColor = 'hsl(47, 100%, 63%)';
  thisYear: number;

  constructor(public transitionService: TransitionService,
              private router: Router) {
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
