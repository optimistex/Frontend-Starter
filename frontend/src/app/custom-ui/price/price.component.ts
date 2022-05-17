import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price[data]',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {
  @Input() public data!: { price: number; discount: number };
}
