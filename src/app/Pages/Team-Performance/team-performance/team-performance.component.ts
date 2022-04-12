import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ITeamPerformance} from "../../../Models/Interfaces/team-performance";
import {EChartsOption} from "echarts";


@Component({
  selector: 'app-team-performance',
  templateUrl: './team-performance.component.html',
  styleUrls: ['./team-performance.component.scss']
})
export class TeamPerformanceComponent implements OnInit {
  chartList: ITeamPerformance[] = []
  chartOption: EChartsOption = {}

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(res => {
      this.chartList = res['chartList'];
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: this.chartList.map(c => new Date(c.date_ms).toLocaleDateString("en-us")),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: this.chartList.map(c => c.performance * 100),
            type: 'line',
            color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'),
          },
        ],
      };
    })

  }

  ngOnInit(): void {
  }
}
