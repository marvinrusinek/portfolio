import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IService } from "../models/service";

@Injectable()
export class ServicesService {
  // private _url = 'http://www.marvinrusinek.com/assets/data/service.json';
  private _url = '../../assets/data/service.json';

  constructor(private http: HttpClient) {}

  getServices(): Observable<IService[]> {
    return this.http.get<IService[]>(this._url);
  }
}
