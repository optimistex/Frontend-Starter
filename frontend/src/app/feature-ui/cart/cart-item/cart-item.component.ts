import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '@fe-core/models/cart-item';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';

@Component({
  selector: 'app-cart-item[cartItem]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() public cartItem!: CartItem;

  constructor(public cartDataService: CartDataService) {
  }
}
