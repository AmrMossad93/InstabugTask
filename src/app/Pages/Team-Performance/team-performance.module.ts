import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPerformanceRoutingModule } from './team-performance-routing.module';
import { TeamPerformanceComponent } from './team-performance/team-performance.component';


@NgModule({
  declarations: [
    TeamPerformanceComponent
  ],
  imports: [
    CommonModule,
    TeamPerformanceRoutingModule
  ]
})
export class TeamPerformanceModule { }
