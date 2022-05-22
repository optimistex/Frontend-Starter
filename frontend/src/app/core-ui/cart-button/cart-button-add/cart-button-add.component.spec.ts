import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonAddComponent } from './cart-button-add.component';

describe('CartButtonAddComponent', () => {
  let component: CartButtonAddComponent;
  let fixture: ComponentFixture<CartButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartButtonAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
