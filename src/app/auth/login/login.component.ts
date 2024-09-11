import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthModel } from '../../models/auth.model';
import { AuthService } from '../auth.service';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() moveToRegister = new EventEmitter<AuthModel>();

  loginForm!: FormGroup;
  errorMessage?: string;
  isLoginSuccessful: boolean = true;
  passwordVisible: boolean = false;
  passwordFieldType: string = 'password';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe(
        (response: { access_token: string }) => {
          this.isLoginSuccessful = true;
          this.authService.setShowAuth(false);
          this.authService.handleLoginSuccess(response.access_token);
        },
        (error) => {
          this.isLoginSuccessful = false;
          this.errorMessage = error.error.error;
        }
      );
    }
  }

  onEyeClick() {
    this.passwordVisible = !this.passwordVisible;
    this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
  }

  goToRegister() {
    this.moveToRegister.emit('register');
  }

  onClose() {
    this.authService.setShowAuth(false);
  }
}
