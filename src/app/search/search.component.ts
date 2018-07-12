import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/takeUntil'
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searchChanged: EventEmitter<string> = new EventEmitter();
  public searchBox: FormControl;

  constructor(private filterService: FilterService) {
    this.searchBox = new FormControl('');
  }

  ngOnInit() {
    // Subscribe to listen for changes and emit when they change
    this.searchBox.valueChanges.distinctUntilChanged()
      .debounceTime(1000)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(value => {
        this.updateSearchQuery(value);
      });
    this.initSearyQuerySubscription();
  }

  private ngUnsubscribe: Subject<void> = new Subject();
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updateSearchQuery(query: string): void {
    this.filterService.updateSearchQuery(query);
  }

  private initSearyQuerySubscription(): void {
    this.filterService.currentSearchQuery
      .takeUntil(this.ngUnsubscribe)
      .subscribe(query => {
        this.searchBox.patchValue(query);
      })
  }
}
