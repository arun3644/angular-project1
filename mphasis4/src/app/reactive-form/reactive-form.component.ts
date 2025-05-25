import { Component, input, OnInit } from '@angular/core';
import { FormListService, FormData } from '../form-list.service';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit{
  list:FormData[]=[];
  constructor(private service:FormListService){}
 
    ngOnInit():void{
    this.list=this.service.getList();
  }
} 
