import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ProductService } from '@fe-features/product/services/product.service';
import { Product } from '@fe-features/product/models/product';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  public productList$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.productList$ = this.productService.getList({ page: 2, limit: 10 });
  }
}
