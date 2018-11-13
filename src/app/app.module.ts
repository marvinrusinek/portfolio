import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { MatIconModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { ScrollSpyModule } from 'ngx-scrollspy';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProjectListComponent } from "./projects/project-list/project-list.component";

import { CLASS_NAME } from 'ngx-bootstrap/modal/modal-options.class';
CLASS_NAME.IN = 'show';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProjectService } from "./projects/project.service";
import { OverviewComponent } from './about/overview/overview.component';
import { TechsummaryComponent } from './about/techsummary/techsummary.component';
import { EducationComponent } from './about/education/education.component';
import { AboutNavigationComponent } from './about/about-navigation/about-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    HeroComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ProjectListComponent,
    OverviewComponent,
    TechsummaryComponent,
    EducationComponent,
    AboutNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    LazyLoadImagesModule,
    ScrollSpyModule.forRoot()
  ],
  providers: [AngularFireDatabase, ProjectService],
  bootstrap: [AppComponent, ProjectListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}
