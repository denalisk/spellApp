import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Spell } from '../models/spell.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpellService {

  constructor(private http: Http) { }

  public getAllPreSpells<T>(endpoint: string): Observable<T[]> {
    return this.http.get('http://localhost:3000/' + endpoint)
    .map(response => response.json() as T[]);
  }

  // public getAllSpells(): Promise<Spell[]> {
  //   return this.http.get('http://localhost:3000/spells')
  //   .map(response => {
  //     let spells = response.json() as Spell[];
  //     this.sortSpells(spells);
  //     return spells;
  //   }).toPromise();
  // }

  public getAllSpells(): Promise<Spell[]> {
    console.log("getting spells");
    return this.http.get('assets/data.json')
    .map(response => {
      const parsedResponse = response.json();
      let spells = parsedResponse.spells as Spell[];
      this.sortSpells(spells);
      return spells;
    }).toPromise();
  }

  public updateSpell(spell: Spell): Promise<void> {
    return this.http.put('http://localhost:3000/spells/' + spell.id, spell, this.getOptions()).toPromise().then(response => console.log(response));
  }

  private getOptions(): RequestOptions {
    const header = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({
      headers: header
    });

    return options;
  }

  /**
   * always sort spells by level and then alphabetically
   */
  private sortSpells(spells: Spell[]): void {
    console.log("Sorting");
    spells.sort((spellA, spellB) => {
      if (spellA.level - spellB.level === 0) {
        const nameA = spellA.name.toUpperCase();
        const nameB = spellB.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return spellA.level - spellB.level;
      }
    })
  }

}
