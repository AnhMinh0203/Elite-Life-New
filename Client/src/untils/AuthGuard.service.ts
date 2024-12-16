import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/pages/authentication/service/authenticate.service';

export const AuthGuardService: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticateService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigateByUrl("/authentication/login");
    return false;
  }
  return true;
};
