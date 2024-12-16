import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthenticateService } from '../service/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  isSmallScreen: boolean = false;
  hide = true;
  token: string|undefined;
  userName: any;
  passWord: any;
  signin: any;

  constructor(private http: HttpClient, 
    private messageService: MessageService,
    private _authenticateService: AuthenticateService,
    private router: Router) {
    this.checkScreenSize();
    this.token = undefined;
    this.signin = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      passWord: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 1024;
  }

  login(form: NgForm): void {
    if(!form.value.userName) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng nhập mã đăng nhập',
      });
      return;
    }
    if(!form.value.passWord) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng nhập mật khẩu',
      });
      return;
    }
    if(!form.value.recaptcha) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng xác nhận capcha',
      });
      return;
    }

    const model = {
      username: form.value.userName,
      password: form.value.passWord,
    }
    this._authenticateService.login(model).subscribe((res: any) => {
      if(res && res.statusCode == 200) {
        this.token = res.data;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Đăng nhập thành công',
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('refreshTokenExpiryTime', res.data.refreshTokenExpiryTime);
        localStorage.setItem('info', JSON.stringify(res.data.collaboratorDto));
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:  res.data,
        });
      }
    }
    , (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Đăng nhập thất bại',
      });
    });
  }
}
