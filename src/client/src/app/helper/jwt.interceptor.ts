import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }
      httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    intercept(req: HttpRequest<any>, next: HttpHandler) {
            req = req.clone({
                withCredentials: true
            });
        return next.handle(req);
    }


}