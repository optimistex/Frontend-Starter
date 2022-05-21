import { DomSanitizer } from '@angular/platform-browser';
import { mock } from '@fe-test';
import { HighlightPipe } from './highlight.pipe';

describe('HighlightPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightPipe(mock<DomSanitizer>({}));
    expect(pipe).toBeTruthy();
  });
});
