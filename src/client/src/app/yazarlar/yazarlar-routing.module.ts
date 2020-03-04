import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YazarlarComponent } from './yazarlar.component';
import { YazarlardetailComponent } from './yazarlardetail/yazarlardetail.component';


const routes: Routes = [
  {
    path: '',
    component: YazarlarComponent
  },
  {
    path: 'yazar-detail/:id', component: YazarlardetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YazarlarRoutingModule { }
