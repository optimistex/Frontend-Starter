import { Component, OnInit } from '@angular/core';
import { ProductService } from '@fe-features/product/product.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
    public products$: Observable<any>;

    constructor(private productService: ProductService) {
        this.products$ = this.productService.getList();
    }

    ngOnInit(): void {
    }

}