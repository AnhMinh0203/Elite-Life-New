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
export class AccountService {

  serviceUri: any;
  _http: HttpClient;


  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Account`;
    this._http = http;
  }

  getAllAccountsService(){
    const apiUrl = `${this.serviceUri}/Account-GetAll`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  deleteAccountService(userName: string){
    const apiUrl = `${this.serviceUri}/Account-DeleteAccount?userName=${userName}`;
    return this._http.delete<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getAccountsByRangeService(model:any){
    const apiUrl = `${this.serviceUri}/Account-GetAccountByRange`;
    return this._http.post<ResponseResult>(apiUrl,model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelAccountManagerService(model: any): Observable<any> {
    const apiUrl = `${this.serviceUri}/Account-exportExcelAccount`;
    return this._http.post(apiUrl, model, {
      responseType: 'blob', // Đảm bảo API trả về kiểu blob
      observe: 'response' // Lấy header từ API nếu cần
    });
  }
  createUserService(model: any){
    const apiUrl = `${this.serviceUri}/Account-CreateAccount`;
    return this._http.post<ResponseResult>(apiUrl,model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }
}
