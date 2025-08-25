import { Component } from '@angular/core';
import * as Highcharts from "highcharts";


@Component({
  selector: 'app-earning-piechart',
  templateUrl: './earning-piechart.component.html',
  styleUrls: ['./earning-piechart.component.css']
})
export class EarningPiechartComponent {

  Highcharts: typeof Highcharts = Highcharts;

  ngOnInit():void{
    this.initDonut();
  }
  initDonut() {
    const donut = Highcharts.chart('donut',{
      accessibility:{enabled:false},
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: '<strong>75%</strong>',
        align: 'center',
        verticalAlign: 'middle',
        x: -58,
        y: 15,
        style: { color: '#333333', fontSize: '25px' }
      },
      subtitle: {
        text: '<strong>Total Income<br>$ 8,2100.00</strong>',
        align: 'center',
        verticalAlign: 'middle',
        x: 60,
        y: 10,
        style: { color: '#333333', fontSize: '18px' }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        enabled:false
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
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: -180,
          center: ['30%', '40%'],
          size: '120%',
          showInLegend: false,
        },
      },
      series: [
        {
          data: [30,70],  
          type: 'pie',
          colors: ['grey', '#ff6699'],
          innerSize: '70%',
        }]
    });
  

   const donuts = Highcharts.chart('donuts',{
    accessibility:{enabled:false},
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: '<strong>59%</strong>',
      align: 'center',
      verticalAlign: 'middle',
      x: -75,
      y: 13,
      style: { color: '#333333', fontSize: '25px' }
    },
    subtitle: {
      text: '<strong>Total Expenses<br>$ 7,3100.00</strong>',
      align: 'center',
      verticalAlign: 'middle',
      x: 50,
      y: 10,
      style: { color: '#333333', fontSize: '18px' }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      enabled:false
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
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -130,
        endAngle: -180,
        center: ['20%', '40%'],
        size: '120%',
        showInLegend: false,
      },
    },
    series: [
      {
        data: [55,70],  
        type: 'pie',
        colors: ['grey', '#cc33ff'],
        innerSize: '70%',
      }]
  });

}
}
