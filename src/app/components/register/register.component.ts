import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private route: Router) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    event.preventDefault();
  }

  login() {
    this.route.navigate(['/login']);
  }
}
