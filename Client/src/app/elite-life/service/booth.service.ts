import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class BoothService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Booth`;
    this._http = http;
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this._http.post(`${this.serviceUri}/upload-image`, formData);
  }
  getImage(fileName: string): Observable<Blob> {
    return this._http.get(`${this.serviceUri}/get/${fileName}`, {
      responseType: 'blob',
    });
  }

  deleteImage(fileName: any) : Observable<any> {
    return this._http.delete(`${this.serviceUri}/delete-image/${fileName}`);
  }

  addBooth(model: any) {
    const apiUrl = `${this.serviceUri}/add-booth`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getBooths() {
    const apiUrl = `${this.serviceUri}/get-booths`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  updateBooth(model: any) {
    const apiUrl = `${this.serviceUri}/update-booth`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  deleteBooth(id: any) {
    const apiUrl = `${this.serviceUri}/delete-booth/${id}`;
    return this._http.delete<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

}
