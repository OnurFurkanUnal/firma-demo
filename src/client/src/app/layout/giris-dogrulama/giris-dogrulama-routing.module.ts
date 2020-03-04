import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirisDogrulamaComponent } from './giris-dogrulama.component';


const routes: Routes = [
   {
      path: '',
      component: GirisDogrulamaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirisDogrulamaRoutingModule { }
