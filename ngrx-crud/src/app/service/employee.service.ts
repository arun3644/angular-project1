import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl="http://localhost:3000/employee";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Employee[]>(this.apiUrl)
  }

  get(empId:number){
    return this.http.get<Employee>(this.apiUrl + '/' + empId)
  }

  create(data:Employee){
    return this.http.post(this.apiUrl, data);
  }
  Update(data:Employee){
    return this.http.put(this.apiUrl+ '/' + data.id, data);
  }
  delete(id:number){
    return this.http.delete(this.apiUrl+ '/'+ id);
  }
}
