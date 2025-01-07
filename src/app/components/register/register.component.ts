import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material/material.module';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  isButtonDisabled = true;

  constructor(private route: Router) {
    this.registerForm.statusChanges.subscribe((status) => {
      this.isButtonDisabled = !this.registerForm.valid;
    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    event.preventDefault();
  }

  goLogin() {
    this.route.navigate(['/login']);
  }

  register(e: Event) {
    if(!this.registerForm.valid) {
      return;
    }
    this.isButtonDisabled = true;
    console.log(this.registerForm.value);
  }
}
