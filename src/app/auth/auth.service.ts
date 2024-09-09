import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(response => {
          this.handleLoginSuccess(response.token);
        })
      );
  }

  register(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/users`, credentials)
  }

  handleLoginSuccess(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
    this.router.navigate(['/secure']);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; 
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
