import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-btn-tg3',
  templateUrl: './btn-tg3.component.html',
  styleUrls: ['./btn-tg3.component.css']
})
export class BtnTg3Component {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
