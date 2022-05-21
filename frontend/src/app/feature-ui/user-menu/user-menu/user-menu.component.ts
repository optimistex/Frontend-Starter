import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '@fe-core/services/session/session.service';
import { UserSession } from '@fe-core/services/session/user-session';
import { User } from '@fe-core/services/models/user';
import { UserService } from '@fe-feature-api/user/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  public proposeUserList$: Observable<User[]>;

  constructor(public sessionService: SessionService, userService: UserService) {
    this.proposeUserList$ = userService.getUsers({ page: 1, limit: 10 });
  }

  public loginAs(proposeUser: User): void {
    this.sessionService.setUserSession(new UserSession(proposeUser));
  }

  public logout(): void {
    this.sessionService.setUserSession(new UserSession());
  }
}
