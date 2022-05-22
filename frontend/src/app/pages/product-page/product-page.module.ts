import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryModule } from '@fe-core-ui/image-gallery/image-gallery.module';
import { PriceModule } from '@fe-core-ui/price/price.module';
import { CartButtonModule } from '@fe-core-ui/cart-button/cart-button.module';
import { ProductModule } from '@fe-feature-api/product/product.module';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';

@NgModule({
  imports: [CommonModule, ProductPageRoutingModule, ImageGalleryModule, PriceModule, CartButtonModule, ProductModule],
  declarations: [ProductPageComponent],
})
export class ProductPageModule {
}
