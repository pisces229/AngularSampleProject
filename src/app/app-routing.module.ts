import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppRoutingPath } from './app-routing-path';

import { DefaultGuard } from './core/guard/default.guard';

const routes: Routes = [
  {
    path: AppRoutingPath.Test,
    loadChildren: () => import('./page/test/test.module').then(m => m.TestModule)
  },
  {
    path: AppRoutingPath.Store,
    canActivate: [DefaultGuard],
    canActivateChild: [DefaultGuard],
    canDeactivate: [DefaultGuard],
    canLoad: [DefaultGuard],
    loadChildren: () => import('./page/store/store.module').then(m => m.StoreModule)
  },
  {
    path: AppRoutingPath.Layout,
    loadChildren: () => import('./page/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: AppRoutingPath.Slot,
    loadChildren: () => import('./page/slot/slot.module').then(m => m.SlotModule)
  },
  {
    path: '**',
    redirectTo: AppRoutingPath.Test,
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
