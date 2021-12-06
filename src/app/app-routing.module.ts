import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './app.guard';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', canActivate: [IsLoggedGuard], component: PagesComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'login',loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  // { path: 'sign-up', canActivate: [IsNotLoggedGuard] , loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
