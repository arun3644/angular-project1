import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DirectiveDirective } from '../directive.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],  // for ngIf or other common directives
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css']

})
export class AboutComponent {
  isVisible = true;

  fruits=["apple","orange","Cherry"];

  value = 'B';

  isActive=false;
}


