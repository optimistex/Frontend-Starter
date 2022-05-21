import { Observable, switchMap, of, zip, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '@fe-core/services/api/api.service';
import { CartItem } from '../models/cart-item';
import { ProductService } from './product.service';

interface CartResponse {
  /** User ID */
  id: number;
  products: { /** Product ID*/ id: number; quantity: number }[];
}

@Injectable()
export class CartService {
  constructor(private apiService: ApiService, private productService: ProductService) {
  }

  public getUserCart(userId: number): Observable<CartItem[]> {
    return this.apiService.get<CartResponse>(['cartGetItem', { userId: String(userId) }]).pipe(
      switchMap(cart => zip(of(cart), this.productService.getList({ id: cart.products.map(p => p.id) }))),
      map(([cart, products]) => cart.products
        .map(p => ({ product: products.find(fullProd => fullProd.id === p.id) as CartItem['product'], quantity: p.quantity }))
      )
    );
  }
}
