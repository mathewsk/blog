import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'blog-dashboard',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgFor],
  host: {
    class: 'flex min-h-[100dvh] flex-col',
  },
  template: `
    <main class="z-10 flex w-full flex-auto flex-col pt-6">
      <sr-navbar />
      <div class="relative flex flex-auto">
        <router-outlet></router-outlet>
        <!-- Animated circles container -->
        <div class="circle-container fixed">
          <ul class="circles">
            <li *ngFor="let number of numbers"></li>
          </ul>
        </div>
      </div>
      <sr-footer />
    </main>
  `,
})
export class DashboardComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
