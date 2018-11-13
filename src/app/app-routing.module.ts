import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: "full"},
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: "Page not found!"} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
