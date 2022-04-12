import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamPerformanceComponent} from "./team-performance/team-performance.component";
import {TeamPerformanceResolver} from "../../Resolvers/team-performance.resolver";

const routes: Routes = [
  {
    path: '',
    component: TeamPerformanceComponent,
    resolve: {
      chartList: TeamPerformanceResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamPerformanceRoutingModule {
}
