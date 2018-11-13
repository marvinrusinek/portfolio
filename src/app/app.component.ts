import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { setTheme } from 'ngx-bootstrap/utils';
import sal from 'sal.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  navIsFixed: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
    setTheme('bs4');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { this.navIsFixed = false; } } scrollToTop() { (function smoothscroll() { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  })();
  }

  ngOnInit(): void {
    sal({
      threshold: 1,
      once: true,
    });
  }
}
