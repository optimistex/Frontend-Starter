import { ToastrModule } from 'ngx-toastr';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { NotificationService } from './services/notification/notification.service';
import { SessionService } from './services/session/session.service';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  imports: [
    ToastrModule.forRoot(),
  ],
  providers: [ApiService, NotificationService, SessionService, AdminGuard],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
