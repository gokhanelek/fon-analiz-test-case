import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonAnalizFilterComponent } from './fon-analiz-filter.component';

describe('FonAnalizFilterComponent', () => {
  let component: FonAnalizFilterComponent;
  let fixture: ComponentFixture<FonAnalizFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonAnalizFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonAnalizFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
