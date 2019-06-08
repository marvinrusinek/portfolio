import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ContactFormService } from "../shared/services/contactform.service";
import { ContactInfoService } from "../shared/services/contactinfo.service";

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  public contactFormFields = [];
  public contactMethods = [];
  contactForm: FormGroup;
  submittedForm = false;

  services = [
    { id: 1, name: 'Web/App Development' },
    { id: 2, name: 'Mobile App Development' },
    { id: 3, name: 'UI/UX Development' },
    { id: 4, name: 'Search Engine Optimization' },
    { id: 5, name: 'Digital Marketing' }
  ];

  constructor(private http: HttpClient, private formBuilder: FormBuilder,
              private _contactFormService: ContactFormService, private _contactInfoService: ContactInfoService) {
    // Create a new array with a form control for each order
    const controls = this.services.map(c => new FormControl(false));
    controls[0].setValue(false); // set the first checkbox to true (checked)

    this.contactForm = this.formBuilder.group({
      'name': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      'emailAddress': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required),
      'services': new FormArray(controls, minSelectedCheckboxes(1)),
      'recaptchaReactive': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this._contactFormService.getFormFields()
      .subscribe(data => this.contactFormFields = data);
    this._contactInfoService.getContactMethods()
      .subscribe(data => this.contactMethods = data);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submittedForm = true;

    const selectedServiceIds = this.contactForm.value.services
      .map((v, i) => v ? this.services[i].id : null)
        .filter(v => v !== null);

    let data = {
      service_id: 'marvin_rusinek',
      template_id: 'template1',
      user_id: 'user_YrLIzgrpmp69hb5hAwLYa',
      template_params: {
        name: this.contactForm.value.name,
        emailAddress: this.contactForm.value.emailAddress,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        services: this.contactForm.value.services,
        recaptchaReactive: this.contactForm.value.recaptchaReactive
      }
    };

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { responseType: 'text' })
      .subscribe((result) => {
          alert('Your message has been sent!');
        }, (error: HttpErrorResponse) => {
          alert('Oops... ' + error.message);
        }
      );
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      // get a list of checkbox values (boolean)
      .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
