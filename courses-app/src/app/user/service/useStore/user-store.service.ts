import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, UserService } from '../userService/user.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoading$$.asObservable();
  private name$$ = new BehaviorSubject<string>('');
  public name$ = this.name$$.asObservable();
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  public isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {}

  private startLoading() {
    this.isLoading$$.next(true);
  }

  private finishLoading() {
    this.isLoading$$.next(false);
  }

  getUser() {
    this.startLoading()
    this.userService.getUser().pipe(
      tap(user => {
          this.isAdmin$$.next(user.role === 'user' ? false : true)
          this.name$$.next(user.name)
          this.finishLoading()
      })
    )
  }
}
