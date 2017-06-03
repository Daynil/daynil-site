import { Component, OnInit, HostBinding } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  baseUrl = environment.production ? '' : 'http://localhost:3003';

  message = '';
  status = '';

  constructor(private http: Http,
              public transitionService: TransitionService,
              public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.transitionService.transition();
  }

  mail(name: HTMLInputElement, email: HTMLInputElement, comment: HTMLInputElement) {
    const nameTxt = name.value;
    const emailTxt = email.value;
    const commentTxt = comment.value;

    if (!nameTxt || !emailTxt || !commentTxt) {
      this.snackBar.open(`Please fill out all fields!`, 'OK', {
        duration: 5000
      });
      return;
    };
    this.transitionService.setLoading(true);
    const mail = {name: nameTxt, email: emailTxt, comment: commentTxt};
    return this.http
      .post(`${this.baseUrl}/email`, mail)
      .toPromise()
      .then(res => res.json())
      .then(data => {
        name.value = '';
        email.value = '';
        comment.value = '';
        this.transitionService.setLoading(false);
        this.snackBar.open(`Thanks for contacting me. I'll get back with you as soon as possible!`, 'OK', {
          duration: 5000
        });
      })
      .catch(err => {
        this.transitionService.setLoading(false);
        this.snackBar.open(`Oops, there was an error! Please try again later!`, 'OK', {
          duration: 5000
        });
      });
  }

}
