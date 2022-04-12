import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TeamPerformanceService} from "../Services/TeamPerformance/team-performance.service";
import {ITeamPerformance} from "../Models/Interfaces/team-performance";

@Injectable({
  providedIn: 'root'
})
export class TeamPerformanceResolver implements Resolve<ITeamPerformance[]> {
  constructor(private teamPerformanceService: TeamPerformanceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITeamPerformance[]> {
    return this.teamPerformanceService.getTeamPerformance();
  }
}
