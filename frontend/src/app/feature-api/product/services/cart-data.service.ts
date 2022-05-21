import { map, Observable, of, shareReplay, switchMap, zip, Subject, withLatestFrom, EMPTY, merge } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionService } from '@fe-core/services/session/session.service';
import { ProductItemRaw } from '@fe-core/services/models/product-item-raw';
import { CartItem } from '@fe-feature-api/product/models/cart-item';
import { CartService } from '@fe-feature-api/product/services/cart.service';
import { ProductService } from '@fe-feature-api/product/services/product.service';

@Injectable({ providedIn: 'root' })
export class CartDataService {
  public readonly cart$: Observable<CartItem[]>;
  private deleteProductId$ = new Subject<number>();
  private addProduct$ = new Subject<ProductItemRaw>();

  constructor(cartService: CartService, sessionService: SessionService, productService: ProductService) {
    const cartRawOnLoad$ = sessionService.userSession$.pipe(
      switchMap(userSession => (userSession.isLoggedIn ? cartService.getUserCartRaw(userSession.id) : of(undefined))),
      shareReplay(1)
    );

    const cartRawOnDelete$ = this.deleteProductId$.pipe(
      withLatestFrom(cartRawOnLoad$),
      switchMap(([productId, cartRaw]) => {
        if (!cartRaw) {
          return EMPTY;
        }
        cartRaw.products = cartRaw.products.filter(product => product.id !== productId);
        return cartService.updateCartRaw(cartRaw);
      })
    );

    const cartRawOnAdd$ = this.addProduct$.pipe(
      withLatestFrom(cartRawOnLoad$),
      switchMap(([product, cartRaw]) => {
        if (!cartRaw) {
          return EMPTY;
        }
        const existingProduct = cartRaw.products.find(p => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
        } else {
          cartRaw.products.push(product);
        }
        return cartService.updateCartRaw(cartRaw);
      })
    );

    this.cart$ = merge(cartRawOnLoad$, cartRawOnDelete$, cartRawOnAdd$).pipe(
      switchMap(cart => zip(
        of(cart), Array.isArray(cart?.products) && cart?.products.length
          ? productService.getList({ id: cart?.products.map(p => p.id) })
          : of([])
      )),
      map(([cart, products]) => (cart
        ? cart?.products.map(p => ({ product: products.find(fullProd => fullProd.id === p.id) as CartItem['product'], quantity: p.quantity }))
        : [])
      ),
      shareReplay(1)
    );
  }

  public deleteCartProduct(productId: number): void {
    this.deleteProductId$.next(productId);
  }

  public addToCart(productId: number, quantity: number = 1): void {
    this.addProduct$.next({ id: productId, quantity });
  }
}
