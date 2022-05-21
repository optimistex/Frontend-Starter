import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { HighlightComponent } from './highlight/highlight.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HighlightPipe, HighlightComponent],
  exports: [HighlightComponent],
})
export class HighlightModule {
}
