import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom1',
  templateUrl: './bottom1.component.html',
  styleUrls: ['./bottom1.component.css']
})
export class Bottom1Component {
  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  constructor(readonly bottomSheet: MatBottomSheet) {}

  open(config?: MatBottomSheetConfig) {
    return this.bottomSheet.open(this.template, config);
  }
}
