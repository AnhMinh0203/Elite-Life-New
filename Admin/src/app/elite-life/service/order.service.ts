import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
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

}
