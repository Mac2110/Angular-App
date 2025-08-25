import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit{


  ngOnInit(): void {
      this.generateCharts();
  }

  generateCharts(){

    // <!-- ----------------------Finance-chart-1----------------------- -->

    let chart1 = Highcharts.chart('chart1',{
      accessibility:{enabled:false},
      chart: {
        height: 120,
        type: 'areaspline'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 100
      },

      tooltip: {
        backgroundColor: '#FF7160',
        style: {
          color: 'white'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
          color: '#FF7160',
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#FFB4AC'], // start
              [1, '#FFFDFC'] // end
            ]
          }
        }
      },
      series: [{
        type: undefined,
        marker: {
          enabled: false
        },
        data: [29.9, 71.5, 78.4, 12.2, 44.0, 76.0, 35.6, 48.5, 21.4,
          94.1, 54.4]
      }]
    });

    // <!-- ----------------------Finance-chart-1----------------------- -->

  let chart2 = Highcharts.chart('chart2',{
    accessibility:{enabled:false},
    chart: {
      height: 120,
      type: 'areaspline'
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false,
      min: 0,
      max: 100
    },

    tooltip: {
      backgroundColor: '#FFC678',
      style: {
        color: 'white'
      },
      formatter: function () {
        return '<b>' + this.y + '</b>';
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        color: '#FFC678',
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#FFE6C4'], // start
            [1, '#FFFDFC'] // end
          ]
        }
      }
    },
    series: [{
      type: undefined,
      marker: {
        enabled: false
      },
      data: [76.0, 35.6, 48.5, 21.4,
        94.1, 54.4, 29.9, 71.5, 78.4, 12.2, 44.0]
    }]
  });
  
  // <!-- ----------------------Finance-chart-1----------------------- -->

  let chart3 = Highcharts.chart('chart3',{
    accessibility:{enabled:false},
    chart: {
      height: 120,
      type: 'areaspline'
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false,
      min: 0,
      max: 100
    },

    tooltip: {
      backgroundColor: '#44C4EC',
      style: {
        color: 'white'
      },
      formatter: function () {
        return '<b>' + this.y + '</b>';
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        color: '#44C4EC',
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#AFE6F7'], // start
            [1, '#FFFDFC'] // end
          ]
        }
      }
    },
    series: [{
      type: undefined,
      marker: {
        enabled: false
      },
      data: [29.9, 71.5, 78.4, 12.2, 76.0, 35.6, 48.5, 21.4,
        94.1, 54.4, 44.0]
    }]
  });
}

}
