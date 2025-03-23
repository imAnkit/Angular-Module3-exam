// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { manageService } from '../authentication/services/profile.service';

// export class AuthGuard implements CanActivate {
//   constructor(private manageService: manageService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     const user = this.manageService.getUser();

//     if (user) {
//       return true;
//     }
//     return this.router.createUrlTree(['/auth']);
//   }
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ManageService } from '../authentication/services/manage.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const manageService = inject(ManageService);

  const user = manageService.getUser();
  if (user) return true;

  return router.createUrlTree(['/auth/login']);
};
