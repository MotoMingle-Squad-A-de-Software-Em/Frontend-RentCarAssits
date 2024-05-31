import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatInput,
    NgForOf,
    MatButton
  ],
  templateUrl: './car-add.component.html',
  styleUrl: './car-add.component.css'
})
export class CarAddComponent {
  carForm: FormGroup;
  brands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];
  models = ['Model 1', 'Model 2', 'Model 3'];
  categories = ['SUV', 'Sedan', 'Truck'];
  conditions = ['New', 'Used', 'Certified'];
  transmissions = ['Automatic', 'Manual'];

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      brand: [''],
      year: [''],
      model: [''],
      mileage: [''],
      category: [''],
      value: [''],
      mechanicalConditions: [''],
      address: [''],
      transmission: [''],
      imageUrl: [''],
      seats: [''],
      extraInfo: ['']
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log(this.carForm.value);
      //Agregar logica
    }
  }

  onCancel() {
    //Agregar logica
  }
}
