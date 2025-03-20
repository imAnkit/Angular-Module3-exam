// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { ProfileService } from '../authentication/services/profile.service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminGuard implements CanActivate {
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

//     if (user && user.type === 'admin') {
//       return true;
//     }

//     if (user && user.type === 'student') {
//       return this.router.createUrlTree(['/student']);
//     }
//     return this.router.createUrlTree(['/auth']);
//   }
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProfileService } from '../authentication/services/profile.service';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const profileService = inject(ProfileService);

  const user = profileService.getUser();
  if (user && user.type === 'admin') return true;

  return router.createUrlTree(['/auth/login']);
};
