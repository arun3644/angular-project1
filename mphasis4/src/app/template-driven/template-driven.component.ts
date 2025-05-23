import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-template-driven',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent implements OnChanges {
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

  @Input() item:any[]=[];
  @Input() input:any='';

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['item'])
    //   console.log('itemList was changes', changes['item']);
      if(changes['input']){
      console.log("input changed",changes['input']);
    }
  }
    
  
}
