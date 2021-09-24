import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith, switchMap } from "rxjs/operators";
import { FonCodeResponse } from "src/app/models/fund-analysis";
import { FundAnalysisService } from "src/app/services/fund-analysis.service";

@Component({
  selector: "vex-fund-analysis-filter",
  templateUrl: "./fund-analysis-filter.component.html",
  styleUrls: ["./fund-analysis-filter.component.scss"],
})
export class FundAnalysisFilterComponent implements OnInit {
  minDate = new Date("2021-01-01");
  maxDate = new Date();
  isStatus: boolean = false;

  filterForm = this.fb.group({
    fonType: ["", Validators.required],
    fonCode: ["", Validators.required],
    range: this.fb.group({
      start: ["", Validators.required],
      end: ["", Validators.required],
    }),
    displayPeriod: ["", Validators.required],
  });

  filteredFons$: Observable<FonCodeResponse[]>;

  constructor(
    public fonAnalizService: FundAnalysisService,
    private fb: FormBuilder
  ) {
    this.filteredFons$ = this.filterForm.get("fonCode").valueChanges.pipe(
      startWith(""),
      switchMap((searchKey) =>
        fonAnalizService.fonCodes$.pipe(
          map((fons) => {
            if (searchKey) {
              return fons?.filter((item) =>
                item.Kodu.toLowerCase().includes(searchKey.toLowerCase())
              );
            }

            return fons;
          })
        )
      )
    );
  }

  ngOnInit(): void { }

  onFilter(): void {
    this.fonAnalizService
      .getFonInfoForCode({
        fonType: this.filterForm.get("fonType").value,
        fonCode: this.filterForm.get("fonCode").value,
        startDate: this.filterForm.get("range").get("start").value,
        endDate: this.filterForm.get("range").get("end").value,
        period: this.filterForm.get("displayPeriod").value,
      }).subscribe();
  }

  changeFonType(event) {
    this.fonAnalizService.getFonCode(event).subscribe();
  }

  displayFn(fonKodu: string): string {
    return fonKodu;
  }
}
