import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-se1',
  templateUrl: './se1.component.html',
  styleUrls: ['./se1.component.css']
})
export class Se1Component {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
