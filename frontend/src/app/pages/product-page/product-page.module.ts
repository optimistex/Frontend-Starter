import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';

@NgModule({
  imports: [CommonModule, ProductPageRoutingModule],
  declarations: [ProductPageComponent],
})
export class ProductPageModule {
}
