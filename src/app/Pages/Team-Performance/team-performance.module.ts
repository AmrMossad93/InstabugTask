import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPerformanceRoutingModule } from './team-performance-routing.module';
import { TeamPerformanceComponent } from './team-performance/team-performance.component';
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {PrimeNgModule} from "../../DesignModules/prime-ng.module";


@NgModule({
  declarations: [
    TeamPerformanceComponent
  ],
  imports: [
    CommonModule,
    TeamPerformanceRoutingModule,
    AngularMaterialModule,
    PrimeNgModule
  ]
})
export class TeamPerformanceModule { }
