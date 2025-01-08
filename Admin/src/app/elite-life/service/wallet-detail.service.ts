import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class WalletDetailService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/WalletDetail`;
    this._http = http;
  }

  getCommissionByCollaboratorId(id: any, type?: any) {
    let apiUrl = `${this.serviceUri}/get-value-commission?CollaboratorId=${id}`;
    if(type == 1 || type == 2) {
      apiUrl = `${this.serviceUri}/get-value-commission?CollaboratorId=${id}&type=${type}`;
    }
        return this._http.get<ResponseResult>(apiUrl)
          .pipe(
            catchError((error: any) => {
              throw error;
            })
          );
  }

  getWalletDetailAdmin(date: any, type: any) {
    let apiUrl = `${this.serviceUri}/get-value-admin?date=${date}&type=${type}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportWalletDetailAdmin(date: any, type: any) {
    let apiUrl = `${this.serviceUri}/export-excel-value-admin?date=${date}&type=${type}`;
    return this._http.get(apiUrl, {responseType: 'blob'})
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getWalletDetailReportAdmin(date: any, type: any) {
    let apiUrl = `${this.serviceUri}/get-value-report-admin?date=${date}&type=${type}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

}
