import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import { of } from 'rxjs';


import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {
  }

  const
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private formatErrors(error: any) {
    return Observable.of(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.API_URL}${path}`,
    { params,observe: 'response' })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.API_URL}${path}`,
      JSON.stringify(body), this.httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.API_URL}${path}`,
      JSON.stringify(body), this.httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.API_URL}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
