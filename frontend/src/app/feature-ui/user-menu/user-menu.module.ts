import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '@fe-feature-api/user/user.module';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [CommonModule, UserModule],
  declarations: [UserMenuComponent],
  exports: [UserMenuComponent],
})
export class UserMenuModule {
}
