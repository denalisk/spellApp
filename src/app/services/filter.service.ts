import { Injectable } from '@angular/core';
import { Spell } from '../models/spell.interface';
import { FilterGroups } from '../constants/filterValues';
import { FilterFacet } from '../models/filter-facet';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SpellService } from './spell.service';
import { Observable } from 'rxjs/Observable';
import { SpellCardComponent } from '../spell-card/spell-card.component';
import { AllSpellState, SavedSpellState } from '../constants/stateNames';

@Injectable()
export class FilterService {
  private allSpells: Spell[];
  private savedSpells: Spell[];
  private currentSpellSource: Spell[];
  private sourceState: string = AllSpellState;
  
  private currentFiltersSubject: BehaviorSubject<FilterFacet[]> = new BehaviorSubject([]);
  public get currentFilters(): Observable<FilterFacet[]> {
    return this.currentFiltersSubject.asObservable();
  };

  private currentSearchQuerySubject: BehaviorSubject<string> = new BehaviorSubject('');
  public get currentSearchQuery(): Observable<string> {
    return this.currentSearchQuerySubject.asObservable();
  }

  private currentSpellsSubject: BehaviorSubject<Spell[]> = new BehaviorSubject([]);
  public get currentSpells(): Observable<Spell[]> {
    return this.currentSpellsSubject.asObservable();
  }

  constructor(private spellService: SpellService) { 
    this.spellService.getAllSpells().then((response: Spell[]) => {
      this.allSpells = response;
      this.currentSpellSource = this.allSpells;
      this.currentSpellsSubject.next(response);
    });
    this.savedSpells = [];
  }

  public toggleSpellSource(newState: string): void {
    if (newState != this.sourceState) {
      this.resetFilters();
      this.resetSearchQuery();
      this.sourceState = newState;
      if (this.sourceState === AllSpellState) {
        this.currentSpellSource = this.allSpells;
      } else {
        this.currentSpellSource = this.savedSpells;
      }
      this.updateFilters(this.currentFiltersSubject.value);
    }
  }

  public addToSavedSpells(spell: Spell): void {
    if (this.sourceState === AllSpellState) {
      this.savedSpells.push(spell);
    }
  }

  public removeFromSavedSpells(spell: Spell): void {
    if (this.sourceState === SavedSpellState) {
      const foundIndex = this.savedSpells.findIndex(targetSpell => targetSpell.id === spell.id);
      if (foundIndex > -1) {
        this.savedSpells.splice(foundIndex, 1);
        this.updateFilters(this.currentFiltersSubject.value);
      }
    }
  }

  public addFilter(filter: FilterFacet): void {
    const currentFilters = this.currentFiltersSubject.value;
    currentFilters.push(filter)
    this.updateFilters(currentFilters);
  }

  public removeFilter(filter: FilterFacet): void {
    const currentFilters = this.currentFiltersSubject.value;
    const targetIndex = currentFilters.findIndex(x => x.propertyValue === filter.propertyValue);
    currentFilters.splice(targetIndex, 1);
    this.updateFilters(currentFilters);
  }

  public updateSearchQuery(query: string): void {
    this.resetFilters();
    const lowerQuery = query.toLowerCase();
    const currentSpells = this.currentSpellSource.filter(spell => spell.name.toLowerCase().includes(lowerQuery));
    this.updateSpells(currentSpells);
  }

  private resetSearchQuery(): void {
    this.currentSearchQuerySubject.next('')
  }

  private updateSpells(newSpells: Spell[]): void {
    this.currentSpellsSubject.next(newSpells);
  }

  private resetFilters(): void {
    console.log("resetting filters");
    this.currentFiltersSubject.next([])
  }
  
  private updateFilters(newFilters: FilterFacet[]): void {
    this.resetSearchQuery();
    const filterGroups = this.groupFilters(newFilters);
    const spells = this.applyFilters(filterGroups);
    this.updateSpells(spells);
    this.currentFiltersSubject.next(newFilters);
  }

  private groupFilters(filters: FilterFacet[]): FilterFacet[][] {
    const filterGroups: FilterFacet[][] = [];
    filters.forEach((filter: FilterFacet) => {
      const groupIndex = filterGroups.findIndex(group => group[0].propertyName === filter.propertyName);
      if (groupIndex === -1) {
        filterGroups.push([filter]);
      } else {
        filterGroups[groupIndex].push(filter);
      }
    });
    return filterGroups;
  }

  private applyFilters(filterGroups: FilterFacet[][]): Spell[] {
    const filteredSpells: Spell[] = [];
    this.currentSpellSource.forEach((spell: Spell) => {
      if (filterGroups.every(group => group.some(filter => {
        return this.filterSwitch(filter, spell);
      }))) {
        filteredSpells.push(spell);
      }
    });
    return filteredSpells;
  }

  private filterSwitch(filter: FilterFacet, spell: Spell): boolean {
    switch(filter.propertyName) {
      case 'class': {
        return spell.class.includes(filter.propertyValue.toString());
      }
      case 'level': {
        return spell.level === filter.propertyValue;
      }
      case 'school': {
        return spell.school === filter.propertyValue;
      }
      default: {
        return false;
      }
    }
  }

  // public generateFilters(spells: Spell[]): FilterFacet[] {
  //   const filters = [];
  //   spells.forEach(spell => {
  //     let newClass = true;
  //     let newSchool = true;
  //     let newLevel = true;
  //     for (let i = 0; i < filters.length; i++) {
  //       const currentFilter = filters[i];
  //       newClass = !spell.class.includes(currentFilter.propertyName);
  //       newSchool = spell.school === currentFilter.propertyName;
  //       newLevel = spell.level === currentFilter.propertyValue;
  //       if (!newClass && !newSchool && !newLevel) {
  //         break;
  //       }
  //     }
  //     this.buildClassFilter(spell)
  //   })
  // }

}
