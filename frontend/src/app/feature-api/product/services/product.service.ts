import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '@fe-core/services/api/api.service';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  constructor(private apiService: ApiService) {
  }

  public getList(parameters: { page?: number; limit?: number; id?: number[]; search?: string }): Observable<Product[]> {
    return this.apiService.get<Product[]>('productGetList', {
      ...(parameters.page ? { _page: parameters.page } : {}),
      ...(parameters.limit ? { _limit: parameters.limit } : {}),
      ...(parameters.id ? { id: parameters.id } : {}),
      ...(parameters.search ? { q: parameters.search } : {}),
    });
  }
}
