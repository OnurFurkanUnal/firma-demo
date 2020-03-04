import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpBackend, HttpClient } from '@angular/common/http';


export function translateHttpLoaderFactory(httpBackend: HttpBackend): TranslateHttpLoader {
  return new TranslateHttpLoader(new HttpClient(httpBackend), './assets/i18n/', '.json');
}

import { SayfaBasligiComponent } from './sayfa-basligi/sayfa-basligi.component';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'tr',
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpBackend]
      }
    }),
  ],
  declarations: [
    SayfaBasligiComponent
  ],
  exports: [
    SayfaBasligiComponent,
    TranslateModule
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('tr');
    translate.use('tr');
  }
}
