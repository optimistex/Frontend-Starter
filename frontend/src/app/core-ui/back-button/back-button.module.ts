import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './back-button.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BackButtonComponent],
  exports: [BackButtonComponent],
})
export class BackButtonModule {
}
