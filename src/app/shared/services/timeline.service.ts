import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITimeline } from '../models/timeline';

@Injectable()
export class TimelineService {
  private url = '../../assets/data/timeline.json';

  constructor(private http: HttpClient) {}

  getTimeline(): Observable<ITimeline[]> {
    return this.http.get<ITimeline[]>(this.url);
  }
}
