import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Permission`;
    this._http = http;
  }

  getAllPermission() {
    const apiUrl = `${this.serviceUri}/get-all-permissions`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  addPermission(model: any) {
    const apiUrl = `${this.serviceUri}/add-permission`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  updatePermission(model: any) {
    const apiUrl = `${this.serviceUri}/update-permission`;
    return this._http.put<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  deletePermission(id: any) {
    const apiUrl = `${this.serviceUri}/delete-permission/${id}`;
    return this._http.delete<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getRolePermission() {
    const apiUrl = `${this.serviceUri}/get-role-with-permissions`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  addRolePermission(model: any) {
    const apiUrl = `${this.serviceUri}/add-role-with-permissions`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  updateRolePermission(model: any) {
    const apiUrl = `${this.serviceUri}/update-role-with-permissions`;
    return this._http.put<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  deleteRolePermission(id: any) {
    const apiUrl = `${this.serviceUri}/delete-role-with-permissions/${id}`;
    return this._http.delete<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getPermissionByRole(id: any) {
    const apiUrl = `${this.serviceUri}/get-permissions-for-role/${id}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

}
