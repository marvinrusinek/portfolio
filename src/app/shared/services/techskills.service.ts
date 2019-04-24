import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISkill } from '../models/skill';

@Injectable()
export class TechSkillsService {
  private url = '../../../assets/data/skill.json';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.url);
  }
}
