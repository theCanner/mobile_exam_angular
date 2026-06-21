import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

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
  private socials$?: Observable<Social[]>;

  constructor(private http: HttpClient) {}

  getSocials(): Observable<Social[]> {
    this.socials$ ??= this.http.get<Social[]>(`${this.apiUrl}/socials`, {
        headers: {
          CLIENT_ID: 'rgbexam',
        },
      }).pipe(shareReplay(1));

    return this.socials$;
  }
}
