import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {CarCardComponent} from "./cars/car-card/car-card.component";
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {MycarsViewComponent} from "./views/mycars-view/mycars-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'car-card', component: CarCardComponent, pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent, pathMatch: 'full' },
  { path: 'mycars', component: MycarsViewComponent, pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
