import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fileControl = new FormControl();

  constructor() {
  }

  onFileChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("Nombre del archivo:", fileList[0].name);
      this.fileControl.setValue(fileList[0]);
    }
  }
}
