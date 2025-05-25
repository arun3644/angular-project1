import { Injectable } from "@angular/core";

export interface FormData {
  name: string;
  email: string;
}
@Injectable({
  providedIn: "root",
})
export class FormListService {
  private list: FormData[] = [];

  addList(data: FormData): void {
    this.list.push(data);
  }

  getList(): FormData[] {
    return this.list;
  }
}
