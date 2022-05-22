import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonModule } from '@fe-core-ui/back-button/back-button.module';
import { ManageProductRoutingModule } from './manage-product-routing.module';
import { ManageProductComponent } from './manage-product.component';

@NgModule({
  imports: [CommonModule, ManageProductRoutingModule, BackButtonModule],
  declarations: [ManageProductComponent],
})
export class ManageProductModule {
}
