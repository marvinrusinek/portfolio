import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITestimonial } from "../models/testimonial";

@Injectable()
export class TestimonialsService {
  private url = '../../assets/data/testimonials.json';

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<ITestimonial[]> {
    return this.http.get<ITestimonial[]>(this.url);
  }
}

