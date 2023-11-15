import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>    
      <app-navbar></app-navbar>
      <div class="wrapper">
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <app-footer></app-footer>
      </div>
    </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'homes';

}

