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
  visibleForgotPassword: boolean = false;
  userNameForgotPassword: any;
  visible: boolean = false;
  value: any;
  countdown: any;
  intervalId: any;
  otp: any;
  Email: any;
  newPassWord: any;
  confirmNewPassWord: any;
  hide1 = true;

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

  showForgotPassword() {
    this.visibleForgotPassword = true;
  }

  forgotPassword() {
    if(!this.userNameForgotPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng nhập mã đăng nhập',
      });
      return;
    }
    this._authenticateService.getCollaboratorByUserName(this.userNameForgotPassword ).subscribe({
      next: (response) => {
        if (response.data) {
          this.Email = response.data.email;
          this.sendOtp();
          this.visible = true;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Mã người dùng không tồn tại',
          });
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Đã xảy ra lỗi khi kiểm tra mã người dùng',
        });
      },
    });
  }

  resendCode() {
    if (this.countdown > 0) {
      return;
    }
    this.otp = this.generateOTP();
    var modelOtp = {
      email: this.Email,
      otp: this.otp,
    };
    this._authenticateService
      .sendOTPForgot(this.Email, this.otp)
      .then((res: any) => {
        if (!res.otp) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error when send OTP',
          });
          return;
        }
        this.countdown = 30;
        this.startCountdown();
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  generateOTP(): number {
    clearInterval(this.intervalId);
    const min = 100000; // Số nhỏ nhất có 6 chữ số
    const max = 999999; // Số lớn nhất có 6 chữ số
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  sendOtp() {
    this.otp = this.generateOTP();
    var modelOtp = {
      email: this.Email,
      otp: this.otp,
    };
    this._authenticateService
      .sendOTPForgot(this.Email, this.otp)
      .then((res) => {
        if (!res.otp) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error when send OTP',
          });
          return;
        }
        this.visible = true;
        this.countdown = 30;
        this.startCountdown();
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  submitOTP() {
    if (this.value == null || this.value == '' || this.value == undefined) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Phải nhập mã OTP',
      });
      return;
    }

    if (this.value != this.otp) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Mã OTP không đúng',
      });
      return;
    }

    if(this.newPassWord != this.confirmNewPassWord) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Mật khẩu không khớp',
      });
      return;
    }

    this._authenticateService.updatePassword(this.userNameForgotPassword, this.newPassWord)
      .then((res) => {
        if(res.data) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Đổi mật khẩu thành công',
          });
        }
        this.visible = false;
        this.visibleForgotPassword = false;
      })
      .catch((error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Đổi mật khẩu thất bại',
        });
      });
  }

}
