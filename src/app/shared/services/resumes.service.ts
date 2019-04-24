import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IResumes } from '../models/resumes';

@Injectable()
export class ResumesService {
  private url = '../assets/data/resumes.json';

  constructor(private http: HttpClient) {}

  getResumes(): Observable<IResumes[]> {
    return this.http.get<IResumes[]>(this.url);
  }
}
