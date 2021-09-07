import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonDetayTableComponent } from './fon-detay-table.component';

describe('FonDetayTableComponent', () => {
  let component: FonDetayTableComponent;
  let fixture: ComponentFixture<FonDetayTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonDetayTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonDetayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
