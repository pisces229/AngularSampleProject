import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canActivate');
      // return this.tokenService.login({ username: '', password: '' }).pipe(
      //   map(e => {
      //     if (e) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   }),
      //   catchError((err) => {
      //     // this.router.navigate(['/login']);
      //     return of(false);
      //   })
      // );
      return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canActivateChild');
      // return this.tokenService.login({ username: '', password: '' }).pipe(
      //   map(e => {
      //     if (e) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   }),
      //   catchError((err) => {
      //     // this.router.navigate(['/login']);
      //     return of(false);
      //   })
      // );
      return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canDeactivate');
      // return this.tokenService.login({ username: '', password: '' }).pipe(
      //   map(e => {
      //     if (e) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   }),
      //   catchError((err) => {
      //     // this.router.navigate(['/login']);
      //     return of(false);
      //   })
      // );
      return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canLoad');
      // return this.tokenService.login({ username: '', password: '' }).pipe(
      //   map(e => {
      //     if (e) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   }),
      //   catchError((err) => {
      //     // this.router.navigate(['/login']);
      //     return of(false);
      //   })
      // );
      return true;
  }
}
