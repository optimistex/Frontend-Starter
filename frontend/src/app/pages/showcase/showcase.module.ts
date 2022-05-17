import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceModule } from '@fe-custom-ui/price/price.module';
import { ProductModule } from '@fe-features/product/product.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PaginatorModule } from '@fe-custom-ui/paginator/paginator.module';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    ProductModule,
    PriceModule,
    PaginatorModule,
  ],
  declarations: [
    ShowcaseComponent,
    ProductItemComponent,
  ],
})
export class ShowcaseModule {
}
