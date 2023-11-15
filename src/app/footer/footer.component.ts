import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
  <footer class="footer">
  <div class="container text-center">
    <p>&copy; {{currentYear}} Evan W. Lawrence. All rights reserved.</p>
  </div>
</footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number | undefined;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
