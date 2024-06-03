import {Component, Optional} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close(); // Método para cerrar el diálogo
    }
  }

  constructor(@Optional() public dialogRef: MatDialogRef<LoginComponent>) {
  }
}
