import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'girisDogrulama', loadChildren: './layout/giris-dogrulama/giris-dogrulama.module#GirisDogrulamaModule' },
  { path: 'yeniKayit', loadChildren: './layout/yeni-kayit/yeni-kayit.module#YeniKayitModule' },
  { path: 'yazarlar', loadChildren: './yazarlar/yazarlar.module#YazarlarModule', canActivate: [AuthGuard] },
  { path: 'kitaplar', loadChildren: './kitaplar/kitaplar.module#KitaplarModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
