import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'sr-footer',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  template: `<footer
    class="footer footer-center p-10 bg-primary text-primary-content">
    <div>
      <div class="avatar">
        <div
          class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="assets/logo.svg" width="80" height="80" aria-label="logo" />
        </div>
      </div>
      <p class="font-bold">
        Luis H. Castro. <br />Providing solutions inside the madworld of tech
        since 2007.
      </p>
      <p>Copyright © 2023 - All right reserved</p>
    </div>
    <div>
      <ul class="grid grid-flow-col text-base xl:gap-8">
        <li class="w-16 hover:text-base-100 hover:transition-all">
          <a
            href="https://twitter.com/LuisHCCDev"
            target="_blank"
            rel="noreferrer noopener"
            ><svg-icon
              key="twitter"
              fontSize="30px"
              height="30px"
              aria-label="twitter"
          /></a>
        </li>
        <li class="w-16 hover:text-base-100 hover:transition-all">
          <a
            href="https://github.com/luishcastroc"
            target="_blank"
            rel="noreferrer noopener"
            ><svg-icon
              key="github"
              fontSize="30px"
              height="30px"
              aria-label="github"
          /></a>
        </li>
        <li class="w-16 hover:text-base-100 hover:transition-all">
          <a
            href="https://www.threads.net/@luishccdev"
            target="_blank"
            rel="noreferrer noopener"
            ><svg-icon
              key="threads"
              fontSize="30px"
              height="30px"
              aria-label="threads"
          /></a>
        </li>
      </ul>
    </div>
  </footer>`,
  styles: [],
})
export class FooterComponent {}
