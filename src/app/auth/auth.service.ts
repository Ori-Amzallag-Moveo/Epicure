import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  private showAuthSource = new BehaviorSubject<boolean>(true);
  showAuth$ = this.showAuthSource.asObservable();

  private isLoginModeSource = new BehaviorSubject<string>('login');
  isLoginMode$ = this.isLoginModeSource.asObservable();

  setShowAuth(show: boolean) {
    this.showAuthSource.next(show);
  }

  setLoginMode(mode: 'login' | 'register') {
    this.isLoginModeSource.next(mode);
  }

  login(user: {
    email: string;
    password: string;
  }): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(
      `${this.apiUrl}/auth/login`,
      user
    );
  }

  register(credentials: {
    email: string;
    password: string;
  }): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(
      `${this.apiUrl}/users`,
      credentials
    );
  }

  handleLoginSuccess(token: string): void {
    localStorage.setItem('authToken', token);
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getAuthHeaders(): { Authorization: string } {
    const token = this.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  logout () {
    localStorage.removeItem('authToken')
  }
} 
