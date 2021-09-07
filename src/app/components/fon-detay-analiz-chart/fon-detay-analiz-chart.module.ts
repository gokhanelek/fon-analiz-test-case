import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FonDetayAnalizChartComponent } from './fon-detay-analiz-chart.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [FonDetayAnalizChartComponent],
  imports: [
    CommonModule,
    FusionChartsModule,
    MatCardModule,
  ],
  exports: [FonDetayAnalizChartComponent],
})
export class FonDetayAnalizChartModule {
}
