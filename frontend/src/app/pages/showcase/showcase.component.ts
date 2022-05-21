import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '@fe-feature-api/product/services/cart.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent {
  public cart$: Observable<unknown>;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.getUserCart(3);
  }
}
