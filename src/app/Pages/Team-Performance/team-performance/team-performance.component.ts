import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-performance',
  templateUrl: './team-performance.component.html',
  styleUrls: ['./team-performance.component.scss']
})
export class TeamPerformanceComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  data() {
    return {
      chartData: [
        {
          date_ms: 1641772800000,
          performance: 0.2,
        },
        {
          date_ms: 1641859200000,
          performance: 0.33,
        },
        {
          date_ms: 1641945600000,
          performance: 0.53,
        },
        {
          date_ms: 1642032000000,
          performance: 0.31,
        },
        {
          date_ms: 1642118400000,
          performance: 0.65,
        },
        {
          date_ms: 1642204800000,
          performance: 0.88,
        },
        {
          date_ms: 1642291200000,
          performance: 0.07,
        },
      ],
    };
  }
}
