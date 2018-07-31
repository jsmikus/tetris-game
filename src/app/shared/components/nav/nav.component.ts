import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from "firebase";
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    constructor(private authService: AuthService, private router: Router, private angularFire: AngularFireAuth) {
    }

  @Input()
  user: User;

    logout() {
        this.angularFire.auth.signOut()
            .then(() => this.router.navigate(['app/login']));
    }
}
