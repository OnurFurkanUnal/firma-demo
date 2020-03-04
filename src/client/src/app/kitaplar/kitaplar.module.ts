import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitaplarRoutingModule } from './kitaplar-routing.module';
import { KitaplarComponent } from './kitaplar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { KitapdetailComponent } from './kitapdetail/kitapdetail.component';

@NgModule({
  declarations: [KitaplarComponent, KitapdetailComponent],
  imports: [
    CommonModule,
    KitaplarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class KitaplarModule { }
