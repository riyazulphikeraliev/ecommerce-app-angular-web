import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return inject(AuthService).isLoggedIn();
// };
@Injectable({
  providedIn:'root',
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,
    private router:Router){

  }
  canActivate():boolean{
    if(this.authService.getToken()){
      return true;
    } else{
      this.router.navigateByUrl('login')
      return false;
    }
  }
}
