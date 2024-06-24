import {Component, Optional} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  names: string;
  lastnames: string;
  dni: string;
  profilePicture: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User[] = []; // Arreglo para almacenar los usuarios obtenidos del servicio
  errorMessage: string = ''; // Variable para manejar mensajes de error

  constructor(
    @Optional() public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private http: HttpClient
  ) {
    this.fetchUsers(); // Llamada al método para obtener usuarios al inicializar el componente
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close(); // Método para cerrar el diálogo
    }
  }

  onSubmit(username: string, password: string): void {
    // Validación simple de credenciales
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      // Usuario válido, redirige al home page
      this.router.navigate(['/home']);
      this.closeDialog();
    } else {
      // Usuario no encontrado o credenciales inválidas
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }

  private fetchUsers(): void {
    this.http.get<any>('https://zonal-charisma-production.up.railway.app/api/v1/users')
      .subscribe(
        response => {
          this.users = response.content;
        },
        error => {
          console.error('Error fetching users:', error);
          this.errorMessage = 'Failed to fetch users. Please try again later.';
        }
      );
  }
}
