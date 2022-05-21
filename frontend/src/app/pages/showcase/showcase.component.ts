import { Observable, BehaviorSubject, startWith, debounceTime, combineLatest, switchMap, map } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '@fe-feature-api/product/models/product';
import { ProductService } from '@fe-feature-api/product/services/product.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent {
  public productList$: Observable<Product[] | undefined>;
  public page$ = new BehaviorSubject<number>(1);
  public searchCtrl = new FormControl('');

  constructor(private productService: ProductService) {
    const search$: Observable<string> = this.searchCtrl.valueChanges.pipe(startWith(this.searchCtrl.value), debounceTime(500));

    this.productList$ = combineLatest([this.page$, search$]).pipe(
      switchMap(([page, search]) => this.productService.getList({ page, limit: 10, search })),
      map(productList => (Array.isArray(productList) && productList.length ? productList : undefined))
    );
  }
}
