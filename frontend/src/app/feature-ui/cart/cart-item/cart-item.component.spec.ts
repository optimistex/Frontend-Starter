import { MockProviders, MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from '@fe-core/models/product';
import { PriceComponent } from '@fe-core-ui/price/price.component';
import { CartButtonDeleteComponent } from '@fe-core-ui/cart-button/cart-button-delete/cart-button-delete.component';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';
import { CartService } from '@fe-feature-api/product/services/cart.service';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MockProviders(CartDataService, CartService)],
      declarations: [CartItemComponent, MockComponents(PriceComponent, CartButtonDeleteComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.cartItem = { product: new Product(), quantity: 1 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
