import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamPerformanceComponent} from "./team-performance/team-performance.component";

const routes: Routes = [
  {
    path: '',
    component: TeamPerformanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamPerformanceRoutingModule {
}
