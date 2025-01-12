import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
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

  getCollaboratorTop() {
    const apiUrl = `${this.serviceUri}/get-collaborator-top`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelAllCollaboratorTop() {
    const apiUrl = `${this.serviceUri}/export-excel-all-collaborator-top`;
    return this._http.get(apiUrl, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getAllCollaborator(model: any) {
    const apiUrl = `${this.serviceUri}/get-all-collaborator`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getAllCollaboratorRankUp(model: any) {
    const apiUrl = `${this.serviceUri}/get-all-collaborator-up`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getAllCollaboratorRankDown(model: any) {
    const apiUrl = `${this.serviceUri}/get-all-collaborator-down`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelAllCollaborator(model: any) {
    const apiUrl = `${this.serviceUri}/export-excel-all-collaborator`;
    return this._http.post(apiUrl, model, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelAllCollaboratorRank(model: any) {
    const apiUrl = `${this.serviceUri}/export-excel-all-collaborator-rank`;
    return this._http.post(apiUrl, model, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelCollaboratorIDManager(model: any) {
    const apiUrl = `${this.serviceUri}/export-excel-collaborator-id-manager`;
    return this._http.post(apiUrl, model, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  deleteCollaborator(Id: any, IdNew: any) {
    const apiUrl = `${this.serviceUri}/delete-collaborator?id=${Id}&idNew=${IdNew}`;
    return this._http.delete<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getTotalWallet() {
    const apiUrl = `${this.serviceUri}/get-total-wallet-admin`;
    return this._http.get<ResponseResult>(apiUrl)
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

  getBinaryTree() {
    const apiUrl = `${this.serviceUri}/get-collaborator-tree`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getRePackageCollaborator() {
    const apiUrl = `${this.serviceUri}/get-all-repackage-collaborator`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelRePackageCollaborator() {
    const apiUrl = `${this.serviceUri}/export-excel-all-repackage-collaborator`;
    return this._http.get(apiUrl, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getAllCollaboratorsMultiOrder() {
    const apiUrl = `${this.serviceUri}/get-all-collaborator-multi-order`;
    return this._http.get<ResponseResult>(apiUrl)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelAllCollaboratorsMultiOrder() {
    const apiUrl = `${this.serviceUri}/export-excel-all-collaborator-multi-order`;
    return this._http.get(apiUrl, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  getAllCollaboratorContract(model: any) {
    let apiUrl = `${this.serviceUri}/get-all-collaborator-contract`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  exportExcelAllCollaboratorContract(model: any) {
    let apiUrl = `${this.serviceUri}/export-excel-all-collaborator-contract`;
    return this._http.post(apiUrl, model, { responseType: 'blob' })
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }


}
