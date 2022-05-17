import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { NotificationService } from './services/notification/notification.service';

@NgModule({
  providers: [ApiService, NotificationService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
