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
import { Ejemplo1Component } from './components/autocomplete/ejemplo1/ejemplo1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BadgeComponent } from './components/badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import { Ejemplo2Component } from './components/autocomplete/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/autocomplete/ejemplo3/ejemplo3.component';
import { Badge1Component } from './components/badge/badge1/badge1.component';
import { Badge2Component } from './components/badge/badge2/badge2.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { Bottom1Component } from './components/bottom-sheet/bottom1/bottom1.component';
import { Bottom2Component } from './components/bottom-sheet/bottom2/bottom2.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AutocompleteComponent,
    Ejemplo1Component,
    BadgeComponent,
    Ejemplo2Component,
    Ejemplo3Component,
    Badge1Component,
    Badge2Component,
    BottomSheetComponent,
    Bottom1Component,
    Bottom2Component,
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
    Chk3Component
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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
