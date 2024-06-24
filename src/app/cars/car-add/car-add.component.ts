import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CarDataService } from '../car-data/car-data.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatOptionModule} from "@angular/material/core";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatLabel,
    MatInputModule,
    MatOption,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    MatOptionModule,
    MatButton,
  ],

  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {
  carForm: FormGroup;
  brands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];

  constructor(private fb: FormBuilder, private carDataService: CarDataService) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      address: ['', Validators.required],
      seats: ['', [Validators.required, Validators.min(1)]],
      stars: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      features: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      vehiclePicture: [''],
      extraInfo: ['']
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      const carData = this.carForm.value;
      // Convertir a números flotantes
      carData.stars = parseFloat(carData.stars);
      carData.price = parseFloat(carData.price);

      this.carDataService.addCar(carData).subscribe(
        (response) => {
          console.log('Car added successfully:', response);
          // Puedes implementar lógica adicional, como redireccionar a otra página o mostrar un mensaje de éxito.
        },
        (error) => {
          console.error('Error adding car:', error);
        }
      );
    } else {
      console.error('Formulario inválido. Verifique los campos.');
    }
  }
}
