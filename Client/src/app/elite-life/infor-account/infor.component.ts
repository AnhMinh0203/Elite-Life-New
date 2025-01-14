import { Component, HostListener, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../service/profile.service';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-profile',
  templateUrl: './infor.component.html',
  styleUrl: './infor.component.scss'
})
export class InforComponent implements OnInit {
  name?: any;
  userName?: any;
  identity?: any;
  bankNumber?:any;
  bank?: any;
  identityDate?: Date;
  bankOwner?: any;
  identityPlace?: any;
  bankBranchName?: any;
  phone: any;
  email:any;
  password: any;
  userInfo:any
  bankOptions: string[] = [];

  isChangePassword: boolean = false;
  currentPass: any;
  newPass: any;
  confirmNewPass:any;
  address: any;

  constructor(
    private messageService: MessageService,
    private _profileService: ProfileService
  ) {

  }

  ngOnInit() {
    this.userInfo = localStorage.getItem('info');
    this.loadBanks()
    this.loadProfileData();
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


  loadProfileData(): void {
    if (this.userInfo) {
      const parsedInfo = JSON.parse(this.userInfo);
      this.userName = parsedInfo.userName;

      if (this.userName) {
        this._profileService.getProfile(this.userName).subscribe({

          next: (response: any) => {
            if (response?.message === 'Success') {
              const profile = response.data;
              this.name = profile.name;
              this.userName = profile.userName;
              this.address = profile.address;
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

    }
  }


  updatePhoneNumber(){
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

  updateEmail(){
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

  showPassordForm(){
    this.isChangePassword = true;
  }

  closePassordForm(){
    this.isChangePassword = false;
  }
  changePassword() {
    const currentModel = {
      UserName: this.userName,
      Password: this.currentPass
    };

    this._profileService.checkCurrentPassword(currentModel).subscribe({
      next: (response: any) => {
        if (response?.statusCode === 400) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Mật khẩu hiện tại không chính xác'
          });
          return; // Exit if current password is incorrect
        }

        if (response?.statusCode === 500) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
          return; // Exit if there was an internal server error
        }

        // Proceed if current password is correct
        if (this.newPass !== this.confirmNewPass) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Mật khẩu mới không khớp'
          });
          return; // Exit if new passwords do not match
        }

        // Call change password API
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
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Có lỗi xảy ra khi kiểm tra mật khẩu hiện tại',
        });
      }
    });
  }
  updateProfile(){
    const model = {
      UserName: this.userName,
      Name: this.name,
      Address: this.address,
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
}
