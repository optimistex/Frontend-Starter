import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PriceModule } from '@fe-core-ui/price/price.module';
import { ProductModule } from '@fe-feature-api/product/product.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule, RouterModule, PriceModule, ProductModule],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent],
})
export class CartModule {
}
