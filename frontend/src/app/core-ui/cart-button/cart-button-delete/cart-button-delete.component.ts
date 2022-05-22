import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart-button-delete',
  templateUrl: './cart-button-delete.component.html',
  styleUrls: ['./cart-button-delete.component.scss'],
})
export class CartButtonDeleteComponent {
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
