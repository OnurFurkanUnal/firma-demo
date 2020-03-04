import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn;
  hesapAdi;

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
    this.authService.kullaniciAdiGet().subscribe(
      (ad) => {
        if (ad) {
          this.hesapAdi = ad
        } else {
          this.hesapAdi = null;
        }
      }
    );
  }


  onLogout() {
    this.authService.logout();
  }

}
