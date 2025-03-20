// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { ProfileService } from '../authentication/services/profile.service';

// export class AuthGuard implements CanActivate {
//   constructor(private profileService: ProfileService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     const user = this.profileService.getUser();

//     if (user) {
//       return true;
//     }
//     return this.router.createUrlTree(['/auth']);
//   }
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProfileService } from '../authentication/services/profile.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const profileService = inject(ProfileService);

  const user = profileService.getUser();
  if (user) return true;

  return router.createUrlTree(['/auth/login']);
};
