import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isSearchActive: boolean = false;
  isMyCarsActive: boolean = false;
  isRentCarActive: boolean = false;
  isBookingsActive: boolean = false;
  isConfigurationActive: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.isSearchActive = this.router.url === '/home';
      this.isMyCarsActive = this.router.url === '/mycars';
      this.isRentCarActive = this.router.url === '/rentcar';
      this.isBookingsActive = this.router.url === '/bookings';
      this.isConfigurationActive = this.router.url === '/configuration';
    });
  }

}
