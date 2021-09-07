import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FonAnaliziPageComponent } from './fon-analizi/fon-analizi-page.component';
import { FonAnalizFilterModule } from 'src/app/components/fon-analiz-filter/fon-analiz-filter.module';
import { FonDetayAnalizChartModule } from '../components/fon-detay-analiz-chart/fon-detay-analiz-chart.module';
import { FonDetayTableModule } from '../components/fon-detay-table/fon-detay-table.module';


@NgModule({
  declarations: [FonAnaliziPageComponent],
  imports: [
    CommonModule,
    FonAnalizFilterModule,
    FonDetayAnalizChartModule,
    FonDetayTableModule
  ]
})
export class PagesModule { }
