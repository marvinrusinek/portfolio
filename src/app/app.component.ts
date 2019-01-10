import { Component, OnInit } from '@angular/core';

import * as sal from 'sal.js';

const hasDocument = typeof document === 'object';
const hasWindow = typeof window === 'object';
const isBrowser = hasDocument && hasWindow;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (isBrowser) {
      sal({
        threshold: 1,
        once: true
      });
    }
  }
}
