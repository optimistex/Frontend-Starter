import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '@fe-feature-api/product/models/cart-item';
import { CartService } from '@fe-feature-api/product/services/cart.service';

@Component({
  selector: 'app-cart-item[cartItem]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() public cartItem!: CartItem;

  constructor(private cartService: CartService) {
  }

  public deleteCartItem(productId: number): void {
    console.log('CartItemComponent.deleteCartItem', productId);
    this.cartService.deleteCartItem(3).subscribe();
  }
}
