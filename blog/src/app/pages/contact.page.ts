import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sr-contact',
  standalone: true,
  imports: [CommonModule],
  template: `<p>contact works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactIndexPage {}
