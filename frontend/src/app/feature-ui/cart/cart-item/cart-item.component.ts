import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '@fe-feature-api/product/models/cart-item';

@Component({
  selector: 'app-cart-item[cartItem]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() public cartItem!: CartItem;

  public deleteCartItem(productId: number): void {
    console.log('CartItemComponent.deleteCartItem', productId);
  }
}
