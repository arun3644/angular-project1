import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'ho', pathMatch: 'prefix' },
  { path: 'home', component: HomeComponent,pathMatch:'prefix' },
  { path: 'about', component: AboutComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
