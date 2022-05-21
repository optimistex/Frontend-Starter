import { Observable, BehaviorSubject, switchMap } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { Product } from '@fe-feature-api/product/models/product';
import { CartService } from '@fe-feature-api/product/services/cart.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent {
  public productList$: Observable<Product[]>;
  public cart$: Observable<unknown>;
  public page$ = new BehaviorSubject<number>(1);

  constructor(private productService: ProductService, private cartService: CartService) {
    this.productList$ = this.page$.pipe(
      switchMap(page => this.productService.getList({ page, limit: 10 }))
    );

    this.cart$ = this.cartService.getUserCart(3);
  }
}
