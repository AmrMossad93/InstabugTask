import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBaseData} from "../../../Models/Interfaces/Base/base-data";
import {IEmployees} from "../../../Models/Interfaces/employees";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employeesList = {} as IBaseData<IEmployees[]>;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(res => {
      this.employeesList = res['employees'] as IBaseData<IEmployees[]>;
    })
  }

  ngOnInit(): void {
  }

}
