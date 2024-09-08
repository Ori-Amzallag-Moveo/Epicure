
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  isLoginVisible: boolean = true; 
  isLoginSuccessful: boolean = true;
  isLoginState: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoginSuccessful = true;
    this.isLoginVisible = true;
  }

  onSubmit(form: NgForm) {
    if(this.isLoginState) {
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
    } else {
      this.authService.register({ email: this.email, password: this.password }).subscribe(
        success => {
          this.isLoginState = true;
        },
        error => {
          console.error('Register failed', error);
          this.isLoginSuccessful = false;
        }
      );
    }

  }

  onRegister() {
    if (this.isLoginState) {
      this.isLoginState = false;
    } else {
      this.isLoginState = true;
    }
  }
}
