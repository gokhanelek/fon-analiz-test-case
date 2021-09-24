import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FonAnaliziPageComponent } from './fon-analizi/fon-analizi-page.component';
import { FundAnalysisFilterModule } from 'src/app/components/fund-analysis-filter/fund-analysis-filter.module';
import { FundDetailAnalysisChartModule } from '../components/fund-detail-analysis-chart/fund-detail-analysis-chart.module';
import { FundDetailTableModule } from '../components/fund-detail-table/fund-detail-table.module';


@NgModule({
  declarations: [FonAnaliziPageComponent],
  imports: [
    CommonModule,
    FundAnalysisFilterModule,
    FundDetailAnalysisChartModule,
    FundDetailTableModule
  ]
})
export class PagesModule { }
