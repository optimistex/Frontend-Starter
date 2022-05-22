import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductRoutingModule } from './manage-product-routing.module';
import { ManageProductComponent } from './manage-product.component';

@NgModule({
  imports: [CommonModule, ManageProductRoutingModule],
  declarations: [ManageProductComponent],
})
export class ManageProductModule {
}
