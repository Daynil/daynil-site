import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundLoading = false;

  constructor(public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
    this.loadBackground();
  }

  loadBackground() {
    this.backgroundLoading = true;
    this.transitionService.setLoading(true);
    let bg = new Image();
    bg.onload = () => {
      this.backgroundLoading = false;
      this.transitionService.setLoading(false);
    };
    bg.src = 'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1496202874/jason-briscoe-149767-s_nkvq4s.jpg';
  }

  bgClasses() {
    return {
      'bg-transition': !this.backgroundLoading,
      'bg-image': !this.backgroundLoading
    };
  }

}
