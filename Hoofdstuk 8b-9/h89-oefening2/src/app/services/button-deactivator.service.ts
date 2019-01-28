import { CanDeactivate } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CanDeactivateButtonClickGuard implements CanDeactivate<InfoComponent> {

    constructor() { }

    canDeactivate(component: InfoComponent) {
        return component.clicked;
    }
}