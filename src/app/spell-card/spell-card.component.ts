import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../models/spell.interface';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.less']
})
export class SpellCardComponent implements OnInit {
  @Input() spell: Spell;

  constructor() { }

  ngOnInit() {
  }

}
