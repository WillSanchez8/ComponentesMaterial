import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DividerComponent } from './components/divider/divider.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

const routes: Routes = [
  { path: "", redirectTo: "/",pathMatch: "full"},
  { path: "autocomplete", component:AutocompleteComponent},
  { path: "badge", component:BadgeComponent},
  { path: "bottom-sheet", component:BottomSheetComponent},
  { path: "button", component:ButtonComponent},
  { path: "button-toggle", component:ButtonToggleComponent},
  { path: "card", component:CardComponent},
  { path: "checkbox", component:CheckboxComponent},
  { path: "chips", component:ChipsComponent},
  { path: "datepicker", component:DatepickerComponent},
  { path: "dialog", component:DialogComponent},
  { path: "divider", component:DividerComponent},
  { path: "expansion-panel", component: ExpansionPanelComponent},
  { path: "form-field", component: FormFieldComponent},
  { path: "grid-list", component: GridListComponent},
  { path: "icon", component: IconComponent},
  { path: "input", component: InputComponent},
  { path: "list", component: ListComponent},
  { path: "menu", component: MenuComponent},
  { path: "paginator", component: PaginatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
