import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateViaConfirmationGuard implements CanActivate {
    
    constructor(private router : Router) {}

    canActivate() {
        return confirm("Are you sure you want to delete this event?");
    }
}