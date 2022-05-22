import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageGalleryComponent],
  exports: [ImageGalleryComponent],
})
export class ImageGalleryModule {
}
