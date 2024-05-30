import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import {CarDataService} from "./cars/car-data/car-data.component";
import {HttpClientModule} from "@angular/common/http";
import {CarCardComponent} from "./cars/car-card/car-card.component";
import {SidebarComponent} from "./navigation/sidebar/sidebar.component";
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
  ],
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
