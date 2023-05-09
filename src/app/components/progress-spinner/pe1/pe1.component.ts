import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-pe1',
  templateUrl: './pe1.component.html',
  styleUrls: ['./pe1.component.css']
})
export class Pe1Component {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
