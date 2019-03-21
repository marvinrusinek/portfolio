import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITestimonial } from "../models/testimonial";

@Injectable()
export class TestimonialsService {
  // private _url = 'http://www.marvinrusinek.com/assets/data/testimonials.json';
  private _url = '../../assets/data/testimonials.json';

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<ITestimonial[]> {
    return this.http.get<ITestimonial[]>(this._url);
  }
}

