import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[noSpecialCharacters]',
})
export class NoSpecialCharactersDirective {
  regexStr = '^[a-zA-Z ]*$';

  constructor() {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event'])
  blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  validateFields(event: ClipboardEvent) {
    event.preventDefault();
    // @ts-ignore
    const pasteData = event.clipboardData
      .getData('text/plain')
      .replace(/[^a-zA-Z ]/g, '');
    document.execCommand('insertText', false, pasteData);
  }
}
