import { Component, OnInit } from '@angular/core';

import { TimelineService } from "../../shared/services/timeline.service";
import { TrainingService } from '../../shared/services/training.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public timelineEntries = [];
  public trainings = [];

  constructor(private _timelineService: TimelineService, private _trainingService: TrainingService) {}

  ngOnInit() {
    this._timelineService.getTimeline()
      .subscribe(data => this.timelineEntries = data);
    this._trainingService.getTrainings()
      .subscribe(data => this.trainings = data);
  }

  /* alternate: boolean = true;
   toggle: boolean = true;
   color: boolean = false;
   size: number = 40;
   expandEnabled: boolean = true;

   entries = [
   {
   header: 'header',
   content: 'content'
   }
   ]

   addEntry() {
   this.entries.push({
   header: 'header',
   content: 'content'
   })
   }

   removeEntry() {
   this.entries.pop();
   }

   onHeaderClick(event) {
   if (!this.expandEnabled) {
   event.stopPropagation();
   }
   }

   onDotClick(event) {
   if (!this.expandEnabled) {
   event.stopPropagation();
   }
   }

   onExpandEntry(expanded, index) {
   console.log(`Expand status of entry #${index} changed to ${expanded}`)
   } */

  /* toggleSide() {
   this.side = this.side === 'left' ? 'right' : 'left';
   } */
}
