import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FinanceComponent } from 'src/app/shared/highchart/finance/finance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PieChartComponent } from 'src/app/shared/highchart/pie-chart/pie-chart.component';
import { SmallDonutComponent } from 'src/app/shared/highchart/small-donut/small-donut.component';
import { BarChartComponent } from 'src/app/shared/highchart/bar-chart/bar-chart.component';
import { PlatformCardComponent } from 'src/app/shared/highchart/platform-card/platform-card.component';
import { EarningPiechartComponent } from 'src/app/shared/highchart/earning-piechart/earning-piechart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FinanceComponent,
    PieChartComponent,
    SmallDonutComponent,
    BarChartComponent,
    PlatformCardComponent,
    EarningPiechartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    MatCardModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
