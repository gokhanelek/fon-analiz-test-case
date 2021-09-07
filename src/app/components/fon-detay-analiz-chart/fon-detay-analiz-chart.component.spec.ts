import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonDetayAnalizChartComponent } from './fon-detay-analiz-chart.component';

describe('FonDetayAnalizChartComponent', () => {
  let component: FonDetayAnalizChartComponent;
  let fixture: ComponentFixture<FonDetayAnalizChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonDetayAnalizChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonDetayAnalizChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
