import { map, Observable, filter, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@fe-core/models/product';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  public product$: Observable<Product>;

  constructor(route: ActivatedRoute, productService: ProductService, public cartDataService: CartDataService) {
    this.product$ = route.paramMap.pipe(
      map(paramMap => Number(paramMap.get('productId'))),
      filter(productId => !!productId),
      switchMap(productId => productService.getItem(productId))
    );

  }
}
