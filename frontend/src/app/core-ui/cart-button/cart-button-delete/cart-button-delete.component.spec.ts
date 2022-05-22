import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonDeleteComponent } from './cart-button-delete.component';

describe('CartButtonDeleteComponent', () => {
  let component: CartButtonDeleteComponent;
  let fixture: ComponentFixture<CartButtonDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartButtonDeleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartButtonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
