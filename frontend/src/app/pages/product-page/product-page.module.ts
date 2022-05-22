import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryModule } from '@fe-core-ui/image-gallery/image-gallery.module';
import { PriceModule } from '@fe-core-ui/price/price.module';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';

@NgModule({
  imports: [CommonModule, ProductPageRoutingModule, ImageGalleryModule, PriceModule],
  declarations: [ProductPageComponent],
})
export class ProductPageModule {
}
