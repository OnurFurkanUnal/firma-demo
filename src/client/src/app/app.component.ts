import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  isLoggedIn;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.isLoggedIn = this.authService.isLoggedIn;
    this.authService.refreshRoot().subscribe(
      (opening) => {
        if (opening) {
          this.isLoggedIn = opening;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
    this.authService.initPage();
  }
}
