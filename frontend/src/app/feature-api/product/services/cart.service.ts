import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '@fe-core/services/api/api.service';
import { CartRaw } from '../models/cart-raw';
import { ProductService } from './product.service';

@Injectable()
export class CartService {
  constructor(private apiService: ApiService, private productService: ProductService) {
  }

  public getUserCartRaw(userId: number): Observable<CartRaw> {
    return this.apiService.get<CartRaw>(['cartItemApi', { userId: String(userId) }]);
  }

  public updateCartRaw(cart: CartRaw): Observable<CartRaw> {
    return this.apiService.patch<CartRaw>(['cartItemApi', { userId: String(cart.id) }], cart);
  }
}
