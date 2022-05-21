import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserSession } from './user-session';

@Injectable()
export class SessionService {
  public readonly userSession$: Observable<UserSession>;

  private readonly userSessionKey = 'auth';
  private readonly internalUserSession$ = new BehaviorSubject<UserSession>(new UserSession());

  constructor() {
    this.userSession$ = this.internalUserSession$.asObservable();
    const userSessionData = sessionStorage.getItem(this.userSessionKey) ?? '';
    this.internalUserSession$.next(UserSession.fromString(userSessionData));
  }

  public setUserSession(userSession: UserSession): void {
    sessionStorage.setItem(this.userSessionKey, userSession.toString());
    this.internalUserSession$.next(userSession);
  }

  public clearUserSession(): void {
    sessionStorage.removeItem(this.userSessionKey);
    this.internalUserSession$.next(new UserSession());
  }
}
