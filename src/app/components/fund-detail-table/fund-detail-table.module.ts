import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundDetailTableComponent } from './fund-detail-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FundDetailTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [FundDetailTableComponent],
})
export class FundDetailTableModule {
}
