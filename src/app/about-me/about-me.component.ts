import {
  Component, OnInit, HostBinding
} from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  languages = [];
  frameworks = [];

  constructor(public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
    this.showSkills();
  }

  showSkills() {
    this.languages = [
      {
        name: 'Typescript/Javascript',
        amount: 90
      },
      {
        name: 'Java',
        amount: 80
      },
      {
        name: 'Python',
        amount: 60
      },
      {
        name: 'VB/VBA',
        amount: 60
      },
      {
        name: 'Ruby',
        amount: 30
      }
    ];

    this.frameworks = [
      {
        name: 'Angular 2+',
        amount: 90
      },
      {
        name: 'Node.js',
        amount: 70
      },
      {
        name: 'React',
        amount: 65
      },
      {
        name: 'jQuery',
        amount: 50
      },
      {
        name: 'Django',
        amount: 20
      }
    ];
  }


}
