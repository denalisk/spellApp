import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  constructor() { }

  private isSignedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  

}
