import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../service/employee.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-employee',
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule,MatInputModule, MatDatepickerModule, MatSelectModule, MatButtonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  title='Add Employee';
  dialogData:any;
  isEdit=false;
  constructor(private service :EmployeeService, @Inject(MAT_DIALOG_DATA) public data:any) {
    
  }
  ngOnInit(): void {
        this.dialogData=this.data;
        if(this.dialogData.code>0){
          this.title="Edit Employee";
          this.isEdit=true;
          this.service.get(this.dialogData.code).subscribe(item=>{
            let _data = item;
            if(_data!=null){
              this.empForm.setValue({
                id: _data.id,
                name: _data.name,
                doj: _data.doj, 
                role: _data.role,
                salary: _data.salary 
              })
            }
          })
        }
  }

  empForm = new FormGroup({
    id:new FormControl(),
    name:new FormControl('',Validators.required),
    doj:new FormControl(new Date(), Validators.required),
    role:new FormControl('', Validators.required),
    salary:new FormControl(0, Validators.required)
  }) 

  saveEmployee(){
    if(this.empForm.valid){
     let empData :Employee={
      id: this.empForm.value.id,
      name:this.empForm.value.name!,
      doj:this.empForm.value.doj!,
      role:this.empForm.value.role!,
      salary:this.empForm.value.salary!,
     }

     if(this.isEdit){
      this.service.Update(this.data)
     }
     else{
      this.service.create(empData).subscribe()
     }
    
    }
  }
  
}
