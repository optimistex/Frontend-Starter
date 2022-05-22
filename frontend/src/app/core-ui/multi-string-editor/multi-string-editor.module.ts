import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiStringEditorComponent } from './multi-string-editor/multi-string-editor.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [MultiStringEditorComponent],
  exports: [MultiStringEditorComponent],
})
export class MultiStringEditorModule {
}
