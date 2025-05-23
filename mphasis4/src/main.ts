import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { TemplateDrivenComponent } from './app/template-driven/template-driven.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';
import { LifecycleComponent } from './app/lifecycle/lifecycle.component';
import { RoutingComponent } from './app/routing/routing.component';
import { LazyloadingComponent } from './app/lazyloading/lazyloading.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'about', component: AboutComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  {
    path: 'routing', component: RoutingComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, },
      { path: 'about', component: AboutComponent },
    ]
  },
  {
    path:'lazyloading',
    loadComponent:()=> import('./app/lazyloading/lazyloading.component').then(m=>m.LazyloadingComponent)
  }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
