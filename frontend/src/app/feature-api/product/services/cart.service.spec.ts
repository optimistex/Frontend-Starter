import { MockProvider } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '@fe-core/services/api/api.service';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService, MockProvider(ApiService)],
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
