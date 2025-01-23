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
export class OrderService {

  serviceUri: any;
  _http: HttpClient;


  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri = `${environment.EnpointUrl}/Order`;
    this._http = http;
  }

  getWalletHistory(model: any) {
    const apiUrl = `${this.serviceUri}/get-WalletHistory`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  createWithdrawHistory(model: any) {
    const apiUrl = `${this.serviceUri}/create-WithdrawHistory`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  placeOrderService(model:any){
    const apiUrl = `${this.serviceUri}/place-order`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  caculateShareCommissionService(model: any){
    const apiUrl = `${this.serviceUri}/caculate-shareCommission`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  caculateGratitudeCommissionService(model: any){
    const apiUrl = `${this.serviceUri}/caculate-gratitudeCommission`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  caculateIntroCommissionService(model: any){
    const apiUrl = `${this.serviceUri}/caculate-introCommission`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  caculateLeaderCommissionService(model: any){
    const apiUrl = `${this.serviceUri}/caculate-leaderCommission`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getOrderHistoryService(collaboratorId: number){
    const apiUrl = `${this.serviceUri}/get-orderHistory?collaboratorId=${collaboratorId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getWarehouseService(){
    const apiUrl = `${this.serviceUri}/get-warehouse`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  checkRankService(collaboratorId: number){
    const apiUrl = `${this.serviceUri}/check-rank?collaboratorId=${collaboratorId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getOrderByRangeDateService(model:any){
    const apiUrl = `${this.serviceUri}/get-order-by-rangeDate`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getOrderPendingByRangeDateService(model:any){
    const apiUrl = `${this.serviceUri}/get-order-pending-by-rangeDate`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getOrderApprovedByRangeDateService(model:any){
    const apiUrl = `${this.serviceUri}/get-order-approve-by-rangeDate`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelOrderRangeService(model: any): Observable<any> {
    const apiUrl = `${this.serviceUri}/export-excel-order-date-range`;
    return this._http.post(apiUrl, model, {
      responseType: 'blob', // Đảm bảo API trả về kiểu blob
      observe: 'response' // Lấy header từ API nếu cần
    });
  }
}
