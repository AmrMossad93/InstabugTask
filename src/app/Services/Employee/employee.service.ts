import {Injectable} from '@angular/core';
import {DataService} from "../Data/data.service";
import {Observable} from "rxjs";
import {APIName} from "../../Models/StaticData/APIName/APIName";
import {IBaseData} from "../../Models/Interfaces/Base/base-data";
import {IEmployees} from "../../Models/Interfaces/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private dataService: DataService) {
  }

  getEmployeeList(): Observable<IBaseData<IEmployees[]>> {
    return this.dataService.get(APIName.employee.list)
  }
}
