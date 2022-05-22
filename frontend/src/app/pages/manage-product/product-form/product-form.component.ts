import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@fe-core/models/product';
import { NotificationService } from '@fe-core/services/notification/notification.service';
import { ProductService } from '@fe-feature-api/product/services/product.service';

@Component({
  selector: 'app-product-form[product]',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() public product!: Product;
  public formGroup!: FormGroup;

  constructor(private productService: ProductService, private router: Router, private notificationService: NotificationService) {
  }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(this.product.name),
      description: new FormControl(this.product.description),
      defaultImage: new FormControl(this.product.defaultImage),
      images: new FormControl(this.product.images),
      price: new FormControl(this.product.price),
      discount: new FormControl(this.product.discount, [Validators.min(0), Validators.max(100)]),
    });
  }

  public saveData(): void {
    if (this.formGroup.invalid) {
      this.notificationService.warn('Form data invalid');
      return;
    }

    const requestProduct = new Product({ ...this.product, ...this.formGroup?.value });

    const request$ = this.product.id === 0 ? this.productService.create(requestProduct) : this.productService.update(requestProduct);

    request$.subscribe(product => {
      this.notificationService.success(`Product "${product.name}" saved`);
      this.router.navigate(['/product', product.id]);
    });
  }
}
