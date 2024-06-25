import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe, NgForOf, NgIf } from "@angular/common";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

interface Booking {
  id: number;
  userId: number;
  vehicleId: number;
  bookingDate: string;
  returnDate: string;
}

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

interface User {
  id: number;
  names: string;
  lastnames: string;
}

@Component({
  selector: 'app-bookings-card',
  templateUrl: './bookings-card.component.html',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    MatIcon,
    MatIconButton,
    NgIf,
    CurrencyPipe
  ],
  styleUrls: ['./bookings-card.component.css']
})
export class BookingsCardComponent implements OnInit {
  bookings: Booking[] = [];
  vehicles: Vehicle[] = [];
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBookings();
    this.fetchVehicles();
    this.fetchUsers();
  }

  private fetchBookings(): void {
    this.http.get<any>('https://zonal-charisma-production.up.railway.app/api/v1/bookings')
      .subscribe(response => {
        this.bookings = response.content;
      }, error => {
        console.error('Error fetching bookings:', error);
      });
  }

  private fetchVehicles(): void {
    this.http.get<any>('https://zonal-charisma-production.up.railway.app/api/v1/vehicles')
      .subscribe(response => {
        this.vehicles = response.content;
      }, error => {
        console.error('Error fetching vehicles:', error);
      });
  }

  private fetchUsers(): void {
    this.http.get<any>('https://zonal-charisma-production.up.railway.app/api/v1/users')
      .subscribe(response => {
        this.users = response.content;
      }, error => {
        console.error('Error fetching users:', error);
      });
  }

  getVehicleDetails(vehicleId: number): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.id === vehicleId);
  }

  getUserDetails(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  calculateTotalPrice(booking: Booking): number {
    const vehicle = this.getVehicleDetails(booking.vehicleId);
    if (vehicle) {
      const startDate = new Date(booking.bookingDate);
      const endDate = new Date(booking.returnDate);
      const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
      return daysDiff * vehicle.price;
    }
    return 0;
  }

}
