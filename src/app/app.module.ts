import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellCardComponent } from './spell-card/spell-card.component';
import { routing } from './app.routing';
import { SpellService } from './services/spell.service';
import { HttpModule } from '@angular/http';
import { SpellItemComponent } from './spell-item/spell-item.component';
import { LevelTextPipe } from './pipes/level-text.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SpellListComponent,
    SpellCardComponent,
    SpellItemComponent,
    LevelTextPipe,
    ClickOutsideDirective,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    SpellService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
