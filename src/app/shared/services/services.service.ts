import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IService } from "../models/service";

@Injectable()
export class ServicesService {
  private url = '../../assets/data/services.json';

  constructor(private http: HttpClient) {}

  getServices(): Observable<IService[]> {
    return this.http.get<IService[]>(this.url);
  }
}
