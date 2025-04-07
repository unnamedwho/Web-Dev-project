import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesTrackerComponent } from './calories-tracker.component';

describe('CaloriesTrackerComponent', () => {
  let component: CaloriesTrackerComponent;
  let fixture: ComponentFixture<CaloriesTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
