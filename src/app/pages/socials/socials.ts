import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Social } from '../api/dashboard/social-api';

@Component({
  selector: 'app-socials',
  imports: [],
  templateUrl: './socials.html',
  styleUrl: './socials.css',
})
export class Socials implements OnInit {
  social: Social | null = null;

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.social = history.state?.['social'] ?? null;
  }

  get displayHistory(): string {
    const history = this.social?.history ?? '';
    const compactHistory = history.split(/\s+YouTube allows/i)[0].trim();

    return compactHistory || history;
  }

  get socialColor(): string {
    switch (this.social?.name.toLowerCase()) {
      case 'youtube':
        return '#f44336';
      case 'spotify':
        return '#4caf50';
      case 'facebook':
        return '#2196f3';
      default:
        return '#2563eb';
    }
  }

  goBack() {
    this.location.back();
  }

  openWebsite() {
    if (!this.social?.webUrl) {
      return;
    }
    console.log(this.socialColor);
    this.router.navigate(['/dashboard/browser'], {
      state: {
        title: this.social.name,
        url: this.social.webUrl,
        headerColor: this.socialColor,
      },
    });
  }
}
