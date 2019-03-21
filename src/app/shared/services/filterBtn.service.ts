import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFilter } from '../models/filter';

@Injectable()
export class FilterBtnService {
  // private _url = 'http://www.marvinrusinek.com/assets/data/galleryfilters.json';
  private _url = '../assets/data/galleryfilters.json';

  constructor(private http: HttpClient) {}

  getFilters(): Observable<IFilter[]> {
    return this.http.get<IFilter[]>(this._url);
  }
}
