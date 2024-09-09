import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isRegisterVisible: boolean = true;
  isRegisterSuccessful: boolean = true;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isRegisterVisible = true;
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.password === this.confirmPassword) {
      this.authService.register({ email: this.email, password: this.password }).subscribe(
        success => {
          this.isRegisterSuccessful = true;
          this.isRegisterVisible = false;
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Registration failed', error);
          this.isRegisterSuccessful = false;
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
    this.confirmPasswordFieldType = this.confirmPasswordVisible ? 'text' : 'password';
  }
  
  goToLogin() {
    this.router.navigate(['/']);
  }
}
