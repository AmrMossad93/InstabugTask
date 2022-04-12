import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPerformanceRoutingModule } from './team-performance-routing.module';
import { TeamPerformanceComponent } from './team-performance/team-performance.component';
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {PrimeNgModule} from "../../DesignModules/prime-ng.module";
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [
    TeamPerformanceComponent
  ],
  imports: [
    CommonModule,
    TeamPerformanceRoutingModule,
    AngularMaterialModule,
    PrimeNgModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class TeamPerformanceModule { }
