import { MockProvider, MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from '@fe-core-ui/paginator/paginator.component';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { ShowcaseComponent } from './showcase.component';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [MockProvider(ProductService)],
      declarations: [ShowcaseComponent, MockComponents(PaginatorComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
