import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector, private router: Router) {
    this.serviceUri =  `${environment.EnpointUrl}/Wallets`;
    this._http = http;
  }

  getWalletByCollaboratorId(CollaboratorId: any) {
    const apiUrl = `${this.serviceUri}/wallet-by-collaborratorId?CollaboratorId=${CollaboratorId}`;
      return this._http.get<ResponseResult>(apiUrl)
        .pipe(
          catchError((error: any) => {
            throw error;
          })
        );
  }

}
