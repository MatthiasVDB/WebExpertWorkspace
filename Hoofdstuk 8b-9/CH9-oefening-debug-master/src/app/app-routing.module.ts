import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Error404Component } from './components/error404/error404.component';
import { CanDeactivateGuard } from './deactivate-guard.guard';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
