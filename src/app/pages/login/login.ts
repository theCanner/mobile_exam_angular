import { Component } from '@angular/core';
import { CustomButton } from '../../components/custom-button/custom-button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { usernameValidators } from '../../utils/username.validators';
import { NgClass } from '@angular/common';
import { getInputClass } from '../../utils/username.class';
import { PinDialog } from '../../components/pin-dialog/pin-dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CustomButton,NgClass,PinDialog],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  showPinDialog = false;
  constructor(private router: Router) {}
  username = new FormControl("",usernameValidators);
  usernameInputClass = getInputClass;
  openPinDialog() {
    this.showPinDialog = true;
  }
    closePinDialog() {
    this.showPinDialog = false;
  }

  submitPin(pin: string) {
      this.showPinDialog = false;

      this.router.navigate(['/loading'], {
        state: {
          username: this.username.value,
          pin: pin,
        },
      });
    }
}
