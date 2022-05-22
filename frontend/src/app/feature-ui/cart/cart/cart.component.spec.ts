import { Subject } from 'rxjs';
import { MockProviders, MockProvider } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionService } from '@fe-core/services/session/session.service';
import { NotificationService } from '@fe-core/services/notification/notification.service';
import { CartService } from '@fe-feature-api/product/services/cart.service';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        MockProviders(CartService, SessionService, ProductService, NotificationService),
        MockProvider(SessionService, { userSession$: new Subject() }),
      ],
      declarations: [CartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
