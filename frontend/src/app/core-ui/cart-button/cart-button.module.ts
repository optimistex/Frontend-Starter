import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartButtonAddComponent } from './cart-button-add/cart-button-add.component';
import { CartButtonDeleteComponent } from './cart-button-delete/cart-button-delete.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartButtonAddComponent, CartButtonDeleteComponent],
  exports: [CartButtonAddComponent, CartButtonDeleteComponent],
})
export class CartButtonModule {
}
