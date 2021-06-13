import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DefaultGuard } from './core/guard/default.guard';

const routes: Routes = [
  {
    path: 'test',
    canActivate: [DefaultGuard],
    canActivateChild: [DefaultGuard],
    canDeactivate: [DefaultGuard],
    canLoad: [DefaultGuard],
    loadChildren: () => import('./page/test/test.module').then(m => m.TestModule)
  },
  {
    path: '**',
    redirectTo: '',
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
