import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '@fe-core-ui/paginator/paginator.module';
import { ProductModule } from '@fe-feature-api/product/product.module';
import { ProductItemModule } from '@fe-feature-ui/product-item/product-item.module';
import { CartItemModule } from '@fe-feature-ui/cart-item/cart-item.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    ProductModule,
    PaginatorModule,
    ProductItemModule,
    CartItemModule,
  ],
  declarations: [
    ShowcaseComponent,
    ProductListComponent,
    CartComponent,
  ],
})
export class ShowcaseModule {
}
