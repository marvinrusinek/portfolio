import { Component } from '@angular/core';

import { TrainingService } from './training.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public trainings = [];

  constructor(private _trainingService: TrainingService) {}

  ngOnInit() {
    this._trainingService.getTrainings()
      .subscribe(data => this.trainings = data);
  }
}
