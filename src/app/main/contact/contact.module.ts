import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeographyMapComponent } from 'src/app/shared/highchart/geography-map/geography-map.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    ContactComponent,
    GeographyMapComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    HighchartsChartModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
