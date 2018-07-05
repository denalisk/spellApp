import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellItemComponent } from './spell-item.component';

describe('SpellItemComponent', () => {
  let component: SpellItemComponent;
  let fixture: ComponentFixture<SpellItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
