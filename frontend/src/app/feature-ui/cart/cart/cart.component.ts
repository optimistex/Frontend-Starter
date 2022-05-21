import { map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Price } from '@fe-core-ui/price/price';
import { CartItem } from '@fe-feature-api/product/models/cart-item';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cart$: Observable<CartItem[] | undefined>;
  public totalPrice$: Observable<Price>;

  constructor(cartDataService: CartDataService) {
    this.cart$ = cartDataService.cart$.pipe(map(cart => (cart.length ? cart : undefined)));

    this.totalPrice$ = cartDataService.cart$.pipe(map(cart => cart.reduce((price, item) => {
      const newPrice = item.product.calculatePrice(item.quantity);
      price.totalPrice += newPrice.totalPrice;
      price.price += newPrice.price;
      return price;
    }, { price: 0, totalPrice: 0 } as Price)));
  }
}
