import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  thisYear: number;

  constructor() {
    const today = new Date();
    this.thisYear = today.getFullYear();
  }

}
