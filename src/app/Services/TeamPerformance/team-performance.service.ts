import {Injectable} from '@angular/core';
import {DataService} from "../Data/data.service";
import {Observable} from "rxjs";
import {ITeamPerformance} from "../../Models/Interfaces/team-performance";
import {APIName} from "../../Models/StaticData/APIName/APIName";

@Injectable({
  providedIn: 'root'
})
export class TeamPerformanceService {

  constructor(private dataService: DataService) {
  }

  getTeamPerformance(): Observable<ITeamPerformance[]> {
    return this.dataService.get(APIName.teamPerformance.chartList)
  }
}
