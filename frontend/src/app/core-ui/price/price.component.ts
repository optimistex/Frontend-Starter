import { Component, Input } from '@angular/core';
import { Price } from './price';

@Component({
  selector: 'app-price[data]',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {
  @Input() public data?: Price | null;
}
