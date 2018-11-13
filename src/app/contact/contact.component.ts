import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { errorMessages } from './custom-validation';
// import { AngularFireDatabase } from 'angularfire2/database';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  //errors = errorMessages;

  /* requestTypes = ['Job Opportunity', 'Project Referral', 'Other'];
  defaultRequestType = 'Job Opportunity'; */
  submittedForm = false;

  //constructor(private afdb: AngularFireDatabase) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      /* 'requestType': new FormControl(null, [Validators.required]), */
      'fullName': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      'emailAddress': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    });

    /* this.contactForm.valueChanges.subscribe(
      val => console.log(val)
    ); */
  }

  onSubmit() {
    console.log(this.contactForm);

    this.submittedForm = true;
    /*
    const {
    //requestType,
     fullName,
     emailAddress,
     //subject,
     message } = this.contactForm.value;
    const date = Date();
    const html = `
      <div>From: ${firstName} ${lastName}</div>
      <div>Email: <a href="mailto:${emailAddress}">${emailAddress}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;

    let formRequest = {
      //requestType,
      fullName,
      emailAddress,
      //subject,
      message,
      date,
      html };

    this.afdb.list('/messages').push(formRequest); */
    //this.contactForm.reset();
  }
}
