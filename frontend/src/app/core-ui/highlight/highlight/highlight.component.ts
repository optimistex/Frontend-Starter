import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss'],
  encapsulation: ViewEncapsulation.None, // Use "soft" encapsulation >> "app-highlight { ... }"
})
export class HighlightComponent {
  @Input() public text = '';
  @Input() public search = '';
}
