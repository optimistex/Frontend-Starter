import { MockProvider } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MockProvider(CartDataService)],
      declarations: [ProductItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
