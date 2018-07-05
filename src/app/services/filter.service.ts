import { Injectable } from '@angular/core';
import { Spell } from '../models/spell.interface';
import { Filters } from '../constants/filterValues';

@Injectable()
export class FilterService {

  constructor() { }

  public generateFilters(spells: Spell[]): FilterFacet[][] {
    const allFilters = FilterGroups;
    allFilters.forEach
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

  private buildClassFilter(spell: Spell): FilterFacet {
    return { displayName: spell.class[]}
  }

}

export interface FilterFacet {
  displayName: string;
  propertyName: string;
  propertyValue: string | number;
}
