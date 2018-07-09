import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DisplayItem } from '../models/display-item.interface';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-select-tag',
  templateUrl: './select-tag.component.html',
  styleUrls: ['./select-tag.component.less']
})
export class SelectTagComponent implements OnInit, OnDestroy {
  @Input() displayItem: DisplayItem;
  @Input() deselector: Observable<void>;
  @Output() tagClicked: EventEmitter<DisplayItem> = new EventEmitter();

  public highlightTag: boolean;

  public ngUnsubscribe: Subject<void> = new Subject();

  constructor() { }

  ngOnInit() {
    this.highlightTag = this.displayItem.selected;
    this.deselector
      .takeUntil(this.ngUnsubscribe)
      .subscribe(() => {
        this.highlightTag = false
      })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public clickTag(): void {
    this.highlightTag = !this.highlightTag;
    this.displayItem.selected = this.highlightTag;
    this.tagClicked.emit(this.displayItem);
  }

}
