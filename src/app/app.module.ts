import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { MatTabsModule, MatIconModule, MatChipsModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { NgBackToTopModule } from 'ng-back-to-top';
// import { ParallaxModule } from "ngx-parallax/lib/parallax.module";
import { NgsRevealModule } from 'ngx-scrollreveal';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { appRoutes } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSMComponent } from './navbarSM/navbarSM.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProjectListComponent } from './projects/project-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
// import { AngularFireDatabase } from 'angularfire2/database';
import { OverviewComponent } from './about/overview/overview.component';
import { QualificationsComponent } from "./about/qualifications/qualifications.component";
import { EducationComponent } from './about/education/education.component';
import { TechSkillsListComponent } from './about/techskills/techskills-list.component';
import { ResumeComponent } from './about/resume/resume.component';
import { NavbarMenuService } from "./shared/services/navbarmenu.service";
import { NavbarSMService } from "./shared/services/navbarSM.service";
import { TimelineService } from "./shared/services/timeline.service";
import { ProjectService } from './shared/services/project.service';
import { TrainingService } from "./shared/services/training.service";
import { TechSkillsService } from './shared/services/techskills.service';
import { ResumesService } from "./shared/services/resumes.service";
import { ServicesService } from "./shared/services/services.service";
import { TestimonialsService } from "./shared/services/testimonials.service";
import { FilterBtnService } from "./shared/services/filterBtn.service";
import { ContactFormService } from "./shared/services/contactform.service";
import { ContactInfoService } from "./shared/services/contactinfo.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSMComponent,
    HeroComponent,
    AboutComponent,
    OverviewComponent,
    QualificationsComponent,
    EducationComponent,
    TechSkillsListComponent,
    ResumeComponent,
    GalleryComponent,
    ProjectListComponent,
    ServicesComponent,
    TestimonialsComponent,
    BlogComponent,
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
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    MatIconModule,
    MatChipsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    LazyLoadImagesModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgBackToTopModule,
    NgsRevealModule,
    // ParallaxModule
    ParallaxScrollModule,
    MglTimelineModule,
    FlexLayoutModule,
    InViewportModule,
    ScrollSpyModule.forRoot(),
    CarouselModule
  ],
  providers: [
    // AngularFireDatabase,
    NavbarMenuService,
    NavbarSMService,
    ProjectService,
    TrainingService,
    TimelineService,
    TechSkillsService,
    ResumesService,
    ServicesService,
    TestimonialsService,
    FilterBtnService,
    ContactFormService,
    ContactInfoService,
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
