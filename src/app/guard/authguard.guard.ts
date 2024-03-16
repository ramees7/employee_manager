import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

export const authguardGuard: CanActivateFn = () => {
  const admin=inject(AdminService)
  const toastr=inject(ToastrService)
  const router=inject(Router)
  if(admin.isLoggedIn()){
    return true;
  }
  else{
    toastr.warning("Operation Denied......... Please login!")
    router.navigateByUrl("/")
    return false
  }
};
