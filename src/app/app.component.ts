import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise1Component } from "./exercises/exercise1/exercise1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exercise1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'advenjs';
}
