import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceModule } from '@fe-core-api/price/price.module';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  imports: [CommonModule, PriceModule],
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
})
export class ProductItemModule { }
