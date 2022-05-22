import { Observable, combineLatest, map, of, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '@fe-core/models/product';
import { ProductService } from '@fe-feature-api/product/services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss'],
})
export class ManageProductComponent {
  public product$: Observable<Product>;

  constructor(router: Router, route: ActivatedRoute, productService: ProductService) {
    const create$: Observable<boolean> = route.data.pipe(map(data => data['action'] === 'create'));
    const productId$: Observable<number> = route.paramMap.pipe(map(paramMap => Number(paramMap.get('productId'))));

    this.product$ = combineLatest([create$, productId$]).pipe(
      switchMap(([create, productId]) => (create ? of(new Product()) : productService.getItem(productId)))
    );
  }
}
