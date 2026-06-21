import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  imports: [NgClass],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css',
})
export class CustomButton {
  label = input.required<string>();
  disabled = input(false);
  buttonClass = input('bg-green-600');
  buttonClick = output<void>();
}
