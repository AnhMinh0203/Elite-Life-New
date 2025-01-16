import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccountService } from '../service/account.service';
import { ProfileService } from '../service/profile.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrl: './account-manager.component.scss'
})
export class AccountManagerComponent {
  rangeDates: any;
  test: any;
  isPermissionExport: boolean = true;
  dataAccounts: any;

  isChangePassword: any;
  newPass: any;
  confirmNewPass: any;
  name: any;
  userName: any;
  identity: any;
  bankNumber: any;
  bankOptions: any;
  bank: any;
  identityDate: any;
  bankBranchName: any;
  identityPlace: any;
  bankOwner: any;
  phone: any;
  email: any;
  isShowForm: boolean = false;
  isCreateMode: boolean = true;
  selectMember: any;
  startDate: any;
  endDate: any;

  constructor(
    private datePipe: DatePipe,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private _profileService: ProfileService,
    private _accountService: AccountService
  ) { }

  ngOnInit() {
    this.getAllAccounts();
  }



  getAllAccounts() {
    this._accountService.getAllAccountsService().subscribe(
      (response: any) => {
        this.dataAccounts = response.data;
      },
      (error: any) => {
        console.log(error);
      });
  }

  showUpdateForm(customer: any) {
    this.loadProfileData(customer);
    this.loadBanks();
    this.isShowForm = true;
    this.isCreateMode = false;
  }

