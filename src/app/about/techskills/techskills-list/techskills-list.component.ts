import { Component, OnInit } from '@angular/core';

import { TechSkillsService } from '../techskills.service';

@Component({
  selector: 'app-techskills-list',
  templateUrl: './techskills-list.component.html',
  styleUrls: ['./techskills-list.component.css']
})

export class TechSkillsListComponent implements OnInit {
  public skills = [];

  constructor(private _techSkillsService: TechSkillsService) { }

  ngOnInit() {
    this._techSkillsService.getSkills()
      .subscribe(data => this.skills = data);
  }
}
