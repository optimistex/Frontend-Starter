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

  it('should be created when sessionStorage is empty', () => {
    // For non existing key sessionStorage retrieves null (!)
    spyOn(sessionStorage, 'getItem').and.returnValue(null);
    const service = createSessionService();
    service.userSession$.subscribe(userSessionCallback);

    expect(sessionStorage.getItem).toHaveBeenCalledTimes(1);
    expect(userSession).toBeInstanceOf(UserSession);
    expect(userSession.id).toBe(0);
  });

  it('should be created when sessionStorage has data', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('{"id":10}');
    const service = createSessionService();
    service.userSession$.subscribe(userSessionCallback);

    expect(sessionStorage.getItem).toHaveBeenCalledTimes(1);
    expect(userSession).toBeInstanceOf(UserSession);
    expect(userSession.id).toBe(10);
  });

  it('should set new session data', () => {
    spyOn(sessionStorage, 'setItem');
    const service = createSessionService();
    service.setUserSession(new UserSession({ id: 15 }));
    service.userSession$.subscribe(userSessionCallback);

    expect(userSession.id).toBe(15);
    expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('auth', JSON.stringify({
      id: 15, name: { firstName: 'Guest', lastName: '' }, address: { country: '', city: '', zip: '', street: '' }, phone: '', avatar: '', email: '',
      role: 'GUEST', orders: [],
    }));
  });

  it('should clear session', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('{"token":"test"}');
    spyOn(sessionStorage, 'removeItem');
    const service = createSessionService();
    service.clearUserSession();
    service.userSession$.subscribe(userSessionCallback);

    expect(userSession.id).toBe(0);
    expect(sessionStorage.removeItem).toHaveBeenCalledOnceWith('auth');
  });
});
