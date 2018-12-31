import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CanActivateAutGuard } from './guards/can-activate-aut.guard';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'auth/login',
      pathMatch: 'full'
  },
  {
      path: 'auth/login',
      component: LoginComponent,
      pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [CanActivateAutGuard],
    component: HomePageComponent,
    pathMatch: 'full'
  },
  { // How to integrate modules with routes: Load from json?
    path: 'dashboard',
    canActivate: [CanActivateAutGuard],
    // loadChildren: '../statistic/statistic.module#StatisticModule' // strange error in Angular 6
    loadChildren: () => DashboardModule
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule {
  constructor(private router: Router) {
    this.router.navigate(['']); // redirect to default route
  }
}
