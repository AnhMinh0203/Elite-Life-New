import { Component,HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class AppSideRegisterComponent {
  isSmallScreen: boolean = false;
  hidePassword = true;
  hideComfirmPassword = true;


  constructor(private http: HttpClient) {
    this.checkScreenSize();

  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 1024;
  }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

    login(form: NgForm): void {
      if (form.invalid) {
        for (const control of Object.keys(form.controls)) {
          form.controls[control].markAsTouched();
        }
        return;
      }

    }
  get f() {
    return this.form.controls;
  }

}
