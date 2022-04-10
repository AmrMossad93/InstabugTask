import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/Home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'team-performance',
    loadChildren: () => import('./Pages/Team-Performance/team-performance.module').then(module => module.TeamPerformanceModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