  loadProfileData(customer: any) {
    this._profileService.getProfile(customer.userName).subscribe({

      next: (response: any) => {
        if (response?.message === 'Success') {
          const profile = response.data;
          this.name = profile.name;
          this.userName = profile.userName;
          this.identity = profile.identity;
          this.bank = profile.bank;
          this.bankNumber = profile.bankNumber;
          this.bankOwner = profile.bankOwner;
          this.identityPlace = profile.identityPlace;
          this.bankBranchName = profile.bankBranchName;
          this.identityDate = profile.identityDate
            ? new Date(profile.identityDate)
            : undefined;
          this.phone = profile.mobile;
          this.email = profile.email;
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load profile data.' });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while loading profile data.' });
        console.error(err);
      },
    });
  }

  showPassordForm() {
    this.isChangePassword = true;
  }

  changePassword() {
    const newModel = {
      UserName: this.userName,
      Password: this.newPass
    };

    this._profileService.changePassword(newModel).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Có lỗi xảy ra khi thay đổi mật khẩu',
        });
      }
    });
  }
  closePassordForm() {
    this.isChangePassword = false;
  }
  updateProfile() {
    const model = {
      UserName: this.userName,
      Name: this.name,
      Identity: this.identity,
      BankNumber: this.bankNumber,
      Bank: this.bank,
      IdentityDate: this.identityDate ? new Date(this.identityDate).toLocaleDateString('en-CA') : null,
      BankOwner: this.bankOwner,
      IdentityPlace: this.identityPlace,
      BankBranchName: this.bankBranchName
    }
    this._profileService.updateProfile(model).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });

          setTimeout(() => { location.reload() }, 1000);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: (error: any) => {
        // Error handling
        console.error('An error occurred while updating contact information:', error);
      }
    });
  }
  updatePhoneNumber() {
    const model = {
      UserName: this.userName,
      Email: '',
      PhoneNumber: this.phone
    }
    this._profileService.updateContactInfor(model).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: (error: any) => {
        // Error handling
        console.error('An error occurred while updating contact information:', error);
      }
    });
  }

  loadBanks() {
    this._profileService.getBanks().subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.bankOptions = response.data;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Lỗi khi hiển thị ngân hàng',
          });
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Có lỗi xảy ra khi tải dữ liệu',
        });
        console.error(err);
      },
    });
  }

  updateEmail() {
    const model = {
      UserName: this.userName,
      Email: this.email,
      PhoneNumber: ''
    }
    this._profileService.updateContactInfor(model).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: (error: any) => {
        // Error handling
        console.error('An error occurred while updating contact information:', error);
      }
    });
  }

  deleteAccount(userName: string) {

    this._accountService.deleteAccountService(userName).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
          this.getAllAccounts();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: (error: any) => {
        // Error handling
        console.error('An error occurred while deleting account:', error);
      }
    });
  }

  onDateChange(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = this.datePipe.transform(startDate, 'dd/MM/yyyy');
      this.endDate = this.datePipe.transform(endDate, 'dd/MM/yyyy');
      if (this.startDate && this.endDate) {
        this.getAccountRange();
      }
    }
  }
  getAccountRange() {
    var model = {
      startDate: this.startDate,
      endDate: this.endDate
    }

    this._accountService.getAccountsByRangeService(model).subscribe(
      (response: any) => {
        this.dataAccounts = response.data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  exportExcelWalletHistory() {
    if (this.startDate && this.endDate) {
      const model = {
        StartDate: this.startDate,
        EndDate: this.endDate
      };

      this._accountService.exportExcelAccountManagerService(model).subscribe({
        next: (response: HttpResponse<Blob>) => {
          if (response.body) {
            const blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);

            // Tạo thẻ <a> để tải file
            const a = document.createElement('a');
            a.href = url;

            // Đọc tên file từ header hoặc đặt tên mặc định
            const fileNameFromResponse = response.headers?.get('fileName') || 'Export_Account_User.xlsx';

            // Lấy ngày giờ hiện tại và định dạng
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD
            const formattedTime = currentDate.toTimeString().slice(0, 8).replace(/:/g, '-'); // HH-MM-SS

            // Tạo tên file với hậu tố ngày và giờ
            const fileName = `${fileNameFromResponse.split('.')[0]}_${formattedDate}_${formattedTime}.xlsx`;
            a.download = fileName;

            // Kích hoạt tải file
            a.click();

            // Hủy URL sau khi sử dụng
            window.URL.revokeObjectURL(url);

          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Không nhận được dữ liệu từ server'
            });
          }
        },
        error: (err) => {
          console.error('Error downloading file:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Lỗi khi tải xuống file Excel'
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vui lòng chọn thời gian'
      });
    }
  }

  resetForm() {
    this.name = '';
    this.userName = '';
    this.identity = '';
    this.bankNumber = '';
    this.bank = '';
    this.bankOwner = '';
    this.identityPlace = '';
    this.bankBranchName = '';
    this.identityDate = '';
    this.phone = '';
    this.email = '';
  }

  createUserForm() {
    this.resetForm();
    this.loadBanks();
    this.isCreateMode = true;
    this.isShowForm = true;
  }

  createNewUser() {
    // Kiểm tra nếu identityDate không phải là null và chuyển đổi sang dạng Date
    const identityDateFormatted = this.identityDate && this.identityDate.value ? new Date(this.identityDate.toLocaleDateString('en-CA')) : null;

    const user = {
      name: this.name,
      userName: this.userName,
      identity: this.identity,
      bankNumber: this.bankNumber,
      bank: this.bank,
      identityDate: identityDateFormatted,  // Đảm bảo giá trị hợp lệ
      bankBranchName: this.bankBranchName,
      identityPlace: this.identityPlace,
      bankOwner: this.bankOwner,
      phone: this.phone,
      email: this.email,
      password: this.newPass
    };

    this._accountService.createUserService(user).subscribe(
      (response: any) => {
        if (response && response.statusCode === 200) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User created successfully.' });
          this.isShowForm = false;
          this.getAllAccounts(); // Refresh account list
        } else {
          // Nếu không có statusCode 200, bạn có thể thông báo lỗi từ response
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create user.' });
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        // Thông báo lỗi khi có vấn đề với request
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while creating user.' });
      }
    );
  }

  createPassword(){
    if (this.newPass === this.confirmNewPass) {
      this.isChangePassword = false;
    } else {
      // Toast thông báo lỗi
      this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Mật khẩu xác nhận không khớp!' });
      console.error('Passwords do not match!');
    }
  }

}
