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
  users: User[] = [];
  errorMessage: string = '';

  constructor(
    @Optional() public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private http: HttpClient
  ) {
    this.fetchUsers();
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  onSubmit(username: string, password: string): void {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.router.navigate(['/home']);
      this.closeDialog();
    } else {
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
