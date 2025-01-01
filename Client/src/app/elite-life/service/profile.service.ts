import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  serviceUri: any;
  _http: HttpClient;


  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Profile`;
    this._http = http;
  }

  getProfile(UserName: string){
    const apiUrl = `${this.serviceUri}/getProfile?UserName=${UserName}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getBanks(){
    const apiUrl = `${this.serviceUri}/profile-getBanks`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  updateContactInfor(model:any){
    const apiUrl = `${this.serviceUri}/profile-updateContactInfo`;
    return this._http.post<ResponseResult>(apiUrl,model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  checkCurrentPassword(model:any){
    const apiUrl = `${this.serviceUri}/profile-checkCurrentPassword`;
    return this._http.post<ResponseResult>(apiUrl,model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  changePassword(model:any){
    const apiUrl = `${this.serviceUri}/profile-changePassword`;
    return this._http.post<ResponseResult>(apiUrl,model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  updateProfile(model:any){
    const apiUrl = `${this.serviceUri}/profile-update`;
    return this._http.post<ResponseResult>(apiUrl,model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }
}
