import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

const routes: Routes = [
  { path: "", redirectTo: "/",pathMatch: "full"},
  { path: "autocomplete", component:AutocompleteComponent},
  { path: "badge", component:BadgeComponent},
  { path: "bottom-sheet", component:BottomSheetComponent},
  { path: "button", component:ButtonComponent},
  { path: "button-toggle", component:ButtonToggleComponent},
  { path: "card", component:CardComponent},
  { path: "checkbox", component:CheckboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
