import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApi } from '../api/auth/login';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading implements OnInit {
  username = '';
  pin = '';
  label = 'Logging In';

  constructor(
    private AuthApi :AuthApi,
    private router: Router
  ) {}

  ngOnInit() {
    const mode = history.state?.['mode'] ?? 'login';
    const isLogin = mode === 'login';
    this.label = history.state?.['label'] ?? 'Logging In';
    if (!isLogin) {
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
      return;
    }

    this.username = history.state?.['username'] ?? '';
    this.pin = history.state?.['pin'] ?? '';

    if (!this.username || !this.pin) {
      this.router.navigate(['/login']);
      return;
    }

    this.AuthApi.login(this.username, this.pin).subscribe({
      next: (response) => {
        console.log('Login success:', response);
        this.router.navigate(['/dashboard'], {
          state: {
            user: response,
          },
        });
      },
      error: () => {
        this.router.navigate(['/login'], {
          state: {
            loginError: true,
          },
        });
      },
    });
  }
}
