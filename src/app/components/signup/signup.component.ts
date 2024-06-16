import { Component } from '@angular/core';
import { User } from '../../interface/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  }, {
    validator: (form: FormGroup) => {
      const password = form.get('password')?.value || '';
      const confirmPassword = form.get('confirmPassword')?.value || '';

      return password === confirmPassword ? null : { notMatch: true };
    }
  }
  );

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  onSubmit() {
    if (this.form.valid)
      this.authService.signup(this.form.value as User).subscribe((user: User) => {
        alert('Đăng ký thành công')
        this.router.navigate(['signin'])
      })
  }
}
