import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Product } from '@fe-core/models/product';
import { ProductService } from '@fe-feature-api/product/services/product.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  public recommended$: Observable<Product[]>;

  constructor(public productService: ProductService) {
    this.recommended$ = productService.getRecommendedList();
  }
}
