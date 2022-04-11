import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {ProgressBarModule} from 'primeng/progressbar';

const primeNgModule = [
  TableModule,
  ButtonModule,
  InputTextModule,
  MultiSelectModule,
  DropdownModule,
  SliderModule,
  ProgressBarModule
];

@NgModule({
  declarations: [],
  imports: [
    primeNgModule
  ],
  exports: [
    primeNgModule
  ]
})
export class PrimeNgModule { }
