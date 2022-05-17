import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '@fe-features/product/product.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';


@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    ProductModule,
  ],
  declarations: [
    ShowcaseComponent,
  ],
})
export class ShowcaseModule {
}
