import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITraining } from '../models/training';

@Injectable()
export class TrainingService {
  // private _url = 'http://www.marvinrusinek.com/assets/data/training.json';
  private _url = '../assets/data/training.json';

  constructor(private http: HttpClient) {}

  getTrainings(): Observable<ITraining[]> {
    return this.http.get<ITraining[]>(this._url);
  }
}
