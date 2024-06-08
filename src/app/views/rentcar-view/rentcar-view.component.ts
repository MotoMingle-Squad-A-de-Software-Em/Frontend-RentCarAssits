import { Component } from '@angular/core';
import {SidebarComponent} from "../../navigation/sidebar/sidebar.component";
import {NavbarComponent} from "../../navigation/navbar/navbar.component";
import {RentcarCardComponent} from "../../cars/rentcar-card/rentcar-card.component";

@Component({
  selector: 'app-rentcar-view',
  standalone: true,
  imports: [SidebarComponent,
    NavbarComponent,
    RentcarCardComponent,
  ],
  templateUrl: './rentcar-view.component.html',
  styleUrl: './rentcar-view.component.css'
})
export class RentcarViewComponent {

}
