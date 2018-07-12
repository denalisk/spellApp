import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Spell } from '../models/spell.interface';
import { LevelTextPipe } from '../pipes/level-text.pipe';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { AllSpellState, SavedSpellState } from '../constants/stateNames';

@Component({
  selector: 'app-spell-item',
  templateUrl: './spell-item.component.html',
  styleUrls: ['./spell-item.component.less'],
  providers: [LevelTextPipe]
})
export class SpellItemComponent implements OnInit {
  @Input() spell: Spell;
  @Input() tabState: string;
  @Output() spellSaved: EventEmitter<void> = new EventEmitter();

  public spellDescriptionIsShown: boolean;
  public allSpellState: string = AllSpellState;
  public savedSpellState: string = SavedSpellState;

  constructor() { }

  ngOnInit() {
  }

  public toggleSpellDescription(): void {
    this.spellDescriptionIsShown = !this.spellDescriptionIsShown;
  }

  public hideSpellDescription(): void {
    this.spellDescriptionIsShown = false;
  }

  public toggleSpellToSaved(event: Event): void {
    console.log("current state is ", this.tabState);
    event.stopPropagation();
    this.spellSaved.emit();
  }

}
