import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FonAnalizFilterComponent } from "./fon-analiz-filter.component";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [FonAnalizFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  exports: [FonAnalizFilterComponent],
})
export class FonAnalizFilterModule {}
