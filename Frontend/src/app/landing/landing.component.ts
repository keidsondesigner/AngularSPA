import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class LandingComponent {}
