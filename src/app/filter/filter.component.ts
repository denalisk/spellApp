import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FilterFacet } from '../models/filter-facet';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { FilterService } from '../services/filter.service';
import { DisplayItem } from '../models/display-item.interface';
import { SortFacet } from '../models/sort-facet';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() filterGroups: FilterFacet[][];
  public currentFilters: FilterFacet[];
  public sortFacets: SortFacet[];
  public currentSort: SortFacet;

  public filtersAreShown: boolean;

  public filterDeselector: Subject<void> = new Subject();
  public sortDeselector: Subject<void> = new Subject();
  

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.buildSortFacets();
    this.initFilterSubscriptions();
  }

  private ngUnsubscribe: Subject<void> = new Subject();
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public hideFilters(): void {
    this.filtersAreShown = false;
    console.log("hiding");
  }

  public toggleFilterView(): void {
    this.filtersAreShown = !this.filtersAreShown;
    console.log("toggling");
  }

  public toggleFilter(selectedFilter: FilterFacet): void {
    if (selectedFilter.selected) {
      this.filterService.addFilter(selectedFilter);
    } else {
      this.filterService.removeFilter(selectedFilter);
    }
    console.log(this.currentFilters);
  }

  public removeFilter(selectedFilter: FilterFacet): void {
    this.filterService.removeFilter(selectedFilter);
  }

  public deselectFilters(): void {
    this.filterDeselector.next();
  }

  public deselectSort(): void {
    this.sortDeselector.next();
  }

  private buildSortFacets(): void {
    if (this.filterGroups.length) {
      this.sortFacets = this.filterGroups.map(group => {
        const sortItem = new SortFacet();
        sortItem.displayName = group[0].propertyName;
        sortItem.sortAscending = true;
        sortItem.selected = false;
        return sortItem;
      });
    }
  }

  private initFilterSubscriptions(): void {
    this.filterService.currentFilters
      .takeUntil(this.ngUnsubscribe)
      .subscribe((filters: FilterFacet[]) => {
        this.currentFilters = filters;
        this.updateHighlights(this.currentFilters);
      });
  }

  private updateHighlights(currentFilters: FilterFacet[]): void {
    this.filterGroups.forEach(group => {
      group.forEach(filter => {
        const foundFilter = currentFilters.find(x => x.propertyValue == filter.propertyValue);
        if (foundFilter) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
      })
    })
  }

}
