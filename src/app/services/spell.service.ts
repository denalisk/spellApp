import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Spell, PreSpell } from '../models/spell.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpellService {

  constructor(private http: Http) { }

  public getAllPreSpells(): Observable<Spell[]> {
    return this.http.get('http://localhost:3000/spells')
    .map(response => response.json() as Spell[]);
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

}
