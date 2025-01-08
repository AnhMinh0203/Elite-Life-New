import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Warehouse`;
    this._http = http;
  }

  getAll() {
    const apiUrl = `${this.serviceUri}/get-warehouse`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelWarehouse() {
    const apiUrl = `${this.serviceUri}/export-excel-warehouse`;
    return this._http.get(apiUrl, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
    }
  
  add(model: any) {
    const apiUrl = `${this.serviceUri}/add-warehouse`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  update(model: any) {
    const apiUrl = `${this.serviceUri}/update-warehouse`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  delete(id: any) {
    const apiUrl = `${this.serviceUri}/delete-warehouse/${id}`;
    return this._http.delete<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  search(search: any) {
    const apiUrl = `${this.serviceUri}/search-warehouse/${search}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

}
