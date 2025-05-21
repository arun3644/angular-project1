import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/home" style="margin-right: 10px;">Home</a>
      <a routerLink="/about">About</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
