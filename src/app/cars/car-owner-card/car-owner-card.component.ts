import {Component, OnInit} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {CarDataService} from "../car-data/car-data.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-car-owner-card',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './car-owner-card.component.html',
  styleUrls: ['./car-owner-card.component.css']
})
export class CarOwnerCardComponent implements OnInit {

  carData: any[] = [];

  constructor(private carDataService: CarDataService) { }

  ngOnInit(): void {
    this.carDataService.getCarData().subscribe(data => {
      this.carData = data;
      console.log('Datos de los vehículos:', this.carData);
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }
}
