import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartModule } from '@fe-feature-ui/cart/cart.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, CartModule],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class LayoutModule {
}
