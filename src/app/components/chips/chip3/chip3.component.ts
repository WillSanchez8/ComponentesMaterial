import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component} from '@angular/core';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chip3',
  templateUrl: './chip3.component.html',
  styleUrls: ['./chip3.component.css']
})
export class Chip3Component {
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
