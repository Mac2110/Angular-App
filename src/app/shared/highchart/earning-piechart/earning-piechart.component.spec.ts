import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningPiechartComponent } from './earning-piechart.component';

describe('EarningPiechartComponent', () => {
  let component: EarningPiechartComponent;
  let fixture: ComponentFixture<EarningPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningPiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
