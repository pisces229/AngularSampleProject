import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Page Component
import { TestComponent } from './page/component/test/test.component';
import { Test01Component } from './page/component/test01/test01.component';
import { Test02Component } from './page/component/test02/test02.component';

//import { LayoutComponent } from './shared/component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuardChild],
    children: [
      {
        path: 'test01',
        component: Test01Component
      },
      {
        path: 'test02',
        component: Test02Component
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'test01',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
