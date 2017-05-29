import { Component, OnInit, HostBinding } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  baseUrl = environment.production ? '' : 'http://localhost:3000';

  message = '';
  status = '';

  constructor(private http: Http,
              public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

  mail(name: HTMLInputElement, email: HTMLInputElement, comment: HTMLInputElement) {
    const nameTxt = name.value;
    const emailTxt = email.value;
    const commentTxt = comment.value;

    if (!nameTxt || !emailTxt || !commentTxt) {
      this.status = 'fail';
      this.message = 'Please fill out all fields!';
      setTimeout(() => {
        this.status = '';
        this.message = '';
      }, 5000);
      return;
    };

    const mail = {name: nameTxt, email: emailTxt, comment: commentTxt};
    return this.http
      .post(`${this.baseUrl}/email`, mail)
      .toPromise()
      .then(res => res.json())
      .then(data => {
        name.value = '';
        email.value = '';
        comment.value = '';
        this.status = 'success';
        this.message = `Thanks for contacting me. I'll get back with you as soon as possible!`;
      })
      .catch(err => {
        this.status = 'fail';
        this.message = `Oops, there was an error! Please try again later!`;
      });
  }

  setAlertClass() {
    return {
      'alert': true,
      'page-transition': true,
      'gone': !this.message,
      'alert-success': this.status === 'success',
      'alert-danger': this.status === 'fail'
    };
  }

}
