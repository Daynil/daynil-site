import { Component, OnInit, HostBinding } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundLoading = false;

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
    this.loadBackground();
  }

  loadBackground() {
    this.backgroundLoading = true;
    const bg = new Image();
    bg.onload = () => {
      this.backgroundLoading = false;
    };
    bg.src = '../../assets/jason-briscoe-149767.jpg';
  }

  bgClasses() {
    return {
      'bg-transition': !this.backgroundLoading,
      'bg-image': !this.backgroundLoading
    };
  }

}
