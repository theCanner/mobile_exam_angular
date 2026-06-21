import { Validators } from '@angular/forms';

export const usernameValidators = [
  Validators.required,
  Validators.maxLength(24),
  Validators.pattern(/^[a-zA-Z0-9]+$/),
];