import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule} from "./shared/material.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { RegisterAccountComponent } from "./auth/register-account/register-account.component";
import { WelcomeComponent } from "./auth/welcome/welcome.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CarDataService} from "./cars/car-data/car-data.component";
import { HttpClientModule } from "@angular/common/http";
import { CarCardComponent } from "./cars/car-card/car-card.component";
import { SidebarComponent } from "./navigation/sidebar/sidebar.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { CarAddComponent } from "./cars/car-add/car-add.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAccountComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarCardComponent,
    SidebarComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CarAddComponent,
  ],
  providers: [CarDataService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {

}
