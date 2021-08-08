import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  login() {
    this.auth.login();
  }
}
