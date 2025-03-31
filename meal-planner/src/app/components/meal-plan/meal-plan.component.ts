import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Интерфейс для Meal
export interface Meal {
  name: string;
  recipe?: string;
  calories?: number;
}

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css'],
  standalone: true,
  imports: [CommonModule], // 👈 Добавили CommonModule
})
export class MealPlanComponent {
  meal: Meal = {
    name: 'Паста',
    recipe: 'Карбонара',
    calories: 600
  };
}
