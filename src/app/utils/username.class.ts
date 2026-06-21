import { AbstractControl } from '@angular/forms';

export function getInputClass(control: AbstractControl | null): string {
  if (control?.touched && control.invalid) {
    return 'border-red-500 focus:border-red-500 focus:ring-0';
  }

  return 'border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500';
}