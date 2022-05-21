import { Observable, switchMap, of, zip, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '@fe-core/services/api/api.service';
import { CartItem } from '../models/cart-item';
import { CartRaw } from '../models/cart-raw';
import { ProductService } from './product.service';

@Injectable()
export class CartService {
  constructor(private apiService: ApiService, private productService: ProductService) {
  }

  public getUserCart(userId: number): Observable<CartItem[]> {
    return this.apiService.get<CartRaw>(['cartGetItem', { userId: String(userId) }]).pipe(
      switchMap(cart => zip(of(cart), this.productService.getList({ id: cart.products.map(p => p.id) }))),
      map(([cart, products]) => cart.products
        .map(p => ({ product: products.find(fullProd => fullProd.id === p.id) as CartItem['product'], quantity: p.quantity }))
      )
    );
  }

  public deleteCartItem(productId: number): Observable<void> {
    return this.apiService.patch(['cartGetItem', { userId: String(3) }], {
      id: 3,
      products: [
        { id: 588, quantity: 1 },
        { id: 500, quantity: 10 },
        { id: 173, quantity: 2 },
      ],
    });
  }
}
