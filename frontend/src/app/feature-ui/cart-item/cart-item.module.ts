import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartItemComponent],
  exports: [CartItemComponent],
})
export class CartItemModule {
}
