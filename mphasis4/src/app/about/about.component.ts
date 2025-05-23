import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DirectiveDirective } from '../directive.directive';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],  // for ngIf or other common directives
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css']

})
export class AboutComponent implements OnInit {
  isVisible = true;

  fruits=["apple","orange","Cherry"];

  value = 'B';

  isActive=false;

  id!:string | null;

  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.id =  this.route.snapshot.paramMap.get("id")
  }
}


