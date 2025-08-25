import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDonutComponent } from './small-donut.component';

describe('SmallDonutComponent', () => {
  let component: SmallDonutComponent;
  let fixture: ComponentFixture<SmallDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallDonutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
