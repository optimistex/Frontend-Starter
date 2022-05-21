import { Component } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Product } from '@fe-feature-api/product/models/product';
import { ProductService } from '@fe-feature-api/product/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public productList$: Observable<Product[]>;
  public page$ = new BehaviorSubject<number>(1);

  constructor(private productService: ProductService) {
    this.productList$ = this.page$.pipe(
      switchMap(page => this.productService.getList({ page, limit: 10 }))
    );
  }
}
