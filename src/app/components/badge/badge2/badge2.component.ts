import { Component } from '@angular/core';

@Component({
  selector: 'app-badge2',
  templateUrl: './badge2.component.html',
  styleUrls: ['./badge2.component.css']
})
export class Badge2Component {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
