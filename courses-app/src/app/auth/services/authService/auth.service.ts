import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap, mergeMap } from 'rxjs/operators';

import { SessionStorageService } from '../sessionStorageService/session-storage.service';

type AuthorizationData = {
  name: string;
  email: string;
  password: string;
};

type LoginResult = {
  successful: boolean;
  result: string;
  user: {
    email: string;
    name: string;
  };
};

type RegistrationResult = {
  successful: boolean;
  result: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$ = new Observable<boolean>((subscriber) =>
    this.isAuthorized$$.subscribe(subscriber)
  );

  constructor(
    private httpClient: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}

  private handleError(method: string) {
    return (error: HttpErrorResponse) => {
      throw new Error(`AuthService.${method} error`, { cause: error });
    };
  }

  login(authorizationData: AuthorizationData) {
    return this.httpClient
      .post<LoginResult>('localhost:4000/login', authorizationData)
      .pipe(
        tap((loginResult) => {
          this.sessionStorageService.setToken(loginResult.result);
          this.isAuthorized$$.next(true);
        }),
        catchError(this.handleError('login'))
      );
  }

  logout() {
    const httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorageService.getToken() ?? ''
    );

    return this.httpClient
      .delete<Record<string, never>>('localhost:4000/logout', {
        headers: httpHeaders,
      })
      .pipe(
        tap(() => {
          this.sessionStorageService.deleteToken();
          this.isAuthorized$$.next(false);
        }),
        catchError(this.handleError('logout'))
      );
  }

  register(authorizationData: AuthorizationData) {
    return this.httpClient
      .post<RegistrationResult>('localhost:4000/register', authorizationData)
      .pipe(
        mergeMap(() => this.login(authorizationData)),
        catchError(this.handleError('register'))
      );
  }
}
