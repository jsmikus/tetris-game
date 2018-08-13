import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from "firebase/auth";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {
    }

    signInWithFacebook() {
        this.authService.signInWithFacebook()
            .then(() => this.router.navigate(['app/home']))
            .catch(error => console.log(error));
    }


    signInWithGoogle() {
        this.authService.signInWithGoogle()
            .then(() => this.router.navigate(['app/home']))
            .catch(error => console.log(error));
    }
}