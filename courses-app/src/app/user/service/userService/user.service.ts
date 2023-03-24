import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

export type User = {
  name: string;
  email: string;
  password: string;
  role: string;
  id: string;
}

type UserResponse<T> = { successful: boolean; result: T };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private handleError(method: string) {
    return (error: HttpErrorResponse) => {
      throw new Error(`UserService.${method} error`, { cause: error });
    };
  }

  getUser() {
    return this.httpClient.get<UserResponse<User>>('localhost:4000/users/me').pipe(
      map((response) => response.result),
      catchError(this.handleError('getUser'))
    )
  }
}
