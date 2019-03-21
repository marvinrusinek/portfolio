import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INavbarSM } from "../models/navbarSM";

@Injectable()
export class NavbarSMService {
  // private _url = 'http://www.marvinrusinek.com/assets/data/navbarSM.json';
  private _url = '../../assets/data/navbarSM.json';

  constructor(private http: HttpClient) {}

  getNavbarSM(): Observable<INavbarSM[]> {
    return this.http.get<INavbarSM[]>(this._url);
  }
}
