import { Component } from '@angular/core';

@Component({
  selector: 'app-rbtn1',
  templateUrl: './rbtn1.component.html',
  styleUrls: ['./rbtn1.component.css']
})
export class Rbtn1Component {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
