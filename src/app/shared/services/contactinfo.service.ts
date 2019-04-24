import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContactInfo } from '../models/contactinfo';

@Injectable()
export class ContactInfoService {
  private url = '../assets/data/contactinfo.json';

  constructor(private http: HttpClient) {}

  getContactMethods(): Observable<IContactInfo[]> {
    return this.http.get<IContactInfo[]>(this.url);
  }
}
