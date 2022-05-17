import { Injectable } from '@angular/core';
import { ApiService } from '@fe-core/services/api/api.service';

@Injectable()
export class ProductService {
    constructor(private apiService: ApiService) {
    }

    public getList() {
        return this.apiService.get("productGetList");
    }
}
