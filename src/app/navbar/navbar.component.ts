import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="center">
  <a class="navbar-brand" href="#">Evan W. Lawrence</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="resume">Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="websites">Web Development</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="games">Game Design</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="animation">Animation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/Newlance" target="_blank">GitHub</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact">Contact</a>
      </li>
    </ul>
    </div>
  </div>
</nav>`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
