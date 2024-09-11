import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { HeaderService } from '../../header/header.service';
import { AuthModel } from '../../models/auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() moveToLogin = new EventEmitter<AuthModel>();

  private mobileBreakpoint = 875;

  registerForm!: FormGroup;
  isRegisterSuccessful: boolean = true;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';
  errorMessage?: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.authService.register({ email, password }).subscribe(
        (response: { access_token: string }) => {
          this.authService.handleLoginSuccess(response.access_token); 
          this.isRegisterSuccessful = true;
          this.authService.setShowAuth(false);

          // Check screen width and toggle navbar if on mobile
          const screenWidth = window.innerWidth; // Get current screen width
          if (screenWidth <= this.mobileBreakpoint) {
            this.headerService.toggleNavbar(); // Call the headerService to toggle navbar for mobile
          }
        },
        (error) => {
          console.error('Registration failed', error);
          this.isRegisterSuccessful = false;
          this.errorMessage = error.error.error;
          console.log(error.error.error);
        }
      );
    }
  }

  onPasswordEyeClick() {
    this.passwordVisible = !this.passwordVisible;
    this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
  }

  onConfirmPasswordEyeClick() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
    this.confirmPasswordFieldType = this.confirmPasswordVisible
      ? 'text'
      : 'password';
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password &&
      confirmPassword &&
      password.value === confirmPassword.value
      ? null
      : { passwordsMismatch: true };
  }

  goToLogin() {
    this.moveToLogin.emit('login');
  }

  onClose() {
    this.authService.setShowAuth(false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    const screenWidth = event.target.innerWidth;
    this.toggleNavbarBasedOnScreenSize(screenWidth);
  }

  // Function to toggle the navbar based on screen width
  toggleNavbarBasedOnScreenSize(screenWidth: number) {
    if (screenWidth <= this.mobileBreakpoint) {
      this.headerService.toggleNavbar();
    }
  }
}
