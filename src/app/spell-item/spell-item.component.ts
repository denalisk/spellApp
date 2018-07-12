import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../models/spell.interface';
import { LevelTextPipe } from '../pipes/level-text.pipe';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'app-spell-item',
  templateUrl: './spell-item.component.html',
  styleUrls: ['./spell-item.component.less'],
  providers: [LevelTextPipe]
})
export class SpellItemComponent implements OnInit {
  @Input() spell: Spell;

  public spellDescriptionIsShown: boolean;

  constructor() { }

  ngOnInit() {
  }

  public toggleSpellDescription(): void {
    this.spellDescriptionIsShown = !this.spellDescriptionIsShown;
  }

  public hideSpellDescription(): void {
    this.spellDescriptionIsShown = false;
  }

}
