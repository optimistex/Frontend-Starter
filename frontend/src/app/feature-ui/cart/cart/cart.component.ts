import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CartService } from '@fe-feature-api/product/services/cart.service';
import { CartItem } from '@fe-feature-api/product/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cart$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.getUserCart(3);
  }
}
