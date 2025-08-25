import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  series = [];

  chartOptions: any;
  site = { name: String, data: [] };
  Highcharts = Highcharts;

  updateFromInput = false;

  constructor() {}

  ngOnInit(): void {
    this.myChart();
  }

  myChart() {
    this.chartOptions = {
        accessibility:{enabled:false},
      chart: {
        type: 'column'
    },
    title: {
        x: 190,
        text: 'Platform Impressions By Quarter',
        align: 'left'
    },
    xAxis: {
        categories: ['Qtr 1', 'Qtr 2', 'Qtr 3', 'Qtr 4']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Users (in Thousands)'
        },
        stackLabels: {
            enabled: false,
        }
    },
    legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 70,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}K<br/>Total: {point.stackTotal}K'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Instagram',
        data: [3, 5, 6, 13]
    }, 
    {
        name: 'Twitter',
        data: [14, 8, 8, 12]
    }, 
    {
        name: 'Facebook',
        data: [5, 2, 6, 3]
    }]
  }
}

  
}
  

