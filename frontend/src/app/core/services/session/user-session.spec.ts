import { UserSession } from './user-session';

describe('UserSession', () => {
  it('should create empty', () => {
    const userSession = new UserSession();
    expect(userSession.isLoggedIn()).toBe(false);
  });

  it('should create with data', () => {
    const userSession = new UserSession({ id: 10, role: 'CUSTOMER' });
    expect(userSession.id).toBe(10);
    expect(userSession.isLoggedIn()).toBe(true);
  });

  describe('UserSession.isAdmin', () => {
    it('should return true if username is equal to "admin"', () => {
      const userSession = new UserSession({ role: 'ADMIN' });
      expect(userSession.isAdmin).toBe(true);
    });

    it('should return false if username is not equal to "admin"', () => {
      const userSession = new UserSession({ role: 'CUSTOMER' });
      expect(userSession.isAdmin).toBe(false);
    });
  });
});
