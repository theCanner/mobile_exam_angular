import { Component,OnInit } from '@angular/core';
import { CustomButton } from '../../components/custom-button/custom-button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { usernameValidators } from '../../utils/username.validators';
import { NgClass } from '@angular/common';
import { getInputClass } from '../../utils/username.class';
import { PinDialog } from '../../components/pin-dialog/pin-dialog';
import { Router } from '@angular/router';
import { AlertDialog } from '../../components/alert-dialog/alert-dialog';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CustomButton,NgClass,PinDialog,AlertDialog],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  showPinDialog = false;
  constructor(private router: Router) {}
  username = new FormControl("",usernameValidators);
  usernameInputClass = getInputClass;
  showLoginError = false;

  ngOnInit() {
    this.showLoginError = history.state?.['loginError'] ?? false;
  }


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

    closeLoginError() {
    this.showLoginError = false;
  }
}
