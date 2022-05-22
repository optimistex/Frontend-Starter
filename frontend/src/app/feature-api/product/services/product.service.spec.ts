import { MockProvider } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '@fe-core/services/api/api.service';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, MockProvider(ApiService)],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
