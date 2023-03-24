import { Inject, Injectable, InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WINDOW', {
  providedIn: 'root',
  factory: () => window
});

const AUTHORIZATION_TOKEN_KEY = 'AUTHORIZATION_TOKEN_KEY'

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(WINDOW) private window: Window) { }

  setToken(token: string) {
    this.window.sessionStorage.setItem(AUTHORIZATION_TOKEN_KEY, token)
  }

  getToken(): string | null {
    return this.window.sessionStorage.getItem(AUTHORIZATION_TOKEN_KEY)
  }

  deleteToken() {
    this.window.sessionStorage.removeItem(AUTHORIZATION_TOKEN_KEY)
  }
}
