import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitaplarComponent } from './kitaplar.component';
import { KitapdetailComponent } from './kitapdetail/kitapdetail.component';

const routes: Routes = [
  {
    path: '',
    component: KitaplarComponent
  },
  {
    path: 'kitap-detail/:id', component: KitapdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitaplarRoutingModule { }
