import { Component, OnInit } from '@angular/core';

import { ResumesService } from '../../shared/services/resumes.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public resumes = [];

  constructor(private _resumesService: ResumesService) { }

  ngOnInit() {
    this._resumesService.getResumes()
      .subscribe(data => this.resumes = data);
  }
}
