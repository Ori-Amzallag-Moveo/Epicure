import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  isLoginVisible: boolean = true;
  isLoginSuccessful: boolean = true;
  passwordVisible: boolean = false;
  passwordFieldType: string = 'password';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoginVisible = true;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login({ email: this.email, password: this.password }).subscribe(
        success => {
          this.isLoginSuccessful = true;
          this.isLoginVisible = false;
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Login failed', error);
          this.isLoginSuccessful = false;
        }
      );
    }
  }

  onEyeClick() {
    this.passwordVisible = !this.passwordVisible;
    this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
  }

  goToRegister() {
    this.router.navigate(['/register'])
  }
}
