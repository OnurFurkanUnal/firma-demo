import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ApiService } from './core/api.service';
import { YazarService, KitapService, NotificationService } from './shared/services';
import { KullaniciService } from './shared/services/kullanici.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, HttpBackend } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule, ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ConfirmModalComponent } from './shared/components/confirm-modal/confirm-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor, ErrorInterceptor } from './helper';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function translateHttpLoaderFactory(httpBackend: HttpBackend): TranslateHttpLoader {
  return new TranslateHttpLoader(new HttpClient(httpBackend), './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ConfirmModalComponent
  ],
  entryComponents: [
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgxDatatableModule,
    TranslateModule.forRoot({
      defaultLanguage: 'tr',
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpBackend]
      }
    }),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
      maxOpened: 1,
      autoDismiss: true
    }),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    ApiService,
    YazarService,
    KullaniciService,
    KitapService,
    NotificationService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
