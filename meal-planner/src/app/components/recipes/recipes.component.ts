import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 Добавили RouterModule

// Интерфейс для Recipe
export interface Recipe {
  id: number;
  name: string;
  calories: number;
}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 Теперь RouterModule импортирован
})
export class RecipesComponent {
  recipes: Recipe[] = [
    { id: 1, name: 'Борщ', calories: 300 },
    { id: 2, name: 'Омлет', calories: 200 },
    { id: 3, name: 'Салат Цезарь', calories: 250 }
  ];
}
