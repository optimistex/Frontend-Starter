import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from '@fe-core-ui/paginator/paginator.module';
import { ProductModule } from '@fe-feature-api/product/product.module';
import { ProductItemModule } from '@fe-feature-ui/product-item/product-item.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    ReactiveFormsModule,
    ProductModule,
    PaginatorModule,
    ProductItemModule,
  ],
  declarations: [ShowcaseComponent],
})
export class ShowcaseModule {
}
