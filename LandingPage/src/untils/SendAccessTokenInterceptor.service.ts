import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthenticateService } from 'src/app/pages/authentication/service/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class SendAccessTokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthenticateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && refreshToken && accessToken) {
          return this.authService.refreshToken(accessToken, refreshToken).pipe(
            switchMap((newTokens) => {
              localStorage.setItem('token', newTokens.accessToken);
              localStorage.setItem('refreshToken', newTokens.refreshToken);
              const newRequest = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newTokens.accessToken}`,
                },
              });

              return next.handle(newRequest);
            }),
            catchError((refreshError) => {
              this.authService.logout();
              return throwError(() => refreshError);
            })
          );
        }

        return throwError(() => error);
      })
    );
  }
}
