import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { AuthenticateService } from '../service/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class AppSideRegisterComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>; // Tham chiếu đến input file

  isSmallScreen: boolean = false;
  hidePassword = true;
  hideComfirmPassword = true;
  uploadedImage: string | null = null;
  currentForm: number = 1;

  userName: any;
  email: any;
  phoneNumber: any;
  introPerson: any;
  identification: any;
  providePlace: any;
  provideDate: any;
  password: any;
  confirmPassword: any;
  bank: any;
  accountNumber: any;
  accountOwner: any;
  bankBranchName: any;
  signUpForm: any;

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private _authenticateService: AuthenticateService,
    private router: Router) {

    this.checkScreenSize();
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      introPerson: new FormControl('', [Validators.required]),
      identification: new FormControl('', [Validators.required]),
      providePlace: new FormControl('', [Validators.required]),
      provideDate: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      bank: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [Validators.required]),
      accountOwner: new FormControl('', [Validators.required]),
      bankBranch: new FormControl('', [Validators.required]),
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 1024;
  }

  // Mở file dialog lấy file ảnh
  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }
  // Xử lý file khi được chọn
  onFileChange(event: any) {
    const file: File = event.target.files[0]; // Lấy file đầu tiên
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImage = e.target.result; // Cập nhật URL ảnh mới
      };

      reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
    }
  }

  nextForm() {
    this.currentForm = 2;
  }

  previousForm() {
    this.currentForm = 1;
  }

  signUp(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Vui lòng nhập mã đăng nhập',
    });


    // Check if the form is valid
    if (this.signUpForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng điền đầy đủ thông tin',
      });
      return;
    }

    // Validate password and confirm password
    if (this.signUpForm.get('password')?.value !== this.signUpForm.get('confirmPassword')?.value) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Mật khẩu không khớp',
      });
      return;
    }
    if (this.signUpForm.passWord != this.signUpForm.confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Mật khẩu không khớp',
      });
      return;
    }

    // Prepare the data to send to the backend
    const signUpData = {
      userName: this.signUpForm.get('userName')?.value,
      email: this.signUpForm.get('email')?.value,
      phoneNumber: this.signUpForm.get('phoneNumber')?.value,
      introPerson: this.signUpForm.get('introPerson')?.value,
      Identity: this.signUpForm.get('identification')?.value,
      IdentityPlace: this.signUpForm.get('providePlace')?.value,
      provideDate: this.signUpForm.get('provideDate')?.value,
      password: this.signUpForm.get('password')?.value,
      bank: this.signUpForm.get('bank')?.value,
      BankNumber: this.signUpForm.get('accountNumber')?.value,
      BankOwner: this.signUpForm.get('accountOwner')?.value,
      BankBranchName: this.signUpForm.get('bankBranch')?.value,
      Address: "Address Abc",
      Mobile: "True",
      Permission: "User",
      DisplayName: "Abc ",
      ApplicationType: "Web"
    };

    this._authenticateService.signUp(signUpData).subscribe((res: any) => {
      if (res && res.statusCode == 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Đăng nhập thành công',
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.data,
        });
      }
    });
  }
}
