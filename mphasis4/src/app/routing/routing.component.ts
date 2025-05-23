import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
   standalone: true,
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
  constructor(private router:Router){}

  clickAbout(){
    this.router.navigate(['/about'])
  }
  clickHome(){
    this.router.navigate(['/home'])
  }
}
