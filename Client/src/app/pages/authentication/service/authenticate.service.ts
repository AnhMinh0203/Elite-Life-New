import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseResult } from 'src/untils/response-result';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  serviceUri: any;
  _http: HttpClient;

  constructor(http: HttpClient, injector: Injector) {
    this.serviceUri =  `${environment.EnpointUrl}/Authenticate`;
    this._http = http;

  }

  login(model: any) {
    const apiUrl = `${this.serviceUri}/login`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  signUp(model:any){
    const apiUrl = `${this.serviceUri}/register`;
    return this._http.post<ResponseResult>(apiUrl, model)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }

  refreshToken(accessToken: string, refreshToken: string): Observable<{ accessToken: string; refreshToken: string }> {
    const payload = {
      accessToken,
      refreshToken,
    };

    return this._http.post<{ accessToken: string; refreshToken: string }>(
      '/Authenticate/refresh-token',
      payload
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('refreshTokenExpiryTime');
    localStorage.removeItem('info');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return !this.isTokenExpired(token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) return token;
    return '';
  }

  isTokenExpired(token: string): boolean {
    const decodedToken: any = jwtDecode(token);
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);

    return expirationDate.valueOf() < new Date().valueOf();
  }

}
