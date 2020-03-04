import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Rx";
import { map } from 'rxjs/operators';
import { ApiService } from "../../core/api.service";

import { HttpHeaders, HttpClient, HttpParams, } from '@angular/common/http';
import { URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NotificationService } from './notification.serivice';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class KullaniciService {

  private KULLANICI_PATH = "kullanicis/";

  constructor(private apiService: ApiService, private http: HttpClient, private noti: NotificationService,
    private translate: TranslateService) { }


  getKullanici(kullaniciAdi, sifre): Observable<any> {
    return this.apiService.get(this.KULLANICI_PATH + kullaniciAdi+ '/' +sifre).pipe(map(response => {
      if (response) {
        console.log(response)
        return response;
      } else {

        return {};
      }
    }));
  }

  isValid(): Observable<any> {
    return this.apiService.get(this.KULLANICI_PATH).pipe(map(response => {
      if (response) {
        return response;
      } else {

        return {};
      }
    }));
  }

  logOut(): Observable<any> {
    return this.apiService.get(this.KULLANICI_PATH + 'logout').pipe(map(response => {
      if (response) {
        return response;
      } else {

        return {};
      }
    }));
  }

  create(kullanici): Observable<any> {
    return this.apiService.post(this.KULLANICI_PATH, kullanici).pipe(map(response => {
      if (response) {
        var created;
        this.translate.get('New User Created').subscribe(value => created = value);
        this.noti.notifyInfo(created);
        return response;
      } else {

        return {};
      }
    }));
  }

}
