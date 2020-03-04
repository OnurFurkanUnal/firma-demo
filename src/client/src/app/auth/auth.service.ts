import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { KullaniciService } from '../shared/services/kullanici.service';
import { HttpHeaders, HttpClient, HttpParams, } from '@angular/common/http';
import { URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { NotificationService } from '../shared/services';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private html: Subject<boolean>;
  private kullaniciAdi: Subject<any>;

  constructor(
    private router: Router, private api: KullaniciService, private http: HttpClient, 
    private noti: NotificationService, private translate: TranslateService
  ) {
    this.kullaniciAdi = new Subject<any>();
  }

  kullaniciAdiGuncelle(opening: any): void {
    this.kullaniciAdi.next(opening);
  }
  kullaniciAdiGet(): Observable<any> {
    return this.kullaniciAdi;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  refreshRoot(): Observable<boolean> {
    return this.loggedIn;
  }


  login(kullan, sif) {
    return this.api.getKullanici(kullan, sif)
      .subscribe(
        (resp) => {
          this.kullaniciAdiGuncelle(resp.body[0].KullaniciAdi);
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }
      );
  }

  initPage() {
    this.api.isValid()
      .subscribe(
        (resp) => {
          if (resp) {
            this.kullaniciAdiGuncelle(resp.body[0].KullaniciAdi);
            this.loggedIn.next(true);
            this.router.navigate(['/']);
          }
        }
      );
  }

  logout() {
    this.api.logOut().subscribe(
      (resp) => {
        if (resp) {
          this.loggedIn.next(false);
          this.router.navigate(['/']);
        }
      }
    );
  }
}