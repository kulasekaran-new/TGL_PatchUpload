import { Injectable,Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from "../app/_services/local-storage.service";
import { AuthenticationService } from './_services/authentication.service';
import { HeaderService } from './_services/header.service';
import { map, switchMap } from 'rxjs/operators';
import { AppStateService } from './_services/app-state.service';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
  constructor ( private router:Router,private localStorageService:LocalStorageService,
    public _activatedroute: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private headerService: HeaderService,
    private appStateService: AppStateService,
    private cookieservice:CookieService,
    @Inject(DOCUMENT) private document: Document){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let dsr =  next.queryParams.dsr;
      if(dsr == 'Y'){
        localStorage.clear();
      }
      //alert(this.cookieservice.get("cookie_token"))
      if(this.cookieservice.get("cookie_token") != null && this.cookieservice.get("cookie_token") != "")
      {
          const jwtToken = this.localStorageService.getItem("jwtToken");
          let id = next.queryParams.id
          let token = next.queryParams.token
          if(jwtToken != null)
          {
            return true;
          } 
          else if ( id && token ) 
          {
            return this.log(id, token);
          } 
          else
          {
            this.document.location.href = 'http://www.freightsystems.com';
            return false;
          }
      }
      else
      {
        this.document.location.href = 'http://www.freightsystems.com';
        return false;
      }
      
  }

  canDeactivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;

  }

  log(id:string,auth_token:string)
  {
    return this.authenticationService.getJwtToken(id,auth_token).then(
      (response)=>
      {
        if(response.Token != "")
        {
          this.authenticationService.login(response.Token);
          return this.authenticationService
              .refreshToken()
              .pipe(
                switchMap((userData) => {
                  return this.headerService.getProfile(
                    userData.Token
                  );
                })
              )
              .pipe( map((response: any) => {
                this.localStorageService.setItem('username', response.name);
                this.localStorageService.setItem('profile', response);
                console.log(response.our_employee);
                this.appStateService.logedIn.next(true);
                return true;
              })).toPromise();
        }
        else
        {
          this.document.location.href = 'http://www.freightsystems.com';
        }
      }
      );
  }
}
