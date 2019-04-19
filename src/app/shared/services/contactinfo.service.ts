import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContactInfo } from '../models/contactinfo';

@Injectable()
export class ContactInfoService {
  // private _url = 'http://www.marvinrusinek.com/assets/data/contactinfo.json';
  private _url = '../assets/data/contactinfo.json';

  constructor(private http: HttpClient) {}

  getContactMethods(): Observable<IContactInfo[]> {
    return this.http.get<IContactInfo[]>(this._url);
  }
}
