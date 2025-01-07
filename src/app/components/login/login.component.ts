import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { MaterialModule } from '../../material/material/material.module';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isButtonDisabled = true;

  constructor(private route: Router) {
    this.loginForm.statusChanges.subscribe((status) => {
      this.isButtonDisabled = !this.loginForm.valid;
    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    event.preventDefault();
  }

  register() {
    this.route.navigate(['/register']);
  }

  // solo faltaría implementar la lógica de login
  login(e: Event) {
    if(!this.loginForm.valid) {
      return;
    }
    this.isButtonDisabled = true;
    console.log(this.loginForm.value);
  }
}
