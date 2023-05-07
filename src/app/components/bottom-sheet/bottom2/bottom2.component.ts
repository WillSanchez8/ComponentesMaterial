import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom2',
  templateUrl: './bottom2.component.html',
  styleUrls: ['./bottom2.component.css']
})

export class Bottom2Component {
  constructor(private _bottomSheetRef: MatBottomSheetRef<Bottom2Component>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
