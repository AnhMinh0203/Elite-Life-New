import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  serviceUri: any;
  _http: HttpClient;


  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri = `${environment.EnpointUrl}/Withdrawal`;
    this._http = http;
  }

  withDrawMoney(UserName: string) {
    const apiUrl = `${this.serviceUri}/Wallet-withDraw?UserName=${UserName}`;
    return this._http.post<ResponseResult>(apiUrl, UserName)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }
  getBanks() {
    const apiUrl = `${this.serviceUri}/Wallet-getBanks`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getCollaboratorId(userName: string) {
    const apiUrl = `${this.serviceUri}/Wallet-getCollaboratorId?userName=${userName}`;
    return this._http.post<ResponseResult>(apiUrl, { userName })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  requestWithDrawMoney(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-requestWithdraw`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getWalletHistory(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-getWalletHistory`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getWalletByType(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-getWalletByType`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getWalletClients() {
    const apiUrl = `${this.serviceUri}/Wallet-getWalletClients`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  withdrawCommissionRequest(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-withdrawCommissionRequest`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  createWithdrawHistory(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-createWithdrawHistory`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelWalletHistoryService(model: any): Observable<any> {
    const apiUrl = `${this.serviceUri}/Wallet-exportExcelWalletHistory`;
    return this._http.post(apiUrl, model, {
      responseType: 'blob', // Đảm bảo API trả về kiểu blob
      observe: 'response' // Lấy header từ API nếu cần
    });
  }

  transferMoneyService(model:any){
    const apiUrl = `${this.serviceUri}/Wallet-transferMoney`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }
}
