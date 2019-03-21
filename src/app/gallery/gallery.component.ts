import { Component, OnInit } from '@angular/core';

import { FilterBtnService } from "../shared/services/filterBtn.service";

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public filters = [];

  constructor(private _filterBtnService: FilterBtnService) {}

  ngOnInit() {
    this._filterBtnService.getFilters()
      .subscribe(data => this.filters = data);
  }
}

