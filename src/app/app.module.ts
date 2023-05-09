import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BadgeComponent } from './components/badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import { Badge1Component } from './components/badge/badge1/badge1.component';
import { Badge2Component } from './components/badge/badge2/badge2.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ButtonComponent } from './components/button/button.component';
import { Button1Component } from './components/button/button1/button1.component';
import { Button2Component } from './components/button/button2/button2.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { BtnTg1Component } from './components/button-toggle/btn-tg1/btn-tg1.component';
import { BtnTg2Component } from './components/button-toggle/btn-tg2/btn-tg2.component';
import { BtnTg3Component } from './components/button-toggle/btn-tg3/btn-tg3.component';
import { BtnTg4Component } from './components/button-toggle/btn-tg4/btn-tg4.component';
import { BtnTg5Component } from './components/button-toggle/btn-tg5/btn-tg5.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardComponent } from './components/card/card.component';
import { Card1Component } from './components/card/card1/card1.component';
import { Card2Component } from './components/card/card2/card2.component';
import { Card3Component } from './components/card/card3/card3.component';
import { Card4Component } from './components/card/card4/card4.component';
import { Card5Component } from './components/card/card5/card5.component';
import { Card6Component } from './components/card/card6/card6.component';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { Chk1Component } from './components/checkbox/chk1/chk1.component';
import { Chk2Component } from './components/checkbox/chk2/chk2.component';
import { Chk3Component } from './components/checkbox/chk3/chk3.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ChipsComponent } from './components/chips/chips.component';
import { Chip1Component } from './components/chips/chip1/chip1.component';
import { Chip2Component } from './components/chips/chip2/chip2.component';
import { Chip3Component } from './components/chips/chip3/chip3.component';
import { Chip4Component } from './components/chips/chip4/chip4.component';
import { Chip5Component } from './components/chips/chip5/chip5.component';
import { Chip6Component } from './components/chips/chip6/chip6.component';
import { Chip7Component } from './components/chips/chip7/chip7.component';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { Date1Component } from './components/datepicker/date1/date1.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Date2Component } from './components/datepicker/date2/date2.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { Diag1Component } from './components/dialog/diag1/diag1.component';
import { Diag2Component } from './components/dialog/diag2/diag2.component';
import { Diag3Component } from './components/dialog/diag3/diag3.component';
import { Diag4Component } from './components/dialog/diag4/diag4.component';
import { Diag5Component } from './components/dialog/diag5/diag5.component';
import { Diag6Component } from './components/dialog/diag6/diag6.component';
import { DividerComponent } from './components/divider/divider.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { Exp1Component } from './components/expansion-panel/exp1/exp1.component';
import { Exp2Component } from './components/expansion-panel/exp2/exp2.component';
import { Exp3Component } from './components/expansion-panel/exp3/exp3.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { Form1Component } from './components/form-field/form1/form1.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { Grid1Component } from './components/grid-list/grid1/grid1.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Grid2Component } from './components/grid-list/grid2/grid2.component';
import { IconComponent } from './components/icon/icon.component';
import { Icon1Component } from './components/icon/icon1/icon1.component';
import { Icon2Component } from './components/icon/icon2/icon2.component';
import { InputComponent } from './components/input/input.component';
import { Input1Component } from './components/input/input1/input1.component';
import { ListComponent } from './components/list/list.component';
import { List1Component } from './components/list/list1/list1.component';
import { List2Component } from './components/list/list2/list2.component';
import { List3Component } from './components/list/list3/list3.component';
import { List4Component } from './components/list/list4/list4.component';
import { MenuComponent } from './components/menu/menu.component';
import { Menu1Component } from './components/menu/menu1/menu1.component';
import {MatMenuModule} from '@angular/material/menu';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { Pag1Component } from './components/paginator/pag1/pag1.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AutocompleteComponent,
    BadgeComponent,
    Badge1Component,
    Badge2Component,
    BottomSheetComponent,
    ButtonComponent,
    Button1Component,
    Button2Component,
    ButtonToggleComponent,
    BtnTg1Component,
    BtnTg2Component,
    BtnTg3Component,
    BtnTg4Component,
    BtnTg5Component,
    CardComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    CheckboxComponent,
    Chk1Component,
    Chk2Component,
    Chk3Component,
    ChipsComponent,
    Chip1Component,
    Chip2Component,
    Chip3Component,
    Chip4Component,
    Chip5Component,
    Chip6Component,
    Chip7Component,
    DatepickerComponent,
    Date1Component,
    Date2Component,
    DialogComponent,
    Diag1Component,
    Diag2Component,
    Diag3Component,
    Diag4Component,
    Diag5Component,
    Diag6Component,
    DividerComponent,
    ExpansionPanelComponent,
    Exp1Component,
    Exp2Component,
    Exp3Component,
    FormFieldComponent,
    Form1Component,
    GridListComponent,
    Grid1Component,
    Grid2Component,
    IconComponent,
    Icon1Component,
    Icon2Component,
    InputComponent,
    Input1Component,
    ListComponent,
    List1Component,
    List2Component,
    List3Component,
    List4Component,
    MenuComponent,
    Menu1Component,
    PaginatorComponent,
    Pag1Component,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    DragDropModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
