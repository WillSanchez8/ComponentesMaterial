import { Component } from '@angular/core';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.css']
})
export class List3Component {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
