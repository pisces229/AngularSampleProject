import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DefaultGuard } from './core/guard/default.guard';

// Page Component
import { TestComponent } from './page/component/test/test.component';
import { Test01Component } from './page/component/test01/test01.component';
import { Test02Component } from './page/component/test02/test02.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    canActivate: [DefaultGuard],
    canActivateChild: [DefaultGuard],
    canDeactivate: [DefaultGuard],
    canLoad: [DefaultGuard],
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
    preloadingStrategy: PreloadAllModules,
    // Reloading current route
    // onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
