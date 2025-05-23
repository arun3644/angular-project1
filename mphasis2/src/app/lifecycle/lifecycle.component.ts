import { Component, DoCheck } from '@angular/core';
import { TemplateDrivenComponent } from '../template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [TemplateDrivenComponent, FormsModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements DoCheck {
  listItem = [{ id: 1, name: 'aru' }];
  input="startingValue";
  title = 'Hello';
  previousTitle = 'Hello';

  ngDoCheck(): void {
    if (this.title != this.previousTitle) {
      console.log(
        'title changed from ' + this.previousTitle + ' to ' + this.title
      );
      this.previousTitle = this.title;
    }
  }

  ngOnInit(): void {
    // it runs first useCase: api call
    console.log('2Component initialized');
  }

  //   ngAfterContentInit() {
  //     console.log('4Content projected');
  //   }
  // ngAfterContentChecked() {
  //   console.log("5Projected content checked");
  // }
  // ngAfterViewInit() {
  //   console.log("6View initialized");
  // }
  // ngAfterViewChecked() {
  //   console.log("7View checked");
  // }
  // ngOnDestroy() {
  //   console.log("8Component destroyed");
  // }
}
