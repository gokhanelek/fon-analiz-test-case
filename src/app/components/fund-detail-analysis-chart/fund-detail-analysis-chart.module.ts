import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundDetailAnalysisChartComponent } from './fund-detail-analysis-chart.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [FundDetailAnalysisChartComponent],
  imports: [
    CommonModule,
    FusionChartsModule,
    MatCardModule,
  ],
  exports: [FundDetailAnalysisChartComponent],
})
export class FundDetailAnalysisChartModule {
}
