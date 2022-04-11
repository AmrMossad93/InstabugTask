import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-performance',
  templateUrl: './team-performance.component.html',
  styleUrls: ['./team-performance.component.scss']
})
export class TeamPerformanceComponent implements OnInit {
  basicData: any;
  basicOptions: any;

  constructor() {
    console.log()
  }

  ngOnInit(): void {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
    this.basicData = {
      labels: this.data().chartData.map(c => new Date(c.date_ms).toLocaleDateString("en-us")),
      datasets: [
        {
          label: 'Team Performance Index',
          data: this.data().chartData.map(c => c.performance * 100),
          fill: false,
          borderColor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'),
          tension: .4
        }
      ]
    };
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
