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
  isMyCarsActive: boolean = false;
  isSearchActive: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.isMyCarsActive = this.router.url === '/mycars';
      this.isSearchActive = this.router.url === '/home';
    });
  }

}
