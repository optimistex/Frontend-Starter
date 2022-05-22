import { Subject } from 'rxjs';
import { MockProvider, MockProviders } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { SessionService } from '@fe-core/services/session/session.service';
import { NotificationService } from '@fe-core/services/notification/notification.service';
import { CartDataService } from './cart-data.service';
import { CartService } from './cart.service';
import { ProductService } from './product.service';

describe('CartDataService', () => {
  let service: CartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartDataService, MockProviders(CartService, ProductService, NotificationService),
        MockProvider(SessionService, { userSession$: new Subject() }),
      ],
    });
    service = TestBed.inject(CartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
