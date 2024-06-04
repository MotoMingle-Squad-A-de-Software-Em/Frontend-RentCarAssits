import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
