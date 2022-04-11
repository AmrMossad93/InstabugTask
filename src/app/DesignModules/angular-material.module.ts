import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

const angularMaterialModule = [MatCardModule,MatInputModule];

@NgModule({
  declarations: [],
  imports: [
    angularMaterialModule
  ],
  exports: [
    angularMaterialModule
  ]
})
export class AngularMaterialModule {
}
