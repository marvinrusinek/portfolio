import { Component, OnInit } from '@angular/core';

import { ServicesService } from "../shared/services/services.service";

@Component({
  selector: 'app-portfolio-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public services = [];

  constructor(private _servicesService: ServicesService) {}

  ngOnInit() {
    this._servicesService.getServices()
      .subscribe(data => this.services = data);
  }
}
