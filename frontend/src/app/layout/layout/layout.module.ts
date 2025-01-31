import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartModule } from '@fe-feature-ui/cart/cart.module';
import { UserMenuModule } from '@fe-feature-ui/user-menu/user-menu.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule, CartModule, UserMenuModule],
  declarations: [MainLayoutComponent, HeaderComponent],
  exports: [MainLayoutComponent],
})
export class LayoutModule {
}
