import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HomeComponent],
  template: `<main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
    </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'homes';
}
