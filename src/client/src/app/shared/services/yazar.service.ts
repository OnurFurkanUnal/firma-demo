import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Rx";
import { map } from 'rxjs/operators';
import { ApiService } from "../../core/api.service";
import { NotificationService } from './notification.serivice';

@Injectable()
export class YazarService {

  private YAZAR_PATH = "yazars/";
  private sidenavOpenSubject: Subject<boolean>;

  constructor(private apiService: ApiService, private noti: NotificationService) {
    this.sidenavOpenSubject = new Subject<boolean>();
  }

  anaYazarGuncelle(opening: boolean): void {
    this.sidenavOpenSubject.next(opening);
  }
  anaYazarBilgisiAl(): Observable<boolean> {
    return this.sidenavOpenSubject;
  }

  getAll(): Observable<any> {
    return this.apiService.get(this.YAZAR_PATH).pipe(map(response => {
      if (response) {
        return response;
      } else {

        return {};
      }
    }));
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.YAZAR_PATH + id).pipe(map(response => {
      if (response) {
        return response;
      } else {

        return {};
      }
    }));
  }

  create(yazar): Observable<any> {
    return this.apiService.post(this.YAZAR_PATH, yazar).pipe(map(response => {
      if (response) {
        this.noti.notifySuccess(response);
        return response;
      } else {

        return {};
      }
    }));
  }

  update(id, yazars): Observable<any> {
    return this.apiService.put(this.YAZAR_PATH + id, yazars).pipe(map(response => {
      if (response) {
        this.noti.notifySuccess(response);
        return response;
      } else {

        return {};
      }
    }));
  }

  delete(id): Observable<any> {
    return this.apiService.delete(this.YAZAR_PATH + id).pipe(map(response => {
      if (response) {
        this.noti.notifySuccess(response);
        return response;
      } else {

        return {};
      }
    }));
  }
}
