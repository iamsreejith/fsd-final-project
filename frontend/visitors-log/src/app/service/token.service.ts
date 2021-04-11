import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: any,next: any){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        setHeader:{
          Authorization: `Bearer ${authService.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq)
  }
}
