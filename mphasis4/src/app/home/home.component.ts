import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Route, Router } from "@angular/router";
import { FormListService } from "../form-list.service";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FormListService
  ) {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
    });
  }
  submit() {
    if (this.form.valid) {
      alert("submitted");
      this.service.addList(this.form.value);
    } else {
      alert("Check input Feilds");
    }
  }
  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get formValue() {
    return this.form.value;
  }
  view() {
    this.router.navigate(["/reactive"]);
  }
}
