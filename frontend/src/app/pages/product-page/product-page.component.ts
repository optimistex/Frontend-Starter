import { map, Observable, filter, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@fe-core/models/product';
import { SessionService } from '@fe-core/services/session/session.service';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  public product$: Observable<Product>;
  public isAdmin$: Observable<boolean>;

  constructor(route: ActivatedRoute, productService: ProductService, public cartDataService: CartDataService, sessionService: SessionService) {
    this.product$ = route.paramMap.pipe(
      map(paramMap => Number(paramMap.get('productId'))),
      filter(productId => !!productId),
      switchMap(productId => productService.getItem(productId))
    );

    this.isAdmin$ = sessionService.userSession$.pipe(map(userSession => userSession.isAdmin));
  }
}
