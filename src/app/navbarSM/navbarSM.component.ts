import { Component, OnInit } from '@angular/core';

import { NavbarSMService } from "../shared/services/navbarSM.service";

@Component({
  selector: 'app-portfolio-navbarSM',
  templateUrl: './navbarSM.component.html',
  styleUrls: ['./navbarSM.component.css']
})
export class NavbarSMComponent implements OnInit {
  public navbarSM = [];

  constructor(private _navbarSMService: NavbarSMService) {}

  ngOnInit() {
    this._navbarSMService.getNavbarSM()
      .subscribe(data => this.navbarSM = data);
  }
}
