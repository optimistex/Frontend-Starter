import { TestBed } from '@angular/core/testing';
import { SessionService } from './session.service';
import { UserSession } from './user-session';

function createSessionService(): SessionService {
  TestBed.configureTestingModule({ providers: [SessionService] });
  return TestBed.inject(SessionService);
}

describe('SessionService', () => {
  let userSession: UserSession;
  const userSessionCallback: (data: UserSession) => void = data => userSession = data;

  it('should be created when localStorage is empty', () => {
    // For non existing key localStorage retrieves null (!)
    // eslint-disable-next-line no-null/no-null
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const service = createSessionService();
    service.userSession$.subscribe(userSessionCallback);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(userSession).toBeInstanceOf(UserSession);
    expect(userSession.id).toBeUndefined();
  });

  // it('should be created when localStorage has data', () => {
  //   spyOn(localStorage, 'getItem').and.returnValue('{"token":"test"}');
  //   const service = createSessionService();
  //   service.userSession$.subscribe(userSessionCallback);
  //
  //   expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  //   expect(userSession).toBeInstanceOf(UserSession);
  //   expect(userSession.id).toBe('test');
  // });
  //
  // it('should set new session data', () => {
  //   spyOn(localStorage, 'setItem');
  //   const service = createSessionService();
  //   service.setUserSession(new UserSession({ token: 'newToken' }));
  //   service.userSession$.subscribe(userSessionCallback);
  //
  //   expect(userSession.id).toBe('newToken');
  //   expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  //   expect(localStorage.setItem).toHaveBeenCalledWith('lisa.core.rbac.auth', JSON.stringify({
  //     token: 'newToken', group: '', groupTitle: '', firstName: '', middleName: '', lastName: '', roles: [], permissions: [], areas: [], username: '',
  //   }));
  // });
  //
  // it('should clear session', () => {
  //   spyOn(localStorage, 'getItem').and.returnValue('{"token":"test"}');
  //   spyOn(localStorage, 'removeItem');
  //   const service = createSessionService();
  //   service.clearUserSession();
  //   service.userSession$.subscribe(userSessionCallback);
  //
  //   expect(userSession.id).toBeUndefined();
  //   expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
  //   expect(localStorage.removeItem).toHaveBeenCalledWith('lisa.core.rbac.auth');
  // });
  //
  // describe('SessionService.userCan', () => {
  //   let spySubscription: jasmine.Spy;
  //
  //   beforeEach(() => {
  //     spySubscription = jasmine.createSpy('spySubscription');
  //   });
  //
  //   it('should return true', () => {
  //     const service = createSessionService();
  //     service.setUserSession(mock<UserSession>({ can: jasmine.createSpy().and.returnValue(true) }));
  //     service.userCan('test').subscribe(spySubscription);
  //
  //     expect(spySubscription).toHaveBeenCalledOnceWith(true);
  //   });
  //
  //   it('should return false - when no permissions', () => {
  //     const service = createSessionService();
  //     service.setUserSession(mock<UserSession>({ can: jasmine.createSpy().and.returnValue(false) }));
  //     service.userCan('test').subscribe(spySubscription);
  //
  //     expect(spySubscription).toHaveBeenCalledOnceWith(false);
  //   });
  //
  //   it('should return false - when no session data', () => {
  //     const service = createSessionService();
  //     service.userCan('test').subscribe(spySubscription);
  //
  //     expect(spySubscription).toHaveBeenCalledOnceWith(false);
  //   });
  // });
});
