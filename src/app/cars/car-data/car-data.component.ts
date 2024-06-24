import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  private apiUrl = 'https://zonal-charisma-production.up.railway.app/api/v1/vehicles';

  constructor(private http: HttpClient) { }

  getCarData(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.content)
    );
  }

  addCar(carData: any): Observable<any> {
    const body = {
      model: carData.model,
      brand: carData.brand,
      address: carData.address,
      seats: carData.seats,
      stars: carData.stars,
      features: carData.features,
      price: carData.price,
      vehiclePicture: carData.vehiclePicture
    };
    return this.http.post<any>(this.apiUrl, body);
  }
}
