import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { User } from "firebase";
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation] // register the animation
})
export class AppComponent implements OnInit{

    user: User;

    constructor(private authService: AuthService){
    }

    ngOnInit(): void {
        this.authService.getUser().subscribe(user => this.user = user);
    }

}
