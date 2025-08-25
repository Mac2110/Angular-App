import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographyMapComponent } from './geography-map.component';

describe('GeographyMapComponent', () => {
  let component: GeographyMapComponent;
  let fixture: ComponentFixture<GeographyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographyMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
