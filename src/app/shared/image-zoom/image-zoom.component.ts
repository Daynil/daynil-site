import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'image-zoom',
  template: `
    <md-dialog-content>
      <img [src]="data" class="img-responsive">
    </md-dialog-content>
  `,
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent {

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

}
