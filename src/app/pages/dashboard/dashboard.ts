import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Social, SocialApi, User } from '../api/dashboard/social-api';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  socials = signal<Social[]>([]);
  isLoadingSocials = signal(true);

  user: User | null = null;

  username = '';
  sessionId = '';
  profilePicture = '';
  showLogoutDialog = false;

  constructor(
    private SocialApi : SocialApi,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = history.state?.['user'] ?? null;
    this.username = this.user?.userName ?? 'Guest';
    this.sessionId = this.user?.userId ?? '';
    this.profilePicture = this.user?.profilePicture ?? '/exam_assets/avatar.png';

    this.SocialApi.getSocials().subscribe({
      next: (socials) => {
        this.socials.set(socials);
        this.isLoadingSocials.set(false);
      },
      error: (error) => {
        console.log('Failed to load socials:', error);
        this.isLoadingSocials.set(false);
      },
    });
  }

  openLogoutDialog() {
    this.showLogoutDialog = true;
  }

  closeLogoutDialog() {
    this.showLogoutDialog = false;
  }

  logout() {
    this.showLogoutDialog = false;
    this.router.navigate(['/loading'], {
      state: {
        mode: 'logout',
        label: 'Logging Out',
      },
    });
  }

  openSocial(social: Social) {
    this.router.navigate(['/dashboard/socials'], {
      state: {
        social,
        user: this.user,
      },
    });
  }

  openOthers() {
    this.router.navigate(['/dashboard/others'], {
      state: {
        user: this.user,
      },
    });
  }
}
