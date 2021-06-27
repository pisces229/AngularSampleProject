import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteDataService {

  private routeUrl?: string;
  private routeAction?: string;
  private routeData?: any;

  constructor() { }

  url = (...values: string[]): string => values.join("/");

  action(url: string): string | null {
    if (this.routeUrl == url) {
      return this.routeAction!;
    } else {
      this.clear();
      return null;
    }
  }

  set(url: string, action: string, data: any): void {
    this.routeUrl = url;
    this.routeAction = action;
    this.routeData = data;
  }

  get<T>(url: string): T | null {
    if (this.routeUrl == url) {
      const result = Object.assign({}, this.routeData);
      this.clear();
      return (result as T);
    } else {
      return null;
    }
  }

  private clear(): void {
    this.routeUrl = undefined;
    this.routeAction = undefined;
    this.routeData = undefined;
  }

}

