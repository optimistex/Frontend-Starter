import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PriceModule } from '@fe-core-ui/price/price.module';
import { HighlightModule } from '@fe-core-ui/highlight/highlight.module';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, PriceModule, HighlightModule],
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
})
export class ProductItemModule {
}
