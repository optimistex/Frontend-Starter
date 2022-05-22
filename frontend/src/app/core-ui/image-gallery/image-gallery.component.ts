import { Component, Input } from '@angular/core';
import { Product } from '@fe-core/models/product';

type ImageGalleryData = Pick<Product, 'srcDefaultImage' | 'srcImages'>;

@Component({
  selector: 'app-image-gallery[data]',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {
  @Input() public data!: ImageGalleryData;
}
