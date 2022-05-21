import { map, Observable, shareReplay, switchMap, of } from 'rxjs';
import { Component } from '@angular/core';
import { Price } from '@fe-core-ui/price/price';
import { SessionService } from '@fe-core/services/session/session.service';
import { CartService } from '@fe-feature-api/product/services/cart.service';
import { CartItem } from '@fe-feature-api/product/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cart$: Observable<CartItem[] | undefined>;
  public totalPrice$: Observable<Price>;

  constructor(cartService: CartService, sessionService: SessionService) {
    const cart$ = sessionService.userSession$.pipe(
      switchMap(userSession => (userSession.isLoggedIn ? cartService.getUserCart(userSession.id) : of([]))),
      shareReplay(1)
    );
    this.cart$ = cart$.pipe(map(c => (Array.isArray(c) && c.length ? c : undefined)));

    this.totalPrice$ = cart$.pipe(map(cart => cart.reduce((price, item) => {
      const newPrice = item.product.calculatePrice(item.quantity);
      price.totalPrice += newPrice.totalPrice;
      price.price += newPrice.price;
      return price;
    }, { price: 0, totalPrice: 0 } as Price)));
  }
}
