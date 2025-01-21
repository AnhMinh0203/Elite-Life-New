import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Order`;
    this._http = http;
  }

  getOrderInfor(model: any) {
    const apiUrl = `${this.serviceUri}/get-order-infor`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelOrder(model: any) {
    const apiUrl = `${this.serviceUri}/export-excel-order`;
    return this._http.post(apiUrl, model, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  updateOrderDeliveryDate(model: any) {
    const apiUrl = `${this.serviceUri}/update_order_delivery_date`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  GetBillOrderInfoAsync(id: any) {
    const apiUrl = `${this.serviceUri}/get-bill-order?OrderId=${id}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getPurchaseStatistics(month: any, year: any) {
    const apiUrl = `${this.serviceUri}/get-purchase-statistics?month=${month}&year=${year}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
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

  exportExcelOrderRangeService(model: any): Observable<any> {
    const apiUrl = `${this.serviceUri}/export-excel-order-date-range`;
    return this._http.post(apiUrl, model, {
      responseType: 'blob', // Đảm bảo API trả về kiểu blob
      observe: 'response' // Lấy header từ API nếu cần
    });
  }

  updateStatusOrderService(model: any){
    const apiUrl = `${this.serviceUri}/order-updateStatus`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }


  updateNoteOrderService(model: any){
    const apiUrl = `${this.serviceUri}/order-updateNote`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }
  getNoteOrderService(orderId: number){
    const apiUrl = `${this.serviceUri}/order-getNote?orderId=${orderId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }
}
