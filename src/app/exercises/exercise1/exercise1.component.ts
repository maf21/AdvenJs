import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  imports: [],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.scss'
})
export class Exercise1Component {
  gifts1 = [3, 1, 2, 3, 4, 2, 5];
  gifts2 = [6, 5, 5, 5, 5];
  gifts3: number[] = [];

  prepareGifts(gifts: number[]): number[] {
    return Array.from(new Set(gifts)).sort((a, b) => a - b);
  }
}
