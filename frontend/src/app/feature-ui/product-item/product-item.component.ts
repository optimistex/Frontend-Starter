import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '@fe-core/models/product';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';

@Component({
  selector: 'app-product-item[product]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() public product!: Product;
  @Input() public search = '';

  constructor(public cartDataService: CartDataService) {
  }
}
