import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBlogPost } from '../models/blogpost';

@Injectable()
export class BlogPostService {
  private url = '../assets/data/blog-latest-posts.json';

  constructor(private http: HttpClient) {}

  getBlogPost(): Observable<IBlogPost[]> {
    return this.http.get<IBlogPost[]>(this.url);
  }
}
