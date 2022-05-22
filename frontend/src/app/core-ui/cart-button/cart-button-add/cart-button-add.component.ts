import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart-button-add',
  templateUrl: './cart-button-add.component.html',
  styleUrls: ['./cart-button-add.component.scss'],
})
export class CartButtonAddComponent {
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
