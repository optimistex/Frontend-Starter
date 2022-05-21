import { map, Observable, shareReplay } from 'rxjs';
import { Component } from '@angular/core';
import { Price } from '@fe-core-ui/price/price';
import { CartService } from '@fe-feature-api/product/services/cart.service';
import { CartItem } from '@fe-feature-api/product/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cart$: Observable<CartItem[]>;
  public totalPrice$: Observable<Price>;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.getUserCart(3).pipe(shareReplay(1));
    this.totalPrice$ = this.cart$.pipe(map(cart => cart.reduce((price, item) => {
      const newPrice = item.product.calculatePrice(item.quantity);
      price.totalPrice += newPrice.totalPrice;
      price.price += newPrice.price;
      return price;
    }, { price: 0, totalPrice: 0 } as Price)));
  }
}
