import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTagComponent } from './select-tag.component';

describe('SelectTagComponent', () => {
  let component: SelectTagComponent;
  let fixture: ComponentFixture<SelectTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
