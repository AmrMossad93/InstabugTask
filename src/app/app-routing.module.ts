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
    path: 'error',
    loadChildren: () => import('./Pages/Error/error.module').then(module => module.ErrorModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/error/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
