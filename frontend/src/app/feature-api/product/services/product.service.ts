import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '@fe-core/services/api/api.service';
import { Product } from '@fe-core/models/product';

@Injectable()
export class ProductService {
  constructor(private apiService: ApiService) {
  }

  public create(product: Product): Observable<Product> {
    return this.apiService.post<Product>('productItemApi', product).pipe(map(response => new Product(response)));
  }

  public update(product: Product): Observable<Product> {
    return this.apiService.put<Product>(['productItemApi', { productId: String(product.id) }], product).pipe(map(response => new Product(response)));
  }

  public getItem(productId: number): Observable<Product> {
    return this.apiService.get<Product>(['productItemApi', { productId: String(productId) }]).pipe(map(response => new Product(response)));
  }

  public getList(parameters: { page?: number; limit?: number; id?: number[]; search?: string }): Observable<Product[]> {
    return this.apiService.get<Product[]>('productListApi', {
      ...(parameters.page ? { _page: parameters.page } : {}),
      ...(parameters.limit ? { _limit: parameters.limit } : {}),
      ...(parameters.id ? { id: parameters.id } : {}),
      ...(parameters.search ? { q: parameters.search } : {}),
    }).pipe(map(response => response.map(r => new Product(r))));
  }

  public getRecommendedList(): Observable<Product[]> {
    return this.apiService.get<Product[]>('productRecommendedListApi').pipe(map(response => response.map(r => new Product(r))));
  }
}
