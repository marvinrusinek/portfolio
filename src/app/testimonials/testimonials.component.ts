import { Component, OnInit } from '@angular/core';

import { TestimonialsService } from "../shared/services/testimonials.service";

@Component({
  selector: 'app-portfolio-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public testimonials = [];

  constructor(private _testimonialsService: TestimonialsService) {}

  ngOnInit() {
    this._testimonialsService.getTestimonials()
      .subscribe(data => this.testimonials = data);
  }
}
