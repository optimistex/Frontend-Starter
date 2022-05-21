import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceModule } from '@fe-core-ui/price/price.module';
import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [CommonModule, PriceModule],
  declarations: [CartItemComponent],
  exports: [CartItemComponent],
})
export class CartItemModule {
}
