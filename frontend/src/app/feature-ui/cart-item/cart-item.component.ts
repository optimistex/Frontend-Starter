import { Component, Input } from '@angular/core';
import { CartItem } from '@fe-feature-api/product/models/cart-item';

@Component({
  selector: 'app-cart-item[cartItem]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() public cartItem!: CartItem;
}
