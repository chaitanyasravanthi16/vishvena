import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email1:string = 'info@vishvena.com'
 email2:string ='team@vishvena.com'
}
