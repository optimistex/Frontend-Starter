import { MockPipe } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightPipe } from '../highlight.pipe';
import { HighlightComponent } from './highlight.component';

describe('HighlightComponent', () => {
  let component: HighlightComponent;
  let fixture: ComponentFixture<HighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightComponent, MockPipe(HighlightPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
