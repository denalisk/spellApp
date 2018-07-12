import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Spell } from '../models/spell.interface';
import { TabStateService } from '../services/tab-state.service';
import { AllSpellState } from '../constants/stateNames';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'
import { takeUntil } from 'rxjs/operator/takeUntil';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.less']
})
export class SpellListComponent implements OnInit, OnDestroy {
  @Input() spells: Spell[];
  @Output() spellSaved: EventEmitter<Spell> = new EventEmitter();
  public tabState: string = AllSpellState;

  constructor(private tabStateService: TabStateService) { }

  ngOnInit() {
    this.tabStateService.currentState
      .takeUntil(this.ngUnsubscribe)
      .subscribe(tabState => {
        this.tabState = tabState;
      })
  }

  private ngUnsubscribe: Subject<void> = new Subject();
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public toggleSpellToSaved(spell: Spell): void {
    this.spellSaved.emit(spell);
  }
}
