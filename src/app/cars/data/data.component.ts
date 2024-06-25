import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";

interface Vehicle {
  id: number;
  model: string;
  brand: string;
  address: string;
  seats: number;
  stars: number;
  features: string;
  price: number;
  vehiclePicture: string;
}

interface Booking {
  id: number;
  userId: number;
  vehicleId: number;
  bookingDate: string;
  returnDate: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  names: string;
  lastnames: string;
  dni: string;
  profilePicture: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgOptimizedImage,
    NgForOf
  ],
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  vehicles: Vehicle[] = [];
  bookings: Booking[] = [];
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.fetchVehicles();
    this.fetchBookings();
    this.fetchUsers();
  }

  private fetchVehicles(): void {
    this.http.get<any>('https://zonal-charisma-production.up.railway.app/api/v1/vehicles')
      .subscribe(response => {
        this.vehicles = response.content;
      }, error => {
        console.error('Error fetching vehicles:', error);
      });
  }

  private fetchBookings(): void {
    this.http.get<any>('https://zonal-charisma-production.up.railway.app/api/v1/bookings')
      .subscribe(response => {
        this.bookings = response.content;
      }, error => {
        console.error('Error fetching bookings:', error);
      });
  }

  private fetchUsers(): void {
    this.http.get<any>('https://zonal-charisma-production.up.railway.app/api/v1/users')
      .subscribe(response => {
        // Filtrar el campo 'password' del array 'content'
        this.users = response.content.map((user: any) => {
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        });
      }, error => {
        console.error('Error fetching users:', error);
      });
  }
}
