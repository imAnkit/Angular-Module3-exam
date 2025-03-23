import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ManageService } from '../authentication/services/manage.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class StudentGuard implements CanActivate {
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

//     if (user && user.type === 'student') {
//       return true;
//     }

//     if (user && user.type === 'admin') {
//       return this.router.createUrlTree(['/admin']);
//     }

//     return this.router.createUrlTree(['/auth']);
//   }
// }
export const studentGuard: CanActivateFn = () => {
  const router = inject(Router);
  const manageService = inject(ManageService);

  const user = manageService.getUser();
  if (user && user.type === 'student') return true;

  return router.createUrlTree(['/auth/login']);
};
