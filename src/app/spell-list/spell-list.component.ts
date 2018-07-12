import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Spell } from '../models/spell.interface';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.less']
})
export class SpellListComponent implements OnInit {
  @Input() spells: Spell[];
  @Output() spellSaved: EventEmitter<Spell> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addSpellToSaved(spell: Spell): void {
    this.spellSaved.emit(spell);
  }

}
