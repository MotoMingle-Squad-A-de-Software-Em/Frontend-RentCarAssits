import { Component } from '@angular/core';
import {SidebarComponent} from "../../navigation/sidebar/sidebar.component";
import {CarCardComponent} from "../../cars/car-card/car-card.component";

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    SidebarComponent,
    CarCardComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}
