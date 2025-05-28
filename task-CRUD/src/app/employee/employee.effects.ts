import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap, concatAll,switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as Employeeactions from './employee.actions';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';


@Injectable()
export class EmployeeEffects {

  constructor(private http: HttpClient, private action$: Actions) { }

  loadEmployee$ = createEffect(() =>
    this.action$.pipe(
      ofType(Employeeactions.loadData),
      mergeMap(() =>
        this.http.get<Employee[]>("http://localhost:3000/employees").pipe(
          map(data => Employeeactions.loadDataSuccess({data})),
          catchError(error => of(Employeeactions.loadEmployeesFailure({error})))
        )
      )
    )
  )


  updateEmp$ = createEffect(() =>
  this.action$.pipe(
    ofType(Employeeactions.updateEmp),
    switchMap(({ datas }) => 
      this.http.put<Employee>(`http://localhost:3000/employees/${datas.id}`, datas).pipe(
       map(data => Employeeactions.updateData({data})),
          catchError(error => of(Employeeactions.loadEmployeesFailure({error})))
      )
    )
  )
);



delete$ = createEffect(() =>
  this.action$.pipe(
    ofType(Employeeactions.deleteData),
    switchMap(({ data }) => 
      this.http.delete(`http://localhost:3000/employees/${data}`).pipe(
        map(() => Employeeactions.deleteAction({ data })),
        catchError(error => of(Employeeactions.loadEmployeesFailure({ error })))
      )
    )
  )
);

}


