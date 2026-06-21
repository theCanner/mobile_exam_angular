import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type LoginResponse = {
  data?: unknown;
  message?: string;
  error?: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private readonly apiUrl = '/api/v1';
  private readonly clientId = 'rgbexam';

  constructor(private http: HttpClient) {}

  login(userName: string, otp: string): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      CLIENT_ID: this.clientId,
    });

    const body = {
      userName,
      otp,
    };

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      body,
      { headers }
    );
  }
}
