import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContactForm } from '../models/contactform';

@Injectable()
export class ContactFormService {
  private url = '../assets/data/contactform.json';

  constructor(private http: HttpClient) {}

  getFormFields(): Observable<IContactForm[]> {
    return this.http.get<IContactForm[]>(this.url);
  }
}
