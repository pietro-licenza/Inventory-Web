import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()

export class IsLoggedGuard implements CanActivate {
  constructor(
    private router: Router
  ) { };

  canActivate() {
    if (localStorage.getItem("inventory-token") && localStorage.getItem("inventory-token") != '') {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
