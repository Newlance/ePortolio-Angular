import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div id="resume">
  <iframe src="https://docs.google.com/document/d/e/2PACX-1vQhXqPRPXZHH4wDX_ePYN0MczLzNbDqrnbtlTqyDB9aiwIVEkA8zpO5Q2_oFNzs3CnPhBgyCYyEULUk/pub?embedded=true"></iframe>
</div>
  `,
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

}
