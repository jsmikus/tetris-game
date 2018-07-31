import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserCredential } from "firebase/auth";
import { User } from "firebase";
import * as firebase from 'firebase/app';
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {

    private readonly user$: Observable<User>;

    constructor(private angularFire: AngularFireAuth, private router: Router) {
        this.user$ = angularFire.authState;
    }

    getUser(): Observable<User> {
        return this.user$;
    }

    isLoggedIn(): Observable<boolean> {
        return this.getUser().pipe(map(user => !!user));
    }

    signInWithFacebook(): Promise<UserCredential> {
        return this.angularFire.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        )
    }

    signInWithGoogle(): Promise<UserCredential> {
        return this.angularFire.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
    }

    logout() {
        this.angularFire.auth.signOut()
            .then(() => this.router.navigate(['app/login']));
    }
}