import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  cars = [
    { image: 'assets/images/car.jpg', model: 'Kia Picanto', price: 'S/.70' },
    { image: 'assets/images/car.jpg', model: 'Kia Picanto', price: 'S/.70' },
    { image: 'assets/images/car.jpg', model: 'Kia Picanto', price: 'S/.70' },
    { image: 'assets/images/car.jpg', model: 'Kia Picanto', price: 'S/.70' },
    // Otros coches...
  ];

  reasons = [
    { icon: 'security', title: 'Health Security', description: 'You will be able to request a complete sanitizing before receiving the car.' },
    {
      icon: 'directions_car',
      title: 'Rental facility',
      description: 'For your convenience, you can request home delivery and pick-up service.'
    },
    {
      icon: 'attach_money',
      title: 'Generate profits',
      description: 'You can earn money from the comfort of your home if you publish your car on our platform.'
    },
    {
      icon: 'analytics',
      title: 'Statistics',
      description: 'You will be able to access statistics of your car and its rental if you subscribe to our premium version.'
    }
  ];

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px', // Ajusta según necesidades
      height: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Puedes manejar resultados aquí
    });
  }

  constructor(public dialog: MatDialog) {
  }
}
