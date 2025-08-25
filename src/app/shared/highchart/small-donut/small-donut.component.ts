import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-small-donut',
  templateUrl: './small-donut.component.html',
  styleUrls: ['./small-donut.component.css']
})


export class SmallDonutComponent implements OnInit {


  ngOnInit(): void {
    this.generateDonutCharts();
}

generateDonutCharts(){
  
  let donut1 = Highcharts.chart('donut1',{
    accessibility:{enabled:false},
    chart: {
      backgroundColor: 'transparent',
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      x: 80, //left and right
      text: '67%',
      align: 'left',
      verticalAlign: 'middle',
      y: -135, //top bottom now coming test in middle
      style: { color: '#333333', fontSize: '18px' }
    },
    subtitle:{
      x: -167,
      text:"Bounce Rate",
      verticalAlign:'middle',
      y:-115,
      style:{color:'333333', fontSize:'14px'}
    },
    /*tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },*/
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          // distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        // startAngle: 0,
        // endAngle: -180,
        center: ['5%', '10%'], //charts from left and top axis
        size: '12%',
        borderWidth: 0,
        showInLegend: false,
        point: {
          events: {
            legendItemClick: function() {
              return false;
            }
          }
        }
      }
    },

    tooltip: { enabled: false },
    series: [
      {
        // name: 'Browsers',
        colors: ['grey', 'dodgerblue'],
        showInLegend: false,
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            opacity: 1
          }
        },
        data: [30, 70],
        type: 'pie',
        innerSize: '78%'
      }
    ]
  });
  
  let donut2 = Highcharts.chart('donut2',{
    accessibility:{enabled:false},
    chart: {
      backgroundColor: 'transparent',
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      x: 80, //left and right
      text: '48K',
      align: 'left',
      verticalAlign: 'middle',
      y: -135, //top bottom now coming test in middle
      style: { color: '#333333', fontSize: '18px' }
    },
    subtitle:{
      x: -155,
      text:"Conversion Rate",
      verticalAlign:'middle',
      y:-115,
      style:{color:'333333', fontSize:'14px'}
    },
    /*tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },*/
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          // distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        // startAngle: 0,
        // endAngle: -180,
        center: ['5%', '10%'], //charts from left and top axis
        size: '12%',
        borderWidth: 0,
        showInLegend: false,
        point: {
          events: {
            legendItemClick: function() {
              return false;
            }
          }
        }
      }
    },

    tooltip: { enabled: false },
    series: [
      {
        // name: 'Browsers',
        colors: ['grey', 'orange'],
        showInLegend: false,
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            opacity: 1
          }
        },
        data: [35, 45],
        type: 'pie',
        innerSize: '78%'
      }
    ]
  });
  

  let donut3 = Highcharts.chart('donut3',{
    accessibility:{enabled:false},
    chart: {
      backgroundColor: 'transparent',
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      x: 80, //left and right
      text: '21K',
      align: 'left',
      verticalAlign: 'middle',
      y: -135, //top bottom now coming test in middle
      style: { color: '#333333', fontSize: '18px' }
    },
    subtitle:{
      x: -152,
      text:"Engagement Rate",
      verticalAlign:'middle',
      y:-115,
      style:{color:'333333', fontSize:'14px'}
    },
    /*tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },*/
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          // distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        // startAngle: 0,
        // endAngle: -180,
        center: ['5%', '10%'], //charts from left and top axis
        size: '12%',
        borderWidth: 0,
        showInLegend: false,
        point: {
          events: {
            legendItemClick: function() {
              return false;
            }
          }
        }
      }
    },

    tooltip: { enabled: false },
    series: [
      {
        // name: 'Browsers',
        colors: ['grey', 'purple'],
        showInLegend: false,
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            opacity: 1
          }
        },
        data: [20, 60],
        type: 'pie',
        innerSize: '78%'
      }
    ]
  });
  }
}

