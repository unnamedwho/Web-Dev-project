import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  getMealPlan() {
    return [
      { name: 'Завтрак', recipe: 'Овсянка с бананом', calories: 300 },
      { name: 'Обед', recipe: 'Курица с рисом', calories: 500 },
      { name: 'Ужин', recipe: 'Салат с тунцом', calories: 400 },
    ];
  }
}
