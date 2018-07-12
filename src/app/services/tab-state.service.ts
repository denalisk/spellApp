import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Spell } from '../models/spell.interface';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AllSpellState } from '../constants/stateNames';

@Injectable()
export class TabStateService {

  private currentStateSubject: BehaviorSubject<string> = new BehaviorSubject(AllSpellState);
  public get currentState(): Observable<string> {
    return this.currentStateSubject.asObservable();
  }

  public updateTabState(newState: string): void {
    this.currentStateSubject.next(newState);
  }

  constructor() { }

}
