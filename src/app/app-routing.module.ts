import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      }
      // ,
      // {
      //   path: 'user-management',
      //   loadChildren: () => import('./pages/user-management/user-management.module').then(m=>m.UserManagementModule)
      // },
      // {
      //   path: 'role-management',
      //   loadChildren: () => import('./pages/role-management/role-management.module').then(m=>m.RoleManagementModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
