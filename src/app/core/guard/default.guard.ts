import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private router : Router,
    private httpClient : HttpClient) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canActivate');
      // console.log(route);
      // console.log(state);
      // console.log(route.routeConfig?.path);
      // console.log('DefaultGuard canActivate');
      return of(true);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canActivateChild');
      // console.log(childRoute);
      // console.log(state);
      // console.log(childRoute.routeConfig?.path);
      // console.log('DefaultGuard canActivateChild');
      return this.httpClient.post(`${environment.APIEndpoint}/Test/ValidateRoute`, { Path : childRoute.routeConfig?.path })
      .pipe(
        tap(value => {
          console.log(value);
        }),
        map((value : any) => {
          if (value.Success) {
            return true;
          } else {
            return false;
          }
        }),
        catchError((error) => {
          // this.router.navigate(['/login']);
          return of(false);
        })
      );
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canDeactivate');
      return of(true);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('DefaultGuard canLoad');
      return of(true);
  }
}
