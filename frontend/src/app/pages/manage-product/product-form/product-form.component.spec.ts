import { MockProviders, MockComponent } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '@fe-core/models/product';
import { NotificationService } from '@fe-core/services/notification/notification.service';
import { MultiStringEditorComponent } from '@fe-core-ui/multi-string-editor/multi-string-editor/multi-string-editor.component';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [MockProviders(ProductService, NotificationService)],
      declarations: [ProductFormComponent, MockComponent(MultiStringEditorComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    component.product = new Product();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
