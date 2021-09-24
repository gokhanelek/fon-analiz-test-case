import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDetailAnalysisChartComponent } from './fund-detail-analysis-chart.component';

describe('FundDetailAnalysisChartComponent', () => {
  let component: FundDetailAnalysisChartComponent;
  let fixture: ComponentFixture<FundDetailAnalysisChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundDetailAnalysisChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDetailAnalysisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
