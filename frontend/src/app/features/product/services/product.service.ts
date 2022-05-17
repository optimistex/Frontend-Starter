import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '@fe-core/services/api/api.service';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
    constructor(private apiService: ApiService) {
    }

    public getList(): Observable<Product[]> {
        return this.apiService.get<Product[]>('productGetList');
    }
}
