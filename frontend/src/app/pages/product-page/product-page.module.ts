import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryModule } from '@fe-core-ui/image-gallery/image-gallery.module';
import { PriceModule } from '@fe-core-ui/price/price.module';
import { CartButtonModule } from '@fe-core-ui/cart-button/cart-button.module';
import { ProductModule } from '@fe-feature-api/product/product.module';
import { ProductItemModule } from '@fe-feature-ui/product-item/product-item.module';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  imports: [CommonModule, ProductPageRoutingModule, ImageGalleryModule, PriceModule, CartButtonModule, ProductModule, ProductItemModule],
  declarations: [ProductPageComponent, RecommendationsComponent],
})
export class ProductPageModule {
}
