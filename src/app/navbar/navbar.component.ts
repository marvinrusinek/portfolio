import { Component, OnInit } from '@angular/core';

import { NavbarMenuService } from "../shared/services/navbarmenu.service";

@Component({
  selector: 'app-portfolio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navitems = [];

  constructor(private _navbarMenuService: NavbarMenuService) {}

  ngOnInit() {
    this._navbarMenuService.getNavbarMenu()
      .subscribe(data => this.navitems = data);
  }
}
