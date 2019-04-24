import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProject } from '../models/project';

@Injectable()
export class ProjectService {
  private url = '../assets/data/project.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.url);
  }
}
