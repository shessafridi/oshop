import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  user$ = this.auth.authState;

  constructor(
    private auth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  get appUser$() {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) return this.userService.get(user?.uid).valueChanges();

        return of(null);
      })
    );
  }
}
