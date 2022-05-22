import { MockProvider, MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from '@fe-core/models/product';
import { PriceComponent } from '@fe-core-ui/price/price.component';
import { HighlightComponent } from '@fe-core-ui/highlight/highlight/highlight.component';
import { CartButtonAddComponent } from '@fe-core-ui/cart-button/cart-button-add/cart-button-add.component';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers: [MockProvider(CartDataService)],
      declarations: [ProductItemComponent, MockComponents(PriceComponent, HighlightComponent, CartButtonAddComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = new Product();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
