import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '@fe-features/product/services/product.service';
import { Product } from '@fe-features/product/models/product';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
    public products$: Observable<Product[]>;

    constructor(private productService: ProductService) {
        this.products$ = this.productService.getList();
    }

    ngOnInit(): void {
    }

}
