import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Rx";
import { map } from 'rxjs/operators';
import { ApiService } from "../../core/api.service";
import { NotificationService } from './notification.serivice';

@Injectable()
export class KitapService {

  private KITAP_PATH = "kitaps/";
  private kitap: Subject<boolean>;

  constructor(private apiService: ApiService, private noti: NotificationService) {
    this.kitap = new Subject<boolean>();
  }

  anaKitapGuncelle(opening: boolean): void {
    this.kitap.next(opening);
  }
  anaKitapBilgisiAl(): Observable<boolean> {
    return this.kitap;
  }

  getAll(): Observable<any> {
    return this.apiService.get(this.KITAP_PATH).pipe(map(response => {
      if (response) {
        return response;
      } else {

        return {};
      }
    }));
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.KITAP_PATH + id).pipe(map(response => {
      if (response) {
        return response;
      } else {

        return {};
      }
    }));
  }

  create(kitap): Observable<any> {
    return this.apiService.post(this.KITAP_PATH, kitap).pipe(map(response => {
      if (response) {
        this.noti.notifySuccess(response);
        return response;
      } else {

        return {};
      }
    }));
  }

  update(id, kitaps): Observable<any> {
    return this.apiService.put(this.KITAP_PATH + id, kitaps).pipe(map(response => {
      if (response) {
        this.noti.notifySuccess(response);
        return response;
      } else {

        return {};
      }
    }));
  }

  delete(id): Observable<any> {
    return this.apiService.delete(this.KITAP_PATH + id).pipe(map(response => {
      if (response) {
        this.noti.notifySuccess(response);
        return response;
      } else {

        return {};
      }
    }));
  }
}
