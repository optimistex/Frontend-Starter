import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { NotificationService } from '@fe-core/services/notification/notification.service';
import { SessionService } from '../services/session/session.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router, private notificationService: NotificationService) {
  }

  public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sessionService.userSession$.pipe(map(userSession => {
      if (!userSession.isAdmin) {
        this.notificationService.warn('Forbidden action');
        return this.router.createUrlTree(['/']);
      }

      this.notificationService.success('Admin mode ;)');
      return true;
    }));
  }
}
