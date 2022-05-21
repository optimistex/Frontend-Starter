import { BehaviorSubject, Observable, switchMap, debounceTime, startWith, combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  public searchCtrl = new FormControl('');

  constructor(private productService: ProductService) {
    const search$: Observable<string> = this.searchCtrl.valueChanges.pipe(startWith(this.searchCtrl.value), debounceTime(500));

    this.productList$ = combineLatest([this.page$, search$]).pipe(
      switchMap(([page, search]) => this.productService.getList({ page, limit: 10, search }))
    );
  }
}
