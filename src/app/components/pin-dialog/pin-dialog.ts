import { Component, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pin-dialog',
  imports: [FormsModule],
  templateUrl: './pin-dialog.html',
  styleUrl: './pin-dialog.css',
})
export class PinDialog implements OnInit{
  submitPin = output<string>();
  closeDialog = output<void>();
  pinValues = ['', '', '', '', '', ''];

    ngOnInit() {
    setTimeout(() => {
      const firstInput = document.getElementById('pin-0') as HTMLInputElement;
      firstInput?.focus();
    });
  }

  get pin(): string {
    return this.pinValues.join('');
  }

  get isPinComplete(): boolean {
    return this.pin.length === 6;
  }

  updatePin(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(0, 1);

    this.pinValues[index] = value;
    input.value = value;

    if (value && index < 5) {
      const nextInput = document.getElementById(`pin-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  }

  deletePin(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.pinValues[index] && index > 0) {
      const previousInput = document.getElementById(`pin-${index - 1}`) as HTMLInputElement;
      previousInput?.focus();
    }
  }

  enter() {
    if (!this.isPinComplete) {
      return;
    }

    this.submitPin.emit(this.pin);
  }

  close() {
    this.pinValues = ['', '', '', '', '', ''];
    this.closeDialog.emit();
  }
}