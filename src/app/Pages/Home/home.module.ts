import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {PrimeNgModule} from "../../DesignModules/prime-ng.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class HomeModule { }
