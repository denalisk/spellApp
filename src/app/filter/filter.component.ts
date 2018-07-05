import { Component, OnInit, Input } from '@angular/core';
import { FilterFacet } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {
  @Input() filterGroups: FilterFacet[][];
  
  constructor() { }

  ngOnInit() {
  }

}
