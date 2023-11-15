import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
  <address>
  <strong>Email:</strong>   <a href="mailto:EL.PC.TECHS@gmail.com">EL.PC.TECHS@gmail.com</a><br />
  <strong>Phone:</strong> 603.422.2910
</address>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
