import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  ngOnInit(): void {
    this.generatePieCharts();
}

generatePieCharts(){
  const chart = Highcharts.chart('chart-pie',{
    accessibility:{enabled:false},
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: '<strong>50%</strong>',
      style: { color: "black", fontSize: "28px"},
      verticalAlign: 'middle',
      y: 0
    },
    subtitle: {
      text: "Increase this month",
      style: { color: "black", fontSize: "14px"},
      verticalAlign: "middle",
      y: 10
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          distance: -22,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: -180,
        center: ['50%', '50%'],
        size: '90%',
        showInLegend: true
      }
    },
    series: [
      {
        name: 'Users',
        data: [
          {
            name: 'USA',
            y: 10,
          },
          {
            name: 'UK',
            y: 20,
          }, 
          {
            name: 'Spain',
            y: 25,
          }, 
          {
            name: 'France',
            y: 8
          },
          {
            name: 'China',
            y: 12
          },
          {
            name:'Japan',
            y: 25
          }
        ],
        
        type: 'pie',
        innerSize: '70%',
      }]
  });
}

}
