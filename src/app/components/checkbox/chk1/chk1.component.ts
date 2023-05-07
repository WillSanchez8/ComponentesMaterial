import { Component } from '@angular/core';

@Component({
  selector: 'app-chk1',
  templateUrl: './chk1.component.html',
  styleUrls: ['./chk1.component.css']
})
export class Chk1Component {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
