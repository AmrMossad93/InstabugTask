import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EmployeeResolver} from "../../Resolvers/employee.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      employees: EmployeeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
