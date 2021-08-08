import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;
  appUser: AppUser | null = null;

  constructor(public auth: AuthService) {
    auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}
