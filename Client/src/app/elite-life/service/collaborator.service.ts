import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Collaborator`;
    this._http = http;
  }

  getCollaboratorByParentId(CollaboratorId: any) {
    const apiUrl = `${this.serviceUri}/get-collaborator-by-parentId?CollaboratorId=${CollaboratorId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getCollaboratorById(CollaboratorId: any) {
    const apiUrl = `${this.serviceUri}/get-collaborator-by-id?CollaboratorId=${CollaboratorId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelCollaboratorByParentId(CollaboratorId: any) {
    const apiUrl = `${this.serviceUri}/export-excel-collaborator-by-parentId?CollaboratorId=${CollaboratorId}`;
    return this._http.get(apiUrl, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getAllCollaboratorByParentId(model: any) {
    const apiUrl = `${this.serviceUri}/get-all-collaborator-by-parentId`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelAllCollaboratorByParentId(model: any) {
    const apiUrl = `${this.serviceUri}/export-excel-all-collaborator-by-parentId`;
    return this._http.post(apiUrl, model, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getCollaboratorSystemTree(CollaboratorId: any) {
    const apiUrl = `${this.serviceUri}/get-collaborator-system-manager?CollaboratorId=${CollaboratorId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getTotalValueWithLevel(CollaboratorId: any) {
    const apiUrl = `${this.serviceUri}/get-total-value-with-level?inputId=${CollaboratorId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getCollaboratorsContractManager(CollaboratorId: any) {
    const apiUrl = `${this.serviceUri}/get-collaborator-contract-manager?CollaboratorId=${CollaboratorId}`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  saveSignature(model: any) { 
    const apiUrl = `${this.serviceUri}/save-signature`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getContractPdf(fileName: string): Observable<Blob> {
    const apiUrl = `${this.serviceUri}/get-contract-pdf/${fileName}`;
    return this._http.get(apiUrl, { responseType: 'blob' }); // Đặt responseType là 'blob'
  }

  getContractSign(fileName: string): Observable<Blob> {
    const apiUrl = `${this.serviceUri}/get-contract-sign/${fileName}`;
    return this._http.get(apiUrl, { responseType: 'blob' }); // Đặt responseType là 'blob'
  }

}
