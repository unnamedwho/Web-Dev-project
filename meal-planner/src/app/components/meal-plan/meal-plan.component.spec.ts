import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanComponent } from './meal-plan.component';

describe('MealPlanComponent', () => {
  let component: MealPlanComponent;
  let fixture: ComponentFixture<MealPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
