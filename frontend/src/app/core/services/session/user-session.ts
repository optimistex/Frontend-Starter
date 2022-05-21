import { User } from '@fe-core/services/models/user';

export class UserSession extends User {
  constructor(data?: Partial<User>) {
    super(data);
  }

  public static fromString(data: string): UserSession {
    try {
      return new UserSession(JSON.parse(data));
    } catch (e) {
      return new UserSession();
    }
  }

  public override toString(): string {
    return JSON.stringify(this);
  }

  public get isLoggedIn(): boolean {
    return this.role !== 'GUEST';
  }
}
