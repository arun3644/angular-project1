import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Employee } from '../../models/employee';
import {Subscription} from 'rxjs';
import { EmployeeService } from '../../service/employee.service';
@Component({
  selector: 'app-employee',
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule,MatInputModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatDialogModule, MatTableModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent  implements OnInit, OnDestroy{
 
  empList:Employee[]=[];
  dataTable!: MatTableDataSource<Employee>;
  displayedColumns:string[]=['id', 'name' , 'role','doj','salary','action'];
  subscription =new Subscription();
  constructor(private dialog:MatDialog, private service : EmployeeService){}

  ngOnInit():void{
    this.getAllEmployee();
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  getAllEmployee(){
   let sub= this.service.getAll().subscribe(item=>{
      this.empList = item;
      this.dataTable=new MatTableDataSource(this.empList);
    })
    this.subscription.add(sub)
  }
  addEmployee(){
    this.openPopup(0);
  }

  edit(empId:number){
    this.openPopup(empId);
  }
  deleted(id:number){
      let sub=this.service.delete(id).subscribe(item=>{
      this.getAllEmployee();
    })
    this.subscription.add(sub);
  }

  openPopup(id:number){
    this.dialog.open(AddEmployeeComponent,{
      width:'50%',
      data:{
        'code':id
      }
    }).afterClosed().subscribe(()=>{
      this.getAllEmployee();
    })
  }
}
