import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BackButtonModule } from '@fe-core-ui/back-button/back-button.module';
import { ManageProductRoutingModule } from './manage-product-routing.module';
import { ManageProductComponent } from './manage-product.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ManageProductRoutingModule, BackButtonModule],
  declarations: [ManageProductComponent, ProductFormComponent],
})
export class ManageProductModule {
}
