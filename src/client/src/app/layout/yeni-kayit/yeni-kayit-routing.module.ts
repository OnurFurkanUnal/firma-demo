import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YeniKayitComponent } from './yeni-kayit.component';


const routes: Routes = [
  {
    path: '',
    component: YeniKayitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeniKayitRoutingModule { }
