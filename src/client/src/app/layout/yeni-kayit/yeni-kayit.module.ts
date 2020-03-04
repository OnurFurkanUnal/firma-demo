import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { YeniKayitRoutingModule } from './yeni-kayit-routing.module';
import { YeniKayitComponent } from './yeni-kayit.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [YeniKayitComponent],
  imports: [
    CommonModule,
    YeniKayitRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class YeniKayitModule { }
