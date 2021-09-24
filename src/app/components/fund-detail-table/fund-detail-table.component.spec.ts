import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDetailTableComponent } from './fund-detail-table.component';

describe('FonDetayTableComponent', () => {
  let component: FundDetailTableComponent;
  let fixture: ComponentFixture<FundDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
