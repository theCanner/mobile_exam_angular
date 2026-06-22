import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-browser',
  imports: [],
  templateUrl: './browser.html',
  styleUrl: './browser.css',
})
export class Browser implements OnInit {
  title = 'Website';
  headerColor = 'bg-yellow-400';
  url = '';
  safeUrl: SafeResourceUrl | null = null;

  constructor(
    private location: Location,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.title = history.state?.['title'] ?? 'Website';
    this.headerColor = history.state?.['headerColor'] ?? 'bg-yellow-400';
    this.url = history.state?.['url'] ?? '';

    if (this.url) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }

  goBack() {
    this.location.back();
  }
}
