import { Component, Input } from '@angular/core';
import { Product } from '@fe-feature-api/product/models/product';

@Component({
  selector: 'app-product-item[product]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() public product!: Product;
}
