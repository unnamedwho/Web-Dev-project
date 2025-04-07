import { Routes } from '@angular/router';
import { MealPlanComponent } from './components/meal-plan/meal-plan.component';
import { RecipesComponent } from './components/recipes/recipes.component';

export const routes: Routes = [
  { path: 'meal-plan', component: MealPlanComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '', redirectTo: 'meal-plan', pathMatch: 'full' }
];
