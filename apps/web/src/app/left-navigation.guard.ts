import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './_services';

@Injectable({
  providedIn: 'root'
})
export class LeftNavigationGuard implements CanActivate {

  aaa = false;

  constructor(
    public router: Router,
    public authenticationService: AuthenticationService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authenticationService.leftMenuItems.pipe( map( (data: any[]) => {
        let currentPath = next.routeConfig.path;
        let ret = data.map( item => item.TYPE.toLocaleLowerCase() ).indexOf(currentPath.toLocaleLowerCase()) > -1;
        if (!ret) { this.router.navigate(['/dashboard']); }
        return ret;
      }));

  }
  
}
