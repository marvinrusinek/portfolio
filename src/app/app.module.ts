import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
// import { MatIconModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { ScrollSpyModule } from 'ngx-scrollspy';
import { NgBackToTopModule } from 'ng-back-to-top';
// import { ParallaxModule } from "ngx-parallax/lib/parallax.module";

import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
// import { AngularFireDatabase } from 'angularfire2/database';
import { ProjectService } from './projects/project.service';
import { TechSkillsService } from './about/techskills/techskills.service';
import { OverviewComponent } from './about/overview/overview.component';
import { EducationComponent } from './about/education/education.component';
import { TechSkillsListComponent } from './about/techskills/techskills-list/techskills-list.component';
import { ResumeComponent } from './about/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    OverviewComponent,
    EducationComponent,
    TechSkillsListComponent,
    ResumeComponent,
    GalleryComponent,
    ProjectListComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    /* MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule, */
    MatTabsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    LazyLoadImagesModule,
    ScrollSpyModule.forRoot(),
    RecaptchaModule,
    RecaptchaFormsModule,
    NgBackToTopModule,
    // ParallaxModule
  ],
  providers: [
    // AngularFireDatabase,
    ProjectService,
    TechSkillsService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LerxYMUAAAAALaV-sOfT5i_PDfza7RI7b2D6qCD' } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent, ProjectListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MatTabsModule]
})

export class AppModule {
}
