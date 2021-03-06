import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INavbarMenu } from "../models/navbar-menu";

@Injectable()
export class NavbarMenuService {
  private url = '../../assets/data/navbarMenu.json';

  constructor(private http: HttpClient) {}

  getNavbarMenu(): Observable<INavbarMenu[]> {
    return this.http.get<INavbarMenu[]>(this.url);
  }
}
