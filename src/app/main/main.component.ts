import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpellService } from '../services/spell.service';
import { Spell, PreSpell } from '../models/spell.interface';
import { FilterGroups } from '../constants/filterValues';
import { FilterFacet } from '../models/filter-facet';
import { FilterService } from '../services/filter.service';
import { Subject } from 'rxjs/Subject';
import { AllSpellState, SavedSpellState } from '../constants/stateNames';
import { TabStateService } from '../services/tab-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnDestroy {
  public spells: Spell[];
  public savedSpells: Spell[];
  public preSpells: PreSpell[];
  public selectedSpell: Spell;

  //Tab States
  public allSpellState = AllSpellState;
  public savedSpellState = SavedSpellState;
  public currentTabState = AllSpellState;
  
  public filterGroups: FilterFacet[][] = FilterGroups;

  constructor(private spellService: SpellService, private filterService: FilterService, private tabStateService: TabStateService) { 
    this.savedSpells = [];
  }

  ngOnInit() {
    this.filterService.currentSpells
      .takeUntil(this.ngUnsubscribe)
      .subscribe((spells: Spell[]) => {
        this.spells = spells;
      })
  }

  private ngUnsubscribe: Subject<void> = new Subject();
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public toggleSavedSpell(spell: Spell): void {
    if (this.currentTabState === AllSpellState) {
      this.filterService.addToSavedSpells(spell);
    } else {
      this.filterService.removeFromSavedSpells(spell);
    }
  }

  public setTab(newTab: string): void {
    this.currentTabState = newTab;
    console.log("STAET", newTab);
    console.log("??? ", this.allSpellState);
    this.filterService.toggleSpellSource(this.currentTabState);
  }
}
