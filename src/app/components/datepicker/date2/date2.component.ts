import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-date2',
  templateUrl: './date2.component.html',
  styleUrls: ['./date2.component.css']
})
export class Date2Component {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
