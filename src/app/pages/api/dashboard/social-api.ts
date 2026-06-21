import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Social = {
  name: string;
  history: string;
  iconUrl: string;
  imgUrl: string;
  webUrl: string;
  headerColor: string;
};

export type User = {
  userId:string,
  userName:string,
  loginStatus:string,
  profilePicture:string,
}

@Injectable({
  providedIn: 'root',
})
export class SocialApi {
  private readonly apiUrl = '/api/v1';

  constructor(private http: HttpClient) {}

  getSocials(): Observable<Social[]> {
    return this.http.get<Social[]>(`${this.apiUrl}/socials`, {
      headers: {
        CLIENT_ID: 'rgbexam',
      },
    });
  }
}
