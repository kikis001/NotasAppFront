import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: Router) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    event.preventDefault();
  }

  register() {
    this.route.navigate(['/register']);
  }
}
