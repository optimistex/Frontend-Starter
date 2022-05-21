import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {
  }

  public transform(value: string, search: string): SafeHtml {
    if (!search) {
      return value;
    }
    const re = new RegExp(search, 'igm');
    return this.domSanitizer.bypassSecurityTrustHtml(value.replace(re, '<span class="highlighted-text">$&</span>'));
  }
}
