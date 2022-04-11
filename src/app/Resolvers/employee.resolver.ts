import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EmployeeService} from "../Services/Employee/employee.service";
import {IBaseData} from "../Models/Interfaces/Base/base-data";
import {IEmployees} from "../Models/Interfaces/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<IBaseData<IEmployees[]>> {
  constructor(private employeeService: EmployeeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<IEmployees[]>> {
    return this.employeeService.getEmployeeList();
  }
}
