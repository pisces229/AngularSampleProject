import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppRoutingPath } from './app-routing-path';

import { DefaultGuard } from './core/guard/default.guard';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: AppRoutingPath.Login,
    component: LoginComponent
  },
  {
    path: AppRoutingPath.Home,
    component: HomeComponent
  },
  {
    path: AppRoutingPath.Test,
    canActivate: [DefaultGuard],
    canActivateChild: [DefaultGuard],
    canDeactivate: [DefaultGuard],
    canLoad: [DefaultGuard],
    loadChildren: () => import('./page/test/test.module').then(m => m.TestModule)
  },
  {
    path: '**',
<<<<<<< HEAD
    redirectTo: AppRoutingPath.Login,
=======
    redirectTo: '',
>>>>>>> e2ea3dd3045eb3c838d782d40425a38fd15bccc8
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
