import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteDataService {

  private _url: string = '';
  private _data: any | null;

  constructor() { }

  url = (...values: string[]): string => values.join("/");

  exists(url: string): boolean {
    if (this._url == url && this._data != null) {
      return true;
    } else {
      this.clear();
      return false;
    }
  }

  set(url: string, data: any): void {
    this._url = url;
    this._data = data;
  }

  get<T>(url: string): T | null {
    if (this._url == url && this._data != null) {
      const result = Object.assign({}, this._data);
      this.clear();
      return (result as T);
    } else {
      return null;
    }
  }

  private clear(): void {
    this._url = '';
    this._data = null;
  }

}
