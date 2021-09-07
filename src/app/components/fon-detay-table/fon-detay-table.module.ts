import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FonDetayTableComponent } from './fon-detay-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FonDetayTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [FonDetayTableComponent],
})
export class FonDetayTableModule {
}
