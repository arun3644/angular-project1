import { Component } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  userName:string='';
  emailData:string='';
  isActive:boolean=false;

  clicked(){
    this.isActive=true;
    alert(`
      Sumbited Successfully!
      NAME: ${this.userName}
      EMAIL:${this.emailData}`)
  }
}
