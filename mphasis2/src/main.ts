import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { TemplateDrivenComponent } from './app/template-driven/template-driven.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';
import { LifecycleComponent } from './app/lifecycle/lifecycle.component';


const routes: Routes = [
  { path: '', redirectTo: 'ho', pathMatch: 'prefix' },
  { path: 'home', component: HomeComponent,pathMatch:'prefix' },
  { path: 'about', component: AboutComponent },
  { path:'template-driven', component:TemplateDrivenComponent},
  { path:'reactive',component:ReactiveFormComponent},
  { path:'lifecycle', component:LifecycleComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
