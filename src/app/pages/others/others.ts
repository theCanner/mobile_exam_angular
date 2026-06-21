import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CustomButton } from '../../components/custom-button/custom-button';

type Brand = {
  name: string;
  imageUrl: string;
  webUrl: string;
};

@Component({
  selector: 'app-others',
  imports: [CustomButton],
  templateUrl: './others.html',
  styleUrl: './others.css',
})
export class Others implements OnInit, OnDestroy {
  brands: Brand[] = [
    {
      name: 'Samsung',
      imageUrl: '/assets/samsung.png',
      webUrl: 'https://www.samsung.com/',
    },
    {
      name: 'Apple',
      imageUrl: '/assets/apple.png',
      webUrl: 'https://www.apple.com/',
    },
    {
      name: 'Windows',
      imageUrl: '/assets/windows.png',
      webUrl: 'https://www.microsoft.com/windows/',
    },
  ];

  activeIndex = signal(0);
  private autoplayId?: ReturnType<typeof setInterval>;

  constructor(private location: Location) {}

  ngOnInit() {
    this.autoplayId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngOnDestroy() {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
    }
  }

  get activeBrand(): Brand {
    return this.brands[this.activeIndex()];
  }

  get carouselTransform(): string {
    return `translateX(calc(8% - ${this.activeIndex() * 84}%))`;
  }

  goBack() {
    this.location.back();
  }

  nextSlide() {
    this.activeIndex.update((index) => (index + 1) % this.brands.length);
  }

  previousSlide() {
    this.activeIndex.update((index) =>
      index === 0 ? this.brands.length - 1 : index - 1
    );
  }

  visitWebsite() {
    window.open(this.activeBrand.webUrl, '_blank', 'noopener,noreferrer');
  }
}
