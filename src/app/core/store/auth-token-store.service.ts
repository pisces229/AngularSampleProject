import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenStoreService {

  private readonly AUTH_TOKEN = 'AUTH_TOKEN';

  constructor() { }

  getAuthToken = () : string | null => localStorage.getItem(this.AUTH_TOKEN);

  setAuthToken = (value : string) : void => { localStorage.setItem(this.AUTH_TOKEN, value); }

  clear = () : void => {
    localStorage.removeItem(this.AUTH_TOKEN);
  }

}
