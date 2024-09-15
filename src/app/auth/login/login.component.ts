import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';
import { HeaderService } from '../../header/header.service';
import { AuthModel } from '../../models/auth.model';
import { ScreenSizeService } from '../../services/screen.size.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() moveToRegister = new EventEmitter<AuthModel>();
  authStatus: 'login' | 'register' = 'login';
  authForm!: FormGroup;
  isLoginMode: boolean = true;
  errorMessage?: string;
  isSubmitSuccessful: boolean = true;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  private screenSizeSubscription!: Subscription; 

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private headerService: HeaderService,
    public screenSizeService: ScreenSizeService 
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/), // Custom pattern for 1 uppercase letter and 1 special symbol
      ]],
      confirmPassword: ['', Validators.required], 
    });
    this.authForm.get('confirmPassword')?.disable();
  }

  ngOnDestroy() {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    const passwordControl = this.authForm.get('password');
    const confirmPasswordControl = this.authForm.get('confirmPassword');
    if (this.isLoginMode) {
      // In login mode, remove validators and disable confirmPassword field
      confirmPasswordControl?.clearValidators();
      confirmPasswordControl?.disable();
    } else {
      // In register mode, enable and add validators to confirmPassword field
      passwordControl?.setValidators( [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/), // Custom pattern for 1 uppercase letter and 1 special symbol
      ]);
      confirmPasswordControl?.enable();
      confirmPasswordControl?.setValidators([Validators.required, this.matchPasswordsValidator()]);
      confirmPasswordControl?.enable();
    }
    confirmPasswordControl?.updateValueAndValidity();
  }

  matchPasswordsValidator() {
    return () => {
      const password = this.authForm.get('password')?.value;
      const confirmPassword = this.authForm.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    const { email, password } = this.authForm.value;

    if (this.isLoginMode) {
      // Login logic
      this.authService.login({ email, password }).subscribe(
        (response: { access_token: string }) => {
          this.isSubmitSuccessful = true;
          this.authService.setShowAuth(false);
          this.authService.handleLoginSuccess(response.access_token);

          this.screenSizeSubscription = this.screenSizeService.isHandset$.subscribe((isMobile: boolean) => {
            if (isMobile) {
              this.headerService.toggleNavbar();
            }
          });
        },
        (error) => {
          this.isSubmitSuccessful = false;
          this.errorMessage = error.error.error;
        }
      );
    } else {
      // Registration logic
      this.authService.register({ email, password }).subscribe(
        (response) => {
          this.isSubmitSuccessful = true;
          this.authService.setShowAuth(false);
          this.authService.handleLoginSuccess(response.access_token); // Handle successful registration
        },
        (error) => {
          this.isSubmitSuccessful = false;
          this.errorMessage = error.error.error;
        }
      );
    }
  }

  onPasswordEyeClick() {
    this.passwordVisible = !this.passwordVisible;
  }

  onConfirmPasswordEyeClick() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
}
