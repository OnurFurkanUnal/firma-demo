import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GirisDogrulamaRoutingModule } from './giris-dogrulama-routing.module';
import { GirisDogrulamaComponent } from './giris-dogrulama.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [GirisDogrulamaComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    GirisDogrulamaRoutingModule
  ]
})
export class GirisDogrulamaModule { }
