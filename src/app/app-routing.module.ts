import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardService } from './service/role-guard.service';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [RoleGuardService], data: { expectedRole: 'ADMINISTRATOR' }
  },
  {
    path: 'regular-user',
    loadChildren: () => import('./modules/regular-user/regular-user.module').then(m => m.RegularUserModule),
    canActivate: [RoleGuardService], data: { expectedRole: 'REGISTERED_USER' }
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
