import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'statistic',
    pathMatch: 'full'
  },
  {
    path: 'forecast',
    children: [
      { path: '', component: ForecastComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'statistic'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
