import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellCardComponent } from './spell-card/spell-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SpellListComponent,
    SpellCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
