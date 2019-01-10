import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISkill } from '../../skill';

@Injectable()
export class TechSkillsService {

  // private _url = 'http://www.marvinrusinek.com/assets/data/skill.json';
  private _url = '../../../assets/data/skill.json';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this._url);
  }
}
