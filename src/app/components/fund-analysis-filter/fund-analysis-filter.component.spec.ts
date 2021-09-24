import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundAnalysisFilterComponent } from './fund-analysis-filter.component';

describe('FonAnalizFilterComponent', () => {
  let component: FundAnalysisFilterComponent;
  let fixture: ComponentFixture<FundAnalysisFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundAnalysisFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundAnalysisFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
