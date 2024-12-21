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
  banks: string[] = [];
  newUserName: any;

  DisplayName: any;
  Email: any;
  Parent: any;
  Identity: any;
  IdentityPlace: any;
  IdentityDate: any;
  Password: any;
  ConfirmPassword: any;
  Mobile: any;
  Bank: any;
  BankNumber: any;
  BankOwner: any;
  BankBranchName: any;
  signUpForm: any;
  signUpData: any;
  selectedFile: any;

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private _authenticateService: AuthenticateService,
    private router: Router) {

    this.checkScreenSize();
    this.signUpForm = new FormGroup({
      DisplayName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.email]),
      Mobile: new FormControl('', [Validators.required]),
      Parent: new FormControl('', [Validators.required]),
      Identity: new FormControl('', [Validators.required]),
      IdentityPlace: new FormControl('', [Validators.required]),
      IdentityDate: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      ConfirmPassword: new FormControl('', [Validators.required]),
      Bank: new FormControl('', [Validators.required]),
      BankNumber: new FormControl('', [Validators.required]),
      BankOwner: new FormControl('', [Validators.required]),
      BankBranchName: new FormControl('', [Validators.required],

      ),
    });
  }
  ngOnInit() {
    // Lấy danh sách ngân hàng khi component được khởi tạo
    this._authenticateService.getBanks().subscribe({
      next: (response) => {
        this.banks = response;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Không thể lấy danh sách ngân hàng',
        });
      },
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
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImage = e.target.result; // Cập nhật URL ảnh mới
      };

      reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
    }
  }

  nextForm() {
    if (!this.signUpForm.get('DisplayName')?.value?.trim()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng điền họ tên',
      });
      return;
    }
    if (!this.signUpForm.get('Mobile')?.value?.trim()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng điền số điện thoại',
      });
      return;
    }
    if (!this.signUpForm.get('Identity')?.value?.trim()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng điền Số CMTND/ CCCD/ Hộ chiếu',
      });
      return;
    }
    if (!this.signUpForm.get('IdentityPlace')?.value?.trim()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng điền nơi cấp',
      });
      return;
    }
    if (!this.signUpForm.get('IdentityDate')?.value) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng điền ngày cấp',
      });
      return;
    }

    if (!this.signUpForm.get('Password')?.value.trim()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng điền mật khẩu',
      });
      return;
    }
    if (!this.signUpForm.get('ConfirmPassword')?.value.trim()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng xác nhận mật khẩu',
      });
      return;
    }
    if (this.signUpForm.get('Password')?.value.trim() !== this.signUpForm.get('ConfirmPassword')?.value.trim()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Mật khẩu không khớp',
      });
      return;
    }
    const parentCode = this.signUpForm.get('Parent')?.value;
    this._authenticateService.checkParent({ UserName: parentCode }).subscribe({
      next: (response) => {
        console.log(response);
        if (response.isExistent) {
          this.currentForm = 2; // Chuyển sang form tiếp theo nếu mã người dùng tồn tại
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

  previousForm() {
    this.currentForm = 1;
  }

  signUp(): void {
    var BankId = 1 ;
    this._authenticateService.getBankId({ BankName: this.signUpForm.get('Bank')?.value }).subscribe({
      next: (response) => {
        if (response.data) {
          BankId = parseInt(response.data, 10);
        }
      },
    });

    let parentId = this.signUpForm.get('Parent')?.value;
    if (parentId && parentId.startsWith('EL')) {
      parentId = parentId.substring(2);
    }
    const parsedParentId = parseInt(parentId, 10);


    const formData = new FormData();

    formData.append('Password', this.signUpForm.get('Password')?.value);
    formData.append('DisplayName', this.signUpForm.get('DisplayName')?.value);
    formData.append('Email', this.signUpForm.get('Email')?.value);
    formData.append('Mobile', this.signUpForm.get('Mobile')?.value);
    formData.append('ApplicationType', 'Sale');
    formData.append('Identity', this.signUpForm.get('Identity')?.value);
    formData.append('IdentityPlace', this.signUpForm.get('IdentityPlace')?.value);
    formData.append('IdentityDate', this.signUpForm.get('IdentityDate')?.value.toISOString());
    formData.append('ParentId', parsedParentId.toString());
    formData.append('BankId', BankId.toString());
    formData.append('BankNumber', this.signUpForm.get('BankNumber')?.value);
    formData.append('BankOwner', this.signUpForm.get('BankOwner')?.value);
    formData.append('BankBranchName', this.signUpForm.get('BankBranchName')?.value);

    if (this.selectedFile) {
      formData.append('Avatar', this.selectedFile, this.selectedFile.name);
    }
    this.signUpData = {
      DisplayName: this.signUpForm.get('DisplayName')?.value,
      Email: this.signUpForm.get('Email')?.value,
      Mobile: this.signUpForm.get('Mobile')?.value,
      Identity: this.signUpForm.get('Identity')?.value
    };

    this._authenticateService.signUp(formData).subscribe((res: any) => {
      console.log(res);
      if (res && res.status == "Success") {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Đăng nhập thành công',
        });
        console.log("New ID: " + res.data) ;
        this.newUserName = 'EL' + res.data;
        this.currentForm = 3;
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
