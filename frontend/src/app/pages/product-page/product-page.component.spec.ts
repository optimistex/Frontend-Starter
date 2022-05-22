import { Subject } from 'rxjs';
import { MockProvider, MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '@fe-core/services/session/session.service';
import { BackButtonComponent } from '@fe-core-ui/back-button/back-button.component';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { CartDataService } from '@fe-feature-api/product/services/cart-data.service';
import { ProductPageComponent } from './product-page.component';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        MockProvider(ProductService),
        MockProvider(CartDataService),
        MockProvider(SessionService, { userSession$: new Subject() }),
      ],
      declarations: [ProductPageComponent, MockComponents(BackButtonComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
