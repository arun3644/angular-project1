import { createReducer } from "@ngrx/store";
import { employeeState } from "./emplyee.state";

const employeeReducere= createReducer(
    employeeState
)