import { Component } from '@angular/core';
import {CarCardComponent} from "../../cars/car-card/car-card.component";
import {NavbarComponent} from "../../navigation/navbar/navbar.component";
import {SidebarComponent} from "../../navigation/sidebar/sidebar.component";
import {DataComponent} from "../../cars/data/data.component";

@Component({
  selector: 'app-configuration-view',
  standalone: true,
  imports: [
    CarCardComponent,
    NavbarComponent,
    SidebarComponent,
    DataComponent
  ],
  templateUrl: './configuration-view.component.html',
  styleUrl: './configuration-view.component.css'
})
export class ConfigurationViewComponent {

}
