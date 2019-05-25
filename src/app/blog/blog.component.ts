import { Component, OnInit } from '@angular/core';

import { BlogPostService } from "../shared/services/blogpost.service";

@Component({
  selector: 'app-portfolio-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogposts = [];

  constructor(private _blogPostService: BlogPostService) {}

  ngOnInit() {
    this._blogPostService.getBlogPost()
      .subscribe(data => this.blogposts = data);
  }
}
