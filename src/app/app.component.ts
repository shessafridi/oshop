import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.user$.pipe(filter((user) => !!user)).subscribe((user) => {
      userService.save(user!);
      const returnUrl = localStorage.getItem('returnUrl') || '/';

      router.navigateByUrl(returnUrl);
    });
  }
}
