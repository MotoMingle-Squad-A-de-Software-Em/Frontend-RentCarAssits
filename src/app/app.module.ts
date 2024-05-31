import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import {CarDataService} from "./cars/car-data/car-data.component";
import {HttpClientModule} from "@angular/common/http";
import {CarCardComponent} from "./cars/car-card/car-card.component";
import {SidebarComponent} from "./navigation/sidebar/sidebar.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    CarCardComponent,
    SidebarComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [CarDataService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {

}
