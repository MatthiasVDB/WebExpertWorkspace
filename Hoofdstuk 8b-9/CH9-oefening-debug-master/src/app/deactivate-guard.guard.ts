import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Page2Component } from './components/page2/page2.component';

@Injectable({providedIn: 'root'})
export class CanDeactivateGuard implements CanDeactivate<Page2Component> {
  canDeactivate(
    component: Page2Component,
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return window.confirm("pagina verlaten?");
  }
}