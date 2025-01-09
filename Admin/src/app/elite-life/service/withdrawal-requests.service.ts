import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalRequestsService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Withdrawal`;
    this._http = http;
  }

  getProcessingWithdrawalRequests(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-getProcessingWithdrawalRequests`;
      return this._http.post<ResponseResult>(apiUrl, model)
        .pipe(
          catchError((error: any) => {
            throw error;
          })
        );
  }

  ApproveWithdrawalRequest(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-approveWithdrawal`;
      return this._http.post<ResponseResult>(apiUrl, model)
        .pipe(
          catchError((error: any) => {
            throw error;
          })
        );
  }

  RejectWithdrawalRequest(model: any) {
    const apiUrl = `${this.serviceUri}/Wallet-rejectWithdrawal`;
      return this._http.post<ResponseResult>(apiUrl, model)
        .pipe(
          catchError((error: any) => {
            throw error;
          })
        );
  }

}
