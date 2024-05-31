import { Component } from '@angular/core';
import {CarCardComponent} from "../../cars/car-card/car-card.component";
import {SidebarComponent} from "../../navigation/sidebar/sidebar.component";
import {CarAddComponent} from "../../cars/car-add/car-add.component";

@Component({
  selector: 'app-mycars-view',
  standalone: true,
  imports: [
    CarCardComponent,
    SidebarComponent,
    CarAddComponent
  ],
  templateUrl: './mycars-view.component.html',
  styleUrl: './mycars-view.component.css'
})
export class MycarsViewComponent {

}
