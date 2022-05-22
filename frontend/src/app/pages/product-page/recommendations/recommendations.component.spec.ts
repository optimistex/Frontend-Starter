import { MockProviders } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '@fe-feature-api/product/services/product.service';
import { RecommendationsComponent } from './recommendations.component';

describe('RecommendationsComponent', () => {
  let component: RecommendationsComponent;
  let fixture: ComponentFixture<RecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MockProviders(ProductService)],
      declarations: [RecommendationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
