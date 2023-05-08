import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-exp1',
  templateUrl: './exp1.component.html',
  styleUrls: ['./exp1.component.css']
})
export class Exp1Component {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
