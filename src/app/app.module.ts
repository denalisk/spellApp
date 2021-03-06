import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { SelectTagComponent } from './select-tag/select-tag.component';
import { FilterService } from './services/filter.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SearchComponent } from './search/search.component';
import { TabStateService } from './services/tab-state.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SpellListComponent,
    SpellCardComponent,
    SpellItemComponent,
    LevelTextPipe,
    ClickOutsideDirective,
    FilterComponent,
    SelectTagComponent,
    SafeHtmlPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SpellService,
    FilterService,
    TabStateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
