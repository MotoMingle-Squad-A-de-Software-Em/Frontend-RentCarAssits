import { Component } from '@angular/core';
import {NavbarComponent} from "../../navigation/navbar/navbar.component";
import {RentcarCardComponent} from "../../cars/rentcar-card/rentcar-card.component";
import {SidebarComponent} from "../../navigation/sidebar/sidebar.component";
import {BookingsCardComponent} from "../../cars/bookings-card/bookings-card.component";

@Component({
  selector: 'app-bookings-view',
  standalone: true,
  imports: [
    NavbarComponent,
    RentcarCardComponent,
    SidebarComponent,
    BookingsCardComponent
  ],
  templateUrl: './bookings-view.component.html',
  styleUrl: './bookings-view.component.css'
})
export class BookingsViewComponent {

}
