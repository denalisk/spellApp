import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../models/spell.interface';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.less']
})
export class SpellListComponent implements OnInit {
  @Input() spells: Spell[];

  constructor() { }

  ngOnInit() {
  }

}
