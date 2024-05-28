import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  cars = [
    { name: 'Kia Picanto', price: 'S/.70', image: 'path_to_image' },
    { name: 'Kia Picanto', price: 'S/.70', image: 'path_to_image' },
    { name: 'Kia Picanto', price: 'S/.70', image: 'path_to_image' },
    { name: 'Kia Picanto', price: 'S/.70', image: 'path_to_image' },
    // otros autos
  ];

  reasons = [
    { icon: 'security', title: 'Health security', description: 'You will be able to request a complete sanitizing and disinfection service before receiving the car.' },
    // otras razones
  ];

  constructor() {
  }
}
