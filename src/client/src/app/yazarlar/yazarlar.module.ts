import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { YazarlarRoutingModule } from './yazarlar-routing.module';
import { YazarlarComponent } from './yazarlar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YazarlardetailComponent } from './yazarlardetail/yazarlardetail.component';


@NgModule({
  declarations: [YazarlarComponent, YazarlardetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    YazarlarRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class YazarlarModule { }
